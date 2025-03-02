import './Result.css';
import PlayButton from './PlayButton';
import { useState } from 'react';

const Result = () => {
  const [letter, setLetter] = useState(null);
  const [number, setNumber] = useState(null);

  function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
  };

  /**
   *
   * @param {number} min
   * @param {number} max
   * @returns { number }
   */
  function randomRange(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum
  }

  function handleClick() {
    const letters = ['B', 'I', 'N', 'G', 'O']
    setLetter(letters[randomRange(0, 4)])
    setNumber(randomRange(1, 75));
  }

  return (
    <div className="result">
      <div className="show-result">
        <div className="letter">
          {letter !== null ? letter : ''}
        </div>
        <div className="number">
          {number !== null ? number : '?'}
        </div>
      </div>
      <PlayButton  onClick={handleClick} />
    </div>
  );
};

export default Result;
