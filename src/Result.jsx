import React from 'react';
import './Result.css';
import PlayButton from './PlayButton';

const Result = ({ letter, number, handleClick }) => {
  return (
    <div className="result">
      <div className="show-result">
        <div className="letter">{letter !== null ? letter : ''}</div>
        <div className="number">{number !== null ? number : '?'}</div>
      </div>
      <PlayButton onClick={handleClick} />
    </div>
  );
};

export default Result;
