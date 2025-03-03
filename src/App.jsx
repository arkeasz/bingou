import React, { useState, useEffect } from 'react';
import './App.css';
import Bingo from './Bingo';
import Header from './Header';
import Result from './Result';

const App = () => {
  const [letter, setLetter] = useState(null);
  const [number, setNumber] = useState(null);
  const [bingo, setBingo] = useState([]);
  const [pickedNumbers, setPickedNumbers] = useState(new Set());

  useEffect(() => {
    const range = (start, stop, step = 1) => {
      if (stop === undefined) {
        [start, stop] = [0, start];
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
      }

      return Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
    };

    const BINGO = [
      ['B', range(1, 16)],
      ['I', range(16, 31)],
      ['N', range(31, 46)],
      ['G', range(46, 61)],
      ['O', range(61, 76)]
    ];

    setBingo(BINGO);
  }, []);

  const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const play = () => {
    if (pickedNumbers.size === 75) {
      return;
    }

    let newNumber;
    do {
      newNumber = randomRange(1, 75);
    } while (pickedNumbers.has(newNumber));

    setPickedNumbers((prev) => new Set(prev).add(newNumber));

    const letterIndex = Math.floor((newNumber - 1) / 15);
    const letter = ['B', 'I', 'N', 'G', 'O'][letterIndex];
    setLetter(letter);
    setNumber(newNumber);

    setBingo((prevBingo) => {
      return prevBingo.map((row) => {
        const [rowLetter, numbers] = row;
        if (rowLetter === letter) {
          return [rowLetter, numbers.filter((num) => num !== newNumber)];
        }
        return row;
      });
    });
  };

  const reset = () => {
    setLetter(null);
    setNumber(null);
    setBingo([]);
    setPickedNumbers(new Set());
  };

  return (
    <>
      <Header handleClick={reset} />
      <div className="content">
        <Result letter={letter} number={number} handleClick={play} />
        <div className="bingo">
          <Bingo bingo={bingo} pickedNumbers={pickedNumbers} />
        </div>
      </div>
    </>
  );
};

export default App;
