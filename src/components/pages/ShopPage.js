import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Visitor from '../../components/visitor/Visitor';
import Coin from '../../components/coin/Coin';
import VolumeControlDialog from '../../components/VolumeControlDialog';
import BonusCard from '../shop/BonusCard';
import Grid from '@mui/material/Grid2';
import './ShopPage.css'; // Optional CSS file for styling
import './Menubar.css'; 

// Import images
import shopImg from '../../../src/assets/images/backgrounds/shopback.webp';
import groundImg from '../../../src/assets/images/backgrounds/back1.webp';
import img1 from '../../assets/images/shopimg/animalsandcoins.png';
import img2 from '../../assets/images/shopimg/discord.png';
import img3 from '../../assets/images/shopimg/youtube.png';
import img4 from '../../assets/images/shopimg/telegram.png';
import img5 from '../../assets/images/shopimg/twitter.png';
import img6 from '../../assets/images/shopimg/youtube.png';

const apiUrl = process.env.REACT_APP_API_BASE_URL;
const ShopPage = ({ telegramId, func }) => {
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
                    <img src={shopImg} alt="Island" className="friend layer1" />
                </div>
                <div className="image_ground_shop">
                    <img src={groundImg} alt="Island" className="ground-img-shop"/>
                </div>
            <div className="card">
            <Grid container spacing={0}>
                <Grid size={{ xs: 12, md: 12 }}>
                < BonusCard img={img1} text={'Join the community'} url={'./community'} plus={100000}/>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                < BonusCard img={img2} text={'Join News Channel'} url={'../'} plus={100000}/>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                < BonusCard img={img3} text={'YouTube subscription'} url={'../'} plus={120000}/>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                < BonusCard img={img4} text={'Latest News Post'} url={'../'} plus={50000}/>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                < BonusCard img={img5} text={'Retweeting on X'} url={'../'} plus={50000}/>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                < BonusCard img={img6} text={'watching youtube short'} url={'../'} plus={50000}/>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                < BonusCard img={img6} text={'watching youtube short'} url={'../'} plus={50000}/>
                </Grid>
            </Grid>
                </div>
            </div>
        </>
    );
};

ShopPage.propTypes = {
    telegramId: PropTypes.string.isRequired,
};

export default ShopPage;