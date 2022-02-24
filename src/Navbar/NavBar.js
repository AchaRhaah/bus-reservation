import { Link } from 'react-router-dom';
import React from 'react';

export default function NavBar() {
  return (
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
  );
}
