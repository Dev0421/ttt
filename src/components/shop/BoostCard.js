import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '../BoostClickButton';
import Typography from '@mui/material/Typography';

export default function BoostCard({time=100, cost=100, func}) {
  const handleBuyClick = async () => {

  }
  return (
    <Card sx={{ 
      overflow: 'hidden',
      width: '30vw',
      border: '2px solid #e9824d',
      boxShadow: '2px 1px 4px #612727',
      borderRadius: '20%',
      backgroundColor: '#ffeddd',
      margin: '0vw',}}>
      <CardContent style={{padding:0}}>
        <Typography variant="h5" component="div" style={{
          fontFamily: 'Sheriff Bounce',
          fontSize: '6vw',
          margin: 0,
          fontColor: 'cyan',
          color: '#51e9e5',
          textShadow: '2px 2px 1px #0f7675',
          justifyContent: 'center',
        }}>
          {time}min
        </Typography>
      </CardContent>
      <CardActions style={{padding: '0px',
          margin: 'auto',
          justifyContent: 'center',
          display: 'flex',
          marginBottom: '2px',
          }}>
        <Button 
        cost={cost} 
        onClick={() => handleBuyClick()}></Button>
      </CardActions>
    </Card>
  );
}
