import * as React from 'react';
import PropTypes from 'prop-types';
import coinGround from "../../assets/images/coin_ground.png";
import './coin.css'

const Coin = ({startNum}) => {

  return (
    <div className="coin">
      <div className="coin-tag">
        <img src={coinGround} className="coin-image"/>
      </div>
      <div id="incre_coin" className="coin-counter" >{startNum.toLocaleString('en-US')}</div> 
    </div>
  );
};

Coin.propTypes = {
  startNum: PropTypes.number.isRequired,
};

export default Coin;