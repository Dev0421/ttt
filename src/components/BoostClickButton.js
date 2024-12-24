import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
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

const BoostClickButton = ({ cost=30, handleClick }) => {
  return (
    <div >
      <StyledButton variant="contained" onClick={handleClick} style={{ padding: '0px'}}>
          
            <span className="num6" style={{marginRight: '8vw'}}>${cost}</span>
       </StyledButton>
    </div>
  );
};

export default BoostClickButton;