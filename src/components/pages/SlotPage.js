import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import SButton from '../SButton';
import Menubar from './Menubar';
import './SlotPage.css'; // Optional CSS file for styling
import imgIsld1 from '../../../src/assets/images/Islands/1.webp'
import imgIsld2 from '../../../src/assets/images/Islands/2.webp'
import imgIsld3 from '../../../src/assets/images/Islands/3.webp'
import imgIsld4 from '../../../src/assets/images/Islands/4.webp'
import imgIsld5 from '../../../src/assets/images/Islands/5.webp'
import imgIsld6 from '../../../src/assets/images/Islands/6.webp'
import imgIsld7 from '../../../src/assets/images/Islands/7.webp'
import imgIsld8 from '../../../src/assets/images/Islands/8.webp'
import imgIsld9 from '../../../src/assets/images/Islands/9.webp'
import imgIsld10 from '../../../src/assets/images/Islands/10.webp'
import imgIsld11 from '../../../src/assets/images/Islands/11.webp'
import imgIsld12 from '../../../src/assets/images/Islands/12.webp'
import slotImg from '../../../src/assets/images/icons/slot.webp'
import fruitImg1 from '../../../src/assets/images/icons/fruitImg1.webp'
import fruitImg2 from '../../../src/assets/images/icons/fruitImg2.webp'
import fruitImg3 from '../../../src/assets/images/icons/fruitImg3.webp'
import fruitImg4 from '../../../src/assets/images/icons/fruitImg4.webp'
import fruitImg5 from '../../../src/assets/images/icons/fruitImg5.webp'
import fruitImg6 from '../../../src/assets/images/icons/fruitImg6.webp'

const apiUrl = process.env.REACT_APP_API_BASE_URL;
const island_image= [ imgIsld1,  imgIsld2, imgIsld3,imgIsld4, imgIsld5, imgIsld6, imgIsld7, imgIsld8, imgIsld9, imgIsld10, imgIsld11, imgIsld12,];
const fruit_image= [fruitImg1, fruitImg2, fruitImg3, fruitImg4, fruitImg5, fruitImg6 ];
const elementCounts1 = [10, 1, 1, 1, 1, 1];
const elementCounts2 = [1, 1, 1, 1, 1, 1];
const elementCounts3 = [1, 1, 1, 1, 1, 1];

function createRandomizedArray(oldArray, elementCounts) {
    const tempArray = [];
    oldArray.forEach((item, index) => {
        const count = elementCounts[index] || 0;
        for (let i = 0; i < count; i++) {
            tempArray.push(item);
        }
    });
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    let shuffledArray = shuffleArray(tempArray);
    return shuffledArray;
}

function createDivElements(mainArray, referenceArray, className) {
    return mainArray.map((element, index) => {
      const refIndex = referenceArray.indexOf(element);
      if (refIndex === -1) {
        throw new Error(`Element "${element}" not found in reference array.`);
      }
      return (
        <>
            <div className={className} key={refIndex}>
                <img src={element} className="fruit_1" />
            </div>
        </>
    );
    });
}

const SlotPage = ({telegramId, func}) => {
    const [user, setUser] = useState(null);    
    const [error, setError] = useState('');
    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState(false)
    const [ring2, setRing2] = useState(false)
    const [ring3, setRing3] = useState(false)
    const [divArray1, setDivArray1] = useState(createDivElements(createRandomizedArray(fruit_image, elementCounts1), fruit_image, "ringEnd"));
    const [divArray2, setDivArray2] = useState(createDivElements(createRandomizedArray(fruit_image, elementCounts2), fruit_image, "ringEnd"));
    const [divArray3, setDivArray3] = useState(createDivElements(createRandomizedArray(fruit_image, elementCounts3), fruit_image, "ringEnd"));
    const [price, setPrice] = useState(0)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/user/${telegramId}`);
                setUser(response.data);
            } catch (err) {
                setError(err.response?.status === 404 ? 'User not found' : 'Error fetching user');
            }
        };
    
        fetchUser();
    
        // Set price and call win when ring3 changes
        if (ring3) {
            setPrice(100);
            win();
        }
    }, [telegramId, ring3]);

    if (error) {
        return <div>{error}</div>;
    }
    if (!user) {
        return <div>Loading...</div>;
    }
    function row1() {
        if(spin && ring1){
            return (
                <>
                    {createDivElements(fruit_image, fruit_image, "ringMoving")}
                </>
            )
        } else {
            return (
                <>
                    {divArray1}
                </>
            )
        }
    }
    function row2() {
        if(spin && ring2){
            return (
                <>
                    {createDivElements(fruit_image, fruit_image, "ringMoving")}
                </>
            )
        } else {
            return (
                <>
                    {divArray2}
                </>
            )
        }
    }
    function row3() {
        if(spin && ring3){
            return (
                <>
                    {createDivElements(fruit_image, fruit_image, "ringMoving")}
                </>
            )
        } else {
            return (
                <>
                    {divArray3}
                </>
            )
        }
    }
function play() {
    // func(-1, user, 'energy' );
    if(!spin){
        setSpin(true);
        setRing1(true);
        setRing2(true);
        setRing3(true);
        setDivArray1(createDivElements(createRandomizedArray(fruit_image, elementCounts1), fruit_image, "ringEnd"));
        setDivArray2(createDivElements(createRandomizedArray(fruit_image, elementCounts2), fruit_image, "ringEnd"));
        setDivArray3(createDivElements(createRandomizedArray(fruit_image, elementCounts3), fruit_image, "ringEnd"));
        setTimeout(() => {
            setRing1(false);
            setTimeout(() => {
                setRing2(false);
                setTimeout(() => {
                    setRing3(false);
                    setSpin(false);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    
}
function win() {
    func(price, user, 'coin' );
}

  return (
    <>

    <div class="image-container"> 
        <div>
            <img src={island_image[user.island_level]} alt="kk" className="island layer1" />
        </div>



<div className="slog_img1">
    <div className="slot_img2">
      <img src={slotImg} alt="Background" className="slot_img3" />
    </div>
    <div className="fullSlot">
        <div className="slot">
            <div className="row">
                {row1()}
            </div>
            <div className="row">
                {row2()}
            </div>
            <div className="row">
                {row3()}
            </div>
        </div>
    </div>
    </div>
    <div className="image4 layer4">
        <div>
        <SButton label="SPIN" onClick={() => play()}/>
        </div> 
    </div>
    </div>
</>
  );
};
export default SlotPage;
