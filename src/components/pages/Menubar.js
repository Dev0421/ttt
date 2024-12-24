import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Visitor from '../../components/visitor/Visitor';
import BoostIcon from '../../components/boost/BoostIcon';
import VolumeControlDialog from '../../components/VolumeControlDialog';
import AlertDialog from '../../components/AlertDialog'
import ImageToggleButton from '../../components/ImageToggleButton';
import Coin from '../../components/coin/Coin';
import './Menubar.css'; 
import Energybar from '../menu/Energybar';



const Menubar = ({
  telegramId,
  func,
  user, 
  volume = 50,
  visitor,
  energy,
  text = 'This is just demo, and we need to update it.',
  showAlert = false,
}) => {
  return (
    <div className="menu-container">
      <div className="menu-item menu-coin">
        <Coin startNum={user.coins} />
      </div>
      <div className="menu-item menu-visitor">
        <Visitor startNum={visitor} increVal={user.hourly_visitor} />
      </div>
      <div className="menu-item menu-boost">
        <BoostIcon func = {func}/>
      </div>
      <div className="menu-item menu-volume">
        <VolumeControlDialog vol={volume} />
      </div>
        <AlertDialog text_origin={text} open={false}/>
      <div className="menu-item menu-shop">
      <Link to="/tonshop">
      <ImageToggleButton />
    </Link>
      </div>
      
      <div className="menu-item menu-energy" style={{ position: 'absolute', zIndex: '10' }}>
        <Energybar total={user.max_energy} now={user.energy} />
      </div>
    </div>
  );
};

Menubar.propTypes = {
  user: PropTypes.number.isRequired,
};

export default Menubar;
