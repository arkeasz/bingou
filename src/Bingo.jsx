import Bsvg from './bingo/B'
import Isvg from './bingo/I'
import Nsvg from './bingo/N'
import Gsvg from './bingo/G'
import Osvg from './bingo/O'
import './bingo/index.css';
import { useEffect, useRef } from 'react'

const Bingo = ({ bingo, pickedNumbers }) => {

  return (
    <>
      <div className="bingo default-theme">
        <Bsvg pic={pickedNumbers} />
        <Isvg pic={pickedNumbers} />
        <Nsvg pic={pickedNumbers} />
        <Gsvg pic={pickedNumbers} />
        <Osvg pic={pickedNumbers} />
      </div>
    </>
  );
};

export default Bingo;
