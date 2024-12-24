import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import './Energybar.css';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  borderRadius: 12,
  '& .MuiLinearProgress-bar': {
    borderRadius: 12,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Energybar = ({total, now}) => {
  return (
    <div>
        <div className='energy-text'>{now}/{total}</div>
        <BorderLinearProgress variant="determinate" value={now/total*100} />
    </div>
  );
};

export default Energybar;