import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import iconImg1 from '../assets/images/Ton.webp';
import './UButton.css';

const StyledButton = styled(Button)(({ theme }) => ({
  width: '33vw',
  borderRadius: '20%',
  minWidth: '100px',
  maxWidth: '300px',
  fontFamily: 'Sheriff Bounce',
  backgroundColor: '#8ce06b',
  color: 'White',
  textShadow: '1px 1px 0 #000',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#498233',
  },
}));

const TonButton = ({ cost=30, handleClick }) => {
  return (
    <div >
      <StyledButton variant="contained" onClick={handleClick} style={{ padding: '0px'}}>
          <>
            <img
              src={iconImg1}
              alt="Up Icon"
              style={{position:'absolute',
                maxWidth: '11vw',
                margin: '-26px 6px 0 89px'}}
            />
            <span className="num2" style={{marginRight: '8vw'}}>${cost}</span>
          </>
       </StyledButton>
    </div>
  );
};

export default TonButton;