import React from 'react';
import './Header.css'

const Header = () => {
  return(
    <header>
      <div className="logo-container">
        <img src='./images/logo.svg' alt='logo'/>
      </div>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;