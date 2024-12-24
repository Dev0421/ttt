import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import shopimg from '../../src/assets/images/icons/Shop.webp'

const ImageToggleButton = () => {
  const [isSmall, setIsSmall] = React.useState(false);

  return (
    <Button style={{ width: '24vw', minWidth: '100px' }}>
      <img 
        src={shopimg} 
        alt="Toggle Size" 
        style={{ 
          width:'100%', // Reduce height to 10% when clicked
          transition: 'height 0.3s ease', // Smooth transition
        }} 
      />
    </Button>
  );
};

ImageToggleButton.propTypes = {
  redirectUrl: PropTypes.string.isRequired, // URL to redirect on click
};

export default ImageToggleButton;