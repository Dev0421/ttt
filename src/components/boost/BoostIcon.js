import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid2';
import boost_backgroundImg from '../../assets/images/backgrounds/boostbackground.webp'
import boost1 from '../../assets/images/boost1.webp';
import boostimg from '../../../src/assets/images/icons/boost_icon.webp'
import BoostCard from '../shop/BoostCard';
import BoostTime from '../menu/BoostTime'
import boostMissle from '../../assets/images/icons/boostMissile.webp'
import './BoostIcon.css';

const BoostIcon = ({ total=300, now=157, func }) => {
  const [open, setOpen] = React.useState(false);

  // Default images


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageButtonClick = (image) => {
    console.log(`Clicked button for: ${image}`);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <img src={boostimg} alt="Open Dialog" style={{ width: '12vw', minWidth: '50px'}} />
      </Button>

      <Dialog
        BackdropProps={{
          style: {
            backgroundColor: 'black', // Sets the backdrop background color to black
            opacity: 0.6, // Optional: Adjust opacity as needed
          },
        }}
      PaperProps={{
        elevation : 0,
        style: {
          backgroundColor: 'transparent', // Set your desired background color here
          color: '#000000', // Optional: Set text color for contrast
          padding: '5px',
          width: '72vw',
          overflow: 'hidden',
          marginTop: '-6vh',
          height: '72vh',
          
        },
      }}
       open={open} onClose={handleClose} >
        
        
        <DialogContent sx={{
          backgroundImage: '../../assets/images/icons/Boost_3.webp', // Replace with your image patt
        }}
        style={{ 
          padding:'2vw',
            width: '72vw',maxWidth: '65vh', height:'60vh',
          textAlign:'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden'
        }} >
        <img src={boost1} alt="Open Dialog" style={{ width: '70vw', minWidth: '150px', maxWidth:'400px'}} />
        <div className="boost_gro">
          <img src={boost_backgroundImg} alt="Open Dialog" className="img_gro" />
        </div>
        <div className="boost_missile">
          <img src={boostMissle} alt="Open Dialog" className="img_missile" />
        </div>
        <BoostTime total={total} now={now} />
            <Grid 
                container spacing={1}
                sx={{
                  margin: '16vh 2vw 0vh 2vw',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '66vw',
                  position: 'absolute',
                  bottom: '3vh',
                }}
            >
                <Grid size={{ xs: 6, md: 6 }} >
                < BoostCard time={10} text='50% more' cost={0} func = {func}/>
                </Grid>
                <Grid size={{xs: 6, md: 6}}>
                < BoostCard time={30} text={'80% more'} cost={7.89} func = {func}/>
                </Grid>
                <Grid size={{xs: 6, md: 6 }}>
                < BoostCard time={60} text={'100% more'} cost={11.99} func = {func}/>
                </Grid>
                <Grid size={{xs: 6, md: 6 }}>
                < BoostCard time={120} text={'120% more'} cost={129.99} func = {func}/>
                </Grid>
            </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};


export default BoostIcon;