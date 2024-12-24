import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Building from '../building/Building';
import UButton from '../UButton';
import HButton from '../HButton';
import Menubar from '../pages/Menubar';
import './BuildPage.css'; // Optional CSS file for styling

// Import images
import imgIsld1 from '../../../src/assets/images/Islands/1.webp';
import imgIsld2 from '../../../src/assets/images/Islands/2.webp';
import imgIsld3 from '../../../src/assets/images/Islands/3.webp';
import imgIsld4 from '../../../src/assets/images/Islands/4.webp';
import imgIsld5 from '../../../src/assets/images/Islands/5.webp';
import imgIsld6 from '../../../src/assets/images/Islands/6.webp';
import imgIsld7 from '../../../src/assets/images/Islands/7.webp';
import imgIsld8 from '../../../src/assets/images/Islands/8.webp';
import imgIsld9 from '../../../src/assets/images/Islands/9.webp';
import imgIsld10 from '../../../src/assets/images/Islands/10.webp';
import imgIsld11 from '../../../src/assets/images/Islands/11.webp';
import imgIsld12 from '../../../src/assets/images/Islands/12.webp';
import imgStr1 from '../../../src/assets/images/streamers/1.webp';
import imgStr2 from '../../../src/assets/images/streamers/2.webp';
import imgStr3 from '../../../src/assets/images/streamers/3.webp';
import imgStr4 from '../../../src/assets/images/streamers/4.webp';
import imgStr5 from '../../../src/assets/images/streamers/5.webp';
import imgStr6 from '../../../src/assets/images/streamers/6.webp';
import imgStr7 from '../../../src/assets/images/streamers/7.webp';
import imgStr8 from '../../../src/assets/images/streamers/8.webp';
import imgStr9 from '../../../src/assets/images/streamers/9.webp';
import imgStr10 from '../../../src/assets/images/streamers/10.webp';
import imgPlt1 from '../../../src/assets/images/powerplants/1.webp';
import imgPlt2 from '../../../src/assets/images/powerplants/2.webp';
import imgPlt3 from '../../../src/assets/images/powerplants/3.webp';
import imgPlt4 from '../../../src/assets/images/powerplants/4.webp';
import imgPlt5 from '../../../src/assets/images/powerplants/5.webp';
import imgPlt6 from '../../../src/assets/images/powerplants/6.webp';
import imgPlt7 from '../../../src/assets/images/powerplants/7.webp';
import imgPlt8 from '../../../src/assets/images/powerplants/8.webp';
import imgPlt9 from '../../../src/assets/images/powerplants/9.webp';

const apiUrl = process.env.REACT_APP_API_BASE_URL;
// Image arrays
const islandImages = [
    imgIsld1, imgIsld2, imgIsld3, imgIsld4, imgIsld5,
    imgIsld6, imgIsld7, imgIsld8, imgIsld9, imgIsld10,
    imgIsld11, imgIsld12,
];

const streamerImages = [
    imgStr1, imgStr2, imgStr3, imgStr4, imgStr5,
    imgStr6, imgStr7, imgStr8, imgStr9, imgStr10,
];

const plantImages = [
    imgPlt1, imgPlt2, imgPlt3, imgPlt4, imgPlt5,
    imgPlt6, imgPlt7, imgPlt8, imgPlt9, 
];

function toRoman(num) {
    if (num < 1 || num > 3999) {
      return "Invalid number";
    }
  
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];
  
    let result = "";
  
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].symbol;
        num -= romanNumerals[i].value;
      }
    }
  
    return result;
  }
const BuildPage = ({func, user }) => {
    const [island, setIsland] = useState(null);
    const [streamer, setStreamer] = useState(null);
    const [plant, setPlant] = useState(null);
    const [error, setError] = useState('');
    const [islandValid, setIslandValid] = useState(false);
    const [streamerValid, setStreamerValid] = useState(false);
    const [plantValid, setPlantValid] = useState(false);

    const [count, setCount] = useState(0);
    const [alert, setAlert] = useState(true);
    const [text, setText] = useState("This is Demo")
    function energy_time(updated_at){
        const now = new Date(); // Current date and time
        const updatedTime = new Date(updated_at); // Convert the updated_at string to a Date object if needed
        const differenceInSeconds = Math.floor((now - updatedTime) / 1000); // Convert milliseconds to seconds
        return differenceInSeconds;
    }
    
    const fetchData = async (url, setter, errorMessage) => {
        try {
            const response = await axios.get(url);
            setter(response.data);
            console.log(`${errorMessage} data:`, response.data);
        } catch (err) {
            setError(err.response?.status === 404 ? `${errorMessage} not found` : `Error fetching ${errorMessage.toLowerCase()}`);
        }
    };

    useEffect(() => {
        if (user) {
            fetchData(`${apiUrl}/api/island/${user.island_level}`, setIsland, 'Island');
            fetchData(`${apiUrl}/api/streamer/${user.streamer_level}`, setStreamer, 'Streamer');
            fetchData(`${apiUrl}/api/plant/${user.plant_level}`, setPlant, 'Plant');
        }
    }, [user]);

    useEffect(() => {
        if (user.island_level * 3 >= user.streamer_level || user.island_level *2 >= user.plant_level) {
            setIslandValid(true);
          } else {
            setIslandValid(false);
          }
          console.log("STERERLSKJHLSDKJFHSLKDJFHLKSDJFHLKJSDF",streamer?.upgrade_coin, "aklsjdhflkjadf", user.coins, "asdfas",  streamer?.upgrade_coin > user.coins);
        if (user.streamer_level >= 30 || streamer?.upgrade_energy > user.energy || streamer?.upgrade_coin > user.coins)
            setStreamerValid(true);
        else 
            setStreamerValid(false);
        if (user.plant_level >= 30 || plant?.upgrade_energy > user.energy || plant?.upgrade_coin > user.coins)
            setPlantValid(true);
        if (user.island_level >= 11 || island?.upgrade_energy > user.energy || island?.upgrade_coin > user.coins)
            setIslandValid(true);
    }, [user, plant, streamer, island]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000); // 1000 milliseconds = 1 second
    
        return () => clearInterval(intervalId); // Cleanup on unmount
      }, []);
      
    if (error) {
        return <div>{error}</div>;
    }

    if (!user || !island || !streamer || !plant) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <div className="image-container"> 
                <div>
                    <img src={islandImages[user.island_level]} alt="Island" className="island layer1" />
                </div>
                <div className="image layer2">
                    <Building 
                        imageSrc={streamerImages[user.streamer_level%9]} 
                        level={user.streamer_level} 
                        upgradeCoin={island.upgrade_coin} 
                        upgradeEnergy={island.upgrade_energy} 
                    />
                    <HButton 
                        energy={streamer.upgrade_energy} 
                        coin={streamer.upgrade_coin} 
                        top={'25vh'} 
                        left={5} 
                        onClick={() => func(streamer, user, 'streamer')}
                        isdisabled = {streamerValid }
                        />
                        <div className="level_show">
                            {user.streamer_level}
                        </div>
                </div>
                <div className="image layer3">
                    <Building 
                        imageSrc={plantImages[user.plant_level%9]} 
                        level={user.plant_level} 
                        upgradeCoin={30000} 
                        upgradeEnergy={80} 
                    />
                    <HButton
                        energy={plant.upgrade_energy} 
                        coin={plant.upgrade_coin} 
                        top={'25vh'} 
                        left={5} 
                        onClick={() => func(plant, user, 'plant')}
                        isdisabled = {plantValid}
                        />
                        <div className="level_show">
                            {user.plant_level}
                        </div>
                </div>
                <UButton 
                    energy={island.upgrade_energy} 
                    coin={island.upgrade_coin} 
                    top={'67vh'} 
                    left={25} 
                    onClick={() => func(island, user, 'island')}
                    isdisabled = {islandValid}
                />
                <div className="level_show_2">{toRoman(user.island_level)}</div>
            </div>
        </>
    );
};

BuildPage.propTypes = {
    telegramId: PropTypes.string.isRequired,
};

export default BuildPage;