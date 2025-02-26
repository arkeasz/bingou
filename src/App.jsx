import './App.css';
import Bingo from './Bingo';
import Header from './Header';
import Result from './Result';

const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Result />
        <div className="bingo">
          <Bingo />
        </div>
      </div>
    </>
  );
};

export default App;
