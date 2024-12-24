import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from './MenuIcon'
import buildIcon from '../../assets/images/icons/menu/build.webp'
import cropIcon from '../../assets/images/icons/menu/crop.webp'
import friendIcon from '../../assets/images/icons/menu/friend.webp'
import shopIcon from '../../assets/images/icons/menu/shop.webp'
import spinIcon from '../../assets/images/icons/menu/spin.webp'
import './Navbar.css';


export default function Navbar() {

  const buttons = [
    <MenuIcon imageSrc={buildIcon} text="BUILD" iconClicked={false} destination="/build" />,
    <MenuIcon imageSrc={cropIcon} text="CROP" iconClicked={false} destination="/crop"/>,
    <MenuIcon imageSrc={spinIcon} text="SPIN" iconClicked={false} destination="/spin" />,
    <MenuIcon imageSrc={friendIcon} text="FRIEND" iconClicked={false} destination="/friend" />,
    <MenuIcon imageSrc={shopIcon} text="SHOP" iconClicked={false} destination="/shop"  />,
  ];
  return (
    <div className= "bottom-menu" >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ButtonGroup size="large" aria-label="Large button group" className="bottom-height">
          {buttons}
        </ButtonGroup>
      </Box>
    </div>
  );
}