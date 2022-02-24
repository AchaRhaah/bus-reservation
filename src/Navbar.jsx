import React from 'react'
import './Navbar.css'
function Navbar(){
    return(
        <div className="Header">
         <ul class="navbar">
              <div class="logo">
                  <a href="#">Book-it</a>
              </div>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Testimonials</a>
              <a href="#" id="login">Login</a>
          </ul>
        </div>
    )
}
export default Navbar