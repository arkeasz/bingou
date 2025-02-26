import './Header.css';

const Header = () => {
  return (
    <header>
        <button>
            <svg width="72" height="67" viewBox="0 0 72 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M72 0H0L4.87742 16.9552L0 33H72L67.3548 16.9552L72 0ZM72 36H0L4.87742 51.9276L0 67H72L67.3548 51.9276L72 36Z" fill="#497D74"/>
            </svg>
        </button>
        <button className="reset-button">
            Reset
        </button>
    </header>
  );
};

export default Header;
