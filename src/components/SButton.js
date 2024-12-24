import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  width: '50vw',
  borderRadius: '50px',
  minWidth: '100px',
  maxWidth: '300px',
  fontFamily: 'Sheriff Bounce',
  backgroundColor: 'yellow', // Bright yellow color
  color: 'brown', // Text color
  fontSize: '1.5rem', // Extra large font size
  '&:hover': {
    backgroundColor: 'gold', // Optional hover effect
  },
}));

const SButton = ({ label, onClick }) => {
  return (
    <StyledButton variant="contained" onClick={onClick}>
      {label}
    </StyledButton>
  );
};
export default SButton;