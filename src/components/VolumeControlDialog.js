import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slider from '@mui/material/Slider';
import Avatar from '@mui/material/Avatar';

import volumeimg from '../../src/assets/images/icons/volume.webp';
import avatarImg from '../../src/assets/images/icons/avat.webp';
const VolumeControlDialog = ({ vol }) => {
  const [open, setOpen] = useState(false);
  const [volume, setVolume] = useState(vol);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <img src={volumeimg} alt="Image Button" style={{ width: '9vw', minWidth: '40px' }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            top: '-38vh',
            right: '-6vw',
            width: '52vw',
            padding: '2vw 8vw', 
            backgroundColor: '#ffdeae',
            borderRadius: '8vw',
            border: '5px solid #ff904fe0',
          },
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'left', marginTop: '16px' }}>
          <Avatar 
          alt="Ramon" 
          src={avatarImg} 
          sx={{
            border: '3px solid grey', // Border color and width
            textShadow: '3px 3px 1px #0f7675',
          }}/>
          <div style={{    
            marginLeft: '10vw',
    marginTop: '2vw',
    fontSize:'1.2em',}}>Ramon</div>
        </div>

        <Slider
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Temperature"
          defaultValue={50}
          min={0}
          max={100}
          padding={10}
          color="warning"
        />
      </Dialog>
    </>
  );
};

export default VolumeControlDialog;