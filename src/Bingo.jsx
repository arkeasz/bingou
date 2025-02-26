import Bsvg from './bingo/B'
import Isvg from './bingo/I'
import Nsvg from './bingo/N'
import Gsvg from './bingo/G'
import Osvg from './bingo/O'
import './bingo/index.css';

const Bingo = () => {
  return (
    <>
      <div className="default-theme">
        <Bsvg />
        <Isvg />
        <Nsvg />
        <Gsvg />
        <Osvg />
      </div>
    </>
  );
};

export default Bingo;
