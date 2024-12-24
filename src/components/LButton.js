import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import iconImg1 from '../assets/images/icons/coin.webp';
import iconImg2 from '../assets/images/icons/energy.webp';
import './LButton.css';

const StyledButton = styled(Button)(({ theme }) => ({
  width: '70vw',
  borderRadius: '50px',
  minWidth: '100px',
  maxWidth: '500px',
  fontFamily: 'Sheriff Bounce',
  backgroundColor: '#2e7d32',
  color: 'white',
  fontSize: '1.4rem',
  textShadow: '1px 1px 0 #000',
  '&:hover': {
    backgroundColor: '#115f15',
  },
}));

const LButton = ({ top, left, onClick }) => {
  return (
    <div className="btn_upgrade" style={{ top: `${top}`, left: `${left}vw` }}>
      <StyledButton variant="contained" onClick={onClick} style={{ padding: '5px'}}>
         <>
            <img
              src={iconImg1}
              alt="Up Icon"
              className="icon2"
            />
            <span className="num2">Connect Wallet</span>
          </>
        </StyledButton>
    </div>
  );
};

export default LButton;