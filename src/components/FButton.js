import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import iconImg1 from '../assets/images/icons/friend_avatar.webp';
import iconImg2 from '../assets/images/icons/energy.webp';
import './FButton.css';

const StyledButton = styled(Button)(({ theme }) => ({
  width: '70vw',
  borderRadius: '50px',
  minWidth: '100px',
  maxWidth: '500px',
  fontFamily: 'Sheriff Bounce',
  backgroundColor: '#cb61e3',
  color: 'white',
  fontSize: '4.5vw',
  textShadow: '2px 2px 3px black',
  '&:hover': {
    backgroundColor: '#a93e0d',
  },
}));

const FButton = ({ top, left, onClick, lavel }) => {
  return (
    <div className="btn_upgrade_f" style={{ top: `${top}`, left: `${left}vw` }}>
      <StyledButton variant="contained" onClick={onClick} style={{ padding: '5px', textAlign:'left', textAlign:'left'}}>
         <>
            <img
              src={iconImg1}
              alt="Up Icon"
              className="icon2"
            />
            <span className="num3">{lavel}</span>
            <img
              src={iconImg2}
              alt="Up Icon"
              className="icon3"
            />
            <span className="num3">+15</span>
          </>
        </StyledButton>
    </div>
  );
};

export default FButton;