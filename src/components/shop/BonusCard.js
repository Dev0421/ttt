import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import Button from '@mui/material/Button';
import groundImg from '../../assets/images//backgrounds/back2.png';
import coinImg from '../../assets/images/icons/coin.webp'
import './Card.css'
const GoButton = styled(Button)(({ theme }) => ({
  padding: '0px',
  borderRadius: '10px',
  minWidth: '15vw',
  maxWidth: '20vw',
  fontFamily: 'Sheriff Bounce',
  backgroundColor: '#00ffc3',
  color: 'white',
  fontSize: '5vw',
  textShadow: '1px 1px 0 #000',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#00d9f2',
  },  
  '&.Mui-disabled': { // Disabled button style
    backgroundColor: '#e8e8e8e3',
    color: '#6f6f6f',
    cursor: 'not-allowed',
  },
}));


export default function BonusCard({img='', plus=100, text="Defalue", url='../'}) {
  const handleBuyClick = async () => {
    
  }
  return (
    <div className = "bonus-card">
      <div className="bonus-ground">
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
  <Grid size={{ xs: 3, md: 3 }}>
  <div className = "bonus-image">
        <img src={img} alt="Island" className = "bb-images"/>
      </div>
  </Grid>
  <Grid size={{ xs: 5, md: 5 }}>
  <div className = "container bonus-text">
        {text}
      </div>
    <div className = " add_coin"><span>  <img src={coinImg} alt="Island" className = "small-default" /></span>
    <div className = "incre_num">
    +{plus.toLocaleString('en-US')}
    </div>
      </div>
  </Grid>
  <Grid size={{ xs: 4, md: 4 }} >
    <div className="bonus-but">

        <GoButton variant="contained" onClick={() => window.location.href = url }>GO</GoButton>
    </div>
  </Grid>
</Grid>
        <img src={groundImg} alt="Island" className = "bb-images"/>
      </div>
      
      
      
      
      </div>
  );
}
