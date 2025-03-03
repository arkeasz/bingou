import Bsvg from './B'
import Isvg from './I'
import Nsvg from './N'
import Gsvg from './G'
import Osvg from './O'
import './index.css';

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
