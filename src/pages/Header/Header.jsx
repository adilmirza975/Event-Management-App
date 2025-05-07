import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='main'>
      <div id='left'>
        <h4>Momentiah</h4>
      </div>

      <div id='center'>
        <Link to="/" className="nav-link"><h4>Home</h4></Link>
        <Link to="/about" className="nav-link"><h4>About Us</h4></Link>
        <Link to="/events" className="nav-link"><h4>Events</h4></Link>
        <Link to="/contact" className="nav-link"><h4>Contact</h4></Link>
        
      </div>

      <div id='Right'>
        <button>Get A Ticket</button>
      </div>
    </div>
  );
};

export default Header;
