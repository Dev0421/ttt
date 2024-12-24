import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import FButton from '../FButton';
import Menubar from '../pages/Menubar';
import ImageFloatAnimation from '../ImageFloatAnimation';
import './FriendPage.css'; // Optional CSS file for styling

// Import images
import friendImg from '../../../src/assets/images/backgrounds/friend_back.webp';
import groundImg from '../../../src/assets/images/backgrounds/board.webp';


const apiUrl = process.env.REACT_APP_API_BASE_URL;
const FriendPage = ({ telegramId, func }) => {
    const [user, setUser] = useState(null);
    const [island, setIsland] = useState(null);
    const [streamer, setStreamer] = useState(null);
    const [plant, setPlant] = useState(null);
    const [error, setError] = useState('');

    const fetchData = async (url, setter, errorMessage) => {
        try {
            const response = await axios.get(url);
            setter(response.data);
            console.log(`${errorMessage} data:`, response.data);
        } catch (err) {
            setError(err.response?.status === 404 ? `${errorMessage} not found` : `Error fetching ${errorMessage.toLowerCase()}`);
        }
    };
    const handleFriend = () => {

    }
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
            <div > 
                <div className="image-container">
                    <img src={friendImg} alt="Island" className="friend layer1" />
                </div>

                <div className="image-ground">
                    <img src={groundImg} alt="Island" className="ground-img"/>
                </div>
                <div className="image-text">
                    Invite Friends
                </div>
            </div>
            
        <ImageFloatAnimation settings={{ count: 30, speed: 3     }} />
            <FButton 
                top={'68vw'} 
                left={15} 
                lavel={'Invite a friend.'}
                onClick={() => handleFriend()}
            />
        </>
    );
};

FriendPage.propTypes = {
    telegramId: PropTypes.string.isRequired,
};

export default FriendPage;