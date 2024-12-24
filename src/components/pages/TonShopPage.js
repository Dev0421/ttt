import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductCard from '../shop/ProductCard';
import Grid from '@mui/material/Grid2';
import './TonShopPage.css'; // Optional CSS file for styling
import './Menubar.css'; 

// Import images
import shopImg from '../../../src/assets/images/backgrounds/shopback.webp';
import groundImg from '../../../src/assets/images/backgrounds/shop_gro.webp';

const apiUrl = process.env.REACT_APP_API_BASE_URL;
const TonShopPage = ({ telegramId, func }) => {
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
                {/* <div className="image-text2">
                    TonShop
                </div> */}
            <div className="card">
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 6 }}>
                < ProductCard energy={60} text={'50% more'} cost={3.29}/>
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                < ProductCard energy={124} text={'80% more'} cost={7.89}/>
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                < ProductCard energy={300} text={'100% more'} cost={11.99}/>
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                < ProductCard energy={700} text={'120% more'} cost={129.99}/>
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                < ProductCard energy={'1.4K'} text={'180% more'} cost={332.98}/>
                </Grid>
                <Grid size={{ xs: 6, md: 6 }}>
                < ProductCard energy={'2.1K'} text={'300% more'} cost={999.99}/>
                </Grid>
            </Grid>
                </div>
            </div>
        </>
    );
};

TonShopPage.propTypes = {
    telegramId: PropTypes.string.isRequired,
};

export default TonShopPage;