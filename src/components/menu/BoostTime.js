import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import './BoostTime.css';

const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  boxShadow: '3px 4px 2px brown',
  position: 'absolute',
  overflow: 'hidden',
  bottom: '40vw',
  left: '13vw',
  width: '49vw',
  display: 'block',
  border: '3px solid #b56e25',
  height: '4px',
  zIndex: '2',
  backgroundColor: '#7c7c7c',
  height: '2vh',
  borderRadius: '15px',
  '& .MuiLinearProgress-bar': {
    borderRadius: 12,
    backgroundColor: '#bdffbd',
  },
}));

const BoostTime = ({total, now}) => {

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  return (
    <div>

        <div className='boost-text'>{formatTime(now)}/{formatTime(total)}</div>
        <div>
        <BorderLinearProgress2 variant="determinate" value={now/total*100} />
        </div>
    </div>
  );
};

export default BoostTime;