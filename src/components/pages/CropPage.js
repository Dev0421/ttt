import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Building from '../building/Building';
import LButton from '../LButton';
import Menubar from '../pages/Menubar';
import './CropPage.css'; // Optional CSS file for styling

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
const apiUrl = process.env.REACT_APP_API_BASE_URL;
const CropPage = ({ telegramId, func }) => {
    const [user, setUser] = useState(null);
    const [island, setIsland] = useState(null);
    const [streamer, setStreamer] = useState(null);
    const [plant, setPlant] = useState(null);
    const [error, setError] = useState('');

    const handleWallet = () => {
        
    };
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
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/user/${telegramId}`);
                setUser(response.data);
            } catch (err) {
                setError(err.response?.status === 404 ? 'User not found' : 'Error fetching user');
            }
        };

        fetchUser();
    }, [telegramId]);

    useEffect(() => {
        if (user) {
            fetchData(`${apiUrl}/api/island/${user.island_level}`, setIsland, 'Island');
            fetchData(`${apiUrl}/api/streamer/${user.streamer_level}`, setStreamer, 'Streamer');
            fetchData(`${apiUrl}/api/plant/${user.plant_level}`, setPlant, 'Plant');
        }
    }, [user]);

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
                <LButton 
                    top={'50vh'} 
                    left={15} 
                    onClick={() => handleWallet()}
                />
            </div>
        </>
    );
};

CropPage.propTypes = {
    telegramId: PropTypes.string.isRequired,
};

export default CropPage;