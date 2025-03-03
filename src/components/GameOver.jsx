const GameOver = ({ handleClick }) => {
    return (
        <div className='modal'>
        <h2>GAME OVER!!</h2>
        <button onClick={handleClick} className="reset-button-modal">
            Reset
        </button>
        </div>
    )
}

export default GameOver;
