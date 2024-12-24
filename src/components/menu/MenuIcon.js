import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './MenuIcon.css'; // Optional CSS file for styling



const MenuIcon = ({ imageSrc, text, iconClicked = false, destination }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(destination); // Navigate to the specified destination
  };
  return (
  <Button key="build" className="icon icon-height" onClick={handleClick}>
    <div className="icon-container">
      {iconClicked ? (
        <>
          <div><img src={imageSrc} alt={text} className="icon-image" /></div>
          <div><span className="icon-text">{text}</span></div>
        </>
      ) : (
        <>
          <div style={{ width: '72px', height: '81px' }}><img src={imageSrc} alt={text} className="icon-image" /></div>
          <div><span className="icon-text">{text}</span></div>
        </>
      )}
    </div>
  </Button>
  );
};

MenuIcon.propTypes = {
  imageSrc: PropTypes.string.isRequired,  // Image URL or path
  text: PropTypes.string.isRequired,      // Text to display
  iconClicked: PropTypes.bool,            // Boolean to toggle image first or text first
};

export default MenuIcon;
