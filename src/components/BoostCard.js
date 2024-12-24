import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from './TonButton';
import Typography from '@mui/material/Typography';
import iconImg2 from '../../assets/images/Energy.webp';

export default function BoostCard({boost=100, energy=100, text, cost=100,}) {
  const handleBuyClick = async () => {
  }
  return (
    <Card sx={{ 
      overflow: 'hidden',
      minWidth: '100%',
      width: '20vw',
      border: '10px solid #b40000',
      borderRadius: '21%',
      backgroundColor: '#ffeddd',
      margin: '7px 14px',}}>
      <CardContent style={{padding:0}}>
        <Typography variant="h5" component="div" style={{
          fontFamily: 'Sheriff Bounce',
          fontSize: '11vw',
          margin: 0,
          fontColor: 'cyan',
          color: '#51e9e5',
          textShadow: '3px 3px 1px #0f7675',
          justifyContent: 'center',
          /* box-shadow: 1px 1px 1px black; */
          display: 'flex',
        }}>
          {energy}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }} style={
          {
            fontFamily: 'Sheriff Bounce',
            textAlign: 'center',
            marginBottom: '0px'
          }
        }>
          
          {text}</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }} style={{marginBottom:'0px'}}>
        <img src={iconImg2} style={{    width: '29%',
    justifyContent: 'center',
    display: 'flex',
    margin: 'auto',}}>
        </img></Typography>
      </CardContent>
      <CardActions style={{padding: '0px',
    margin: 'auto',
    justifyContent: 'center',
    display: 'flex',
    marginBottom: '2px',
    }}>
        <Button 
        cost={cost} 
        onClick={() => handleBuyClick()}>{cost}</Button>
      </CardActions>
    </Card>
  );
}
