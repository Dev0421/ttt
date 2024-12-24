
import './App.css';
import Navbar  from './components/menu/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import BuildPage from './components/pages/BuildPage'
import SpinPage from './components/pages/SlotPage';
import CropPage from './components/pages/CropPage';
import ShopPage from './components/pages/ShopPage';
import FriendPage from './components/pages/FriendPage';
import TonShopPage from './components/pages/TonShopPage';
import Menubar from './components/pages/Menubar'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [initVisitor, setInitVisitor] = useState(0);
  const [initEnergy, setInitEnergy] = useState(0);
  const [telegramId, setTelegramId] = useState(241);

  useEffect(() => {
    const fetchTelegramId = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/user/telegramId`);
        setTelegramId(response.data.telegramId); // Assuming the response contains telegramId
      } catch (err) {
        setError('Error fetching telegram ID');
      }
    };

    fetchTelegramId();
  }, []);

  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const handleButtonClick = async (upgrade_obj, upgrade_user, upgrade_type) => {
    try {
        const response = await axios.post(`${apiUrl}/api/user/upgrade`, {
            upgrade_obj,
            upgrade_user,
            upgrade_type,
        });
        setUser(response.data);
        console.log(response.data);
        // setCounter(energy_time(user.energy_updated_at));
  } catch (error) {
        console.error('Error calling the API:', error);
    }
};

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/user/241`);
            console.log(response.data);
            setUser(response.data);
            const now = new Date();
            const elapsedHours = (now - new Date(response.data.updated_at))  /1000/ 3600; // calculate hours since last update
            const start_visitor = response.data.visitors + response.data.hourly_visitor * elapsedHours; 
            const addEnergytimes = Math.floor((now - new Date(response.data.energy_updated_at))  /1000 / 300); // This means 5 minutes. 
            console.log("const addEnergytimes = Math.floor((now - new Date(response.data.energy_updated_at))  /1000 / 300); ", response.data.energy_updated_at);
            const energy_now = Math.min(response.data.max_energy, response.data.hourly_energy*addEnergytimes);
            setInitVisitor(start_visitor);
            setInitEnergy(energy_now);
        } catch (err) {
            setError(err.response?.status === 404 ? 'User not found' : 'Please wait... Coming Soon....');
        }
    };
      fetchUser();
  }, [telegramId]);
  if (error) {
    return <div>{error}</div>;
  }

  if (!user ) {
      return <div>Loading...</div>;
  }

  return (
    <Router>
        <Menubar telegramId={telegramId} user={user} visitor={initVisitor} energy={initEnergy} func={handleButtonClick}/>
        <Routes>
          <Route path="/" element={<Navigate to="/build" />} />
          <Route path="/build" element={<BuildPage user = {user} func={handleButtonClick}/>} />
          <Route path="/spin" element={<SpinPage telegramId={telegramId} func={handleButtonClick}></SpinPage>} />       {/* Spin page */}
          <Route path="/crop" element={<CropPage telegramId={telegramId} func={handleButtonClick}></CropPage>} />       {/* Spin page */}
          <Route path="/friend" element={<FriendPage telegramId={telegramId} func={handleButtonClick}></FriendPage>} /> 
          <Route path="/tonshop" element={<TonShopPage telegramId={telegramId} func={handleButtonClick}></TonShopPage>} /> 
          <Route path="/shop" element={<ShopPage telegramId={telegramId} func={handleButtonClick}></ShopPage>} />      
        </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
