import React, { useState, useEffect } from 'react';
import './App.css';
import Bingo from './components/bingo/Bingo';
import Header from './components/Header';
import Result from './components/Result';
import playAudio from './utils/playAudio.js';
import './components/GameOver.css'
import GameOver from './components/GameOver';
import range from './utils/range.js'

const App = () => {
  const [letter, setLetter] = useState(null);
  const [number, setNumber] = useState(null);
  const [bingo, setBingo] = useState([]);
  const [pickedNumbers, setPickedNumbers] = useState(new Set());
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
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
    playAudio('/bingou/audios/Coin.wav')
  };

  const reset = () => {
    playAudio('/bingou/audios/1up.wav')
    setLetter(null);
    setNumber(null);
    setBingo([]);
    setPickedNumbers(new Set());
    setIsFinished(false)
  };

  useEffect(() => {
    if (isFinished) return; 
    let a = []
    bingo.forEach(el => {
      if (el[1].length == 0)  {
        a.push(el)
      }
    })

    if (a.length == 5) {
      playAudio('/bingou/audios/gameover.wav');
      setIsFinished(true)
    }
  }, [bingo])

  return (
    <>
      { isFinished ? <GameOver handleClick={reset} /> : null }
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
