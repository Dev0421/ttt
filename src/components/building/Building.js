import * as React from 'react';
import PropTypes from 'prop-types';
import './Building.css'; // Optional CSS file for styling

const Building = ({ 
  imageSrc,  
  level = 1, 
  upgradeCoin = 0, 
  upgradeEnergy = 0, 
  text = 'Button', 
}) => {
  const handleUpgrade = () => {
    // Implement your upgrade logic here
    console.log('Upgrade clicked!');
  };

  return (
    <div className="streamer-container">
        <img src={imageSrc} alt={text} className="icon-image2" />
    </div>
  );
};

Building.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Image URL or path
  level: PropTypes.number.isRequired,
  upgradeCoin: PropTypes.number.isRequired,
  upgradeEnergy: PropTypes.number.isRequired,
};

export default Building;