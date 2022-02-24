import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <ul className="navbar">
        <div className="logo">
          <a href="#">Book-it</a>
        </div>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Testimonials</a>
        <Link to="/login">
          <a href="#" id="login">
            Login
          </a>
        </Link>
      </ul>
      <div className="banner">
        <div className="banner--title">Book a Ticket</div>
        <p className="banner--description">
          <i>Travel Easy!</i>
        </p>

        <div className="form-container">
          <div className="container">
            {/* <div className="search_wrap search_wrap_1"> */}
            <div className="search_box">
              <p>Departure</p>
              <input type="text" className="input" placeholder="..." />
              <div className="btn btn_common"></div>
            </div>
            {/* </div> */}
            {/* <div className="search_wrap search_wrap_2"> */}
            <div className="search_box">
              <div className="btn btn_common"></div>
              <p>Destination</p>
              <input type="text" className="input" placeholder="..." />
            </div>
            {/* </div> */}
          </div>
          <div className="container">
            {/* <div className="search_wrap search_wrap_3"> */}
            <div className="search_box">
              <p>Date</p>
              <input type="date" className="input" placeholder="..." />
              <div className="btn btn_common"></div>
            </div>
            {/* </div> */}
            {/* <div className="search_wrap search_wrap_4"> */}
            <div className="search_box">
              <div className="btn btn_common"></div>
              <p>Time</p>
              <input type="time" className="input" placeholder="..." />
            </div>
            {/* </div> */}
          </div>
          <Link to="/Agencies">
            <button>Check availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
