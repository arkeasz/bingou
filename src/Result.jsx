import './Result.css';
import PlayButton from './PlayButton'

const Result = () => {
  return (
    <div className="result">
          <div className="show-result">
            <div className="letter">
              B
            </div>
            <div className="number">
              15
            </div>
          </div>
          <div className="play">
            <PlayButton />
          </div>
    </div>
  );
};

export default Result;
