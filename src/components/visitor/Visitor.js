import * as React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'; // Importing useState and useEffect
import visitorGround from "../../assets/images/visitor_ground.png";
import './Visitor.css'

const Visitor = ({ startNum, increVal}) => {
  const [counter, setCounter] = useState(startNum); // Initialize counter with startNum
  const incrementPerSecond = increVal/3600; // Use increVal for increments
  const incrementPerUpdate = incrementPerSecond / 20; // Increment per update
  const [hourly_rate, setHourlyRate] = useState(increVal);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => parseFloat((prevCounter + incrementPerUpdate).toFixed(2)));
    }, 50); // Update every 0.1 seconds (100ms)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [incrementPerUpdate]); // Add incrementPerUpdate to dependencies

  return (
    <div className="visitor">
      <div className="visitor-tag">
      
      {/* Display counter */}
        <img src={visitorGround} className="visitor-image"/>
      </div>
      <div id="incre_visitor" className="visitor-counter" >
        <div>{counter}</div>
        <div className = "hourly_rate_incre">+{hourly_rate}/hr</div>
        </div> 
      
    </div>
  );
};

Visitor.propTypes = {
  startNum: PropTypes.number.isRequired,
  increVal: PropTypes.number.isRequired, // Increments per minute of visitors
};

export default Visitor;