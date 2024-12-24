import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import iconImg1 from '../assets/images/icons/coin.webp';
import iconImg2 from '../assets/images/icons/energy.webp';
import './UButton.css';

const StyledButton = styled(Button)(({ theme }) => ({
  width: '50vw',
  borderRadius: '50px',
  minWidth: '100px',
  maxWidth: '300px',
  fontFamily: 'Sheriff Bounce',
  backgroundColor: 'yellow',
  color: 'brown',
  fontSize: '1.3rem',
  '&:hover': {
    backgroundColor: 'gold',
  },
  '&.Mui-disabled': { // Disabled button style
    backgroundColor: '#e8e8e8e3',
    color: '#6f6f6f',
    cursor: 'not-allowed',
  },
}));

const UButton = ({ energy, coin, top, left, onClick, isdisabled }) => {
  return (
    <div className="btn_upgrade" style={{ top: `${top}`, left: `${left}vw` }}>
      <StyledButton variant="contained" onClick={onClick} style={{ padding: '5px', maxHeight: '8vh'}} disabled = {isdisabled}>
        {energy > 0 && (
          <>
            <img
              src={iconImg2}
              alt="Up Icon"
              className="icon2"
            />
            <span className="num2">{energy.toLocaleString('en-US')}</span>
          </>
        )}
        {coin > 0 && (
          <>
            <img
              src={iconImg1}
              alt="Down Icon"
              className="icon2"
            />
            <span className="num2">{coin.toLocaleString('en-US')}</span>
          </>
        )}
      </StyledButton>
    </div>
  )
};

export default UButton;