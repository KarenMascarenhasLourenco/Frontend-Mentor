import React from 'react';
import './Header.css'

const Header = () => {
  
    const buttonMenu = document.getElementById('buttonMenu') as HTMLElement;
    const closeButton = document.getElementById('closeButton') as HTMLElement;
    const navMenu = document.getElementById('navMenu') as HTMLElement;

    function handleClick(){
      if (buttonMenu && closeButton && navMenu) {
        buttonMenu.classList.toggle('active')
        closeButton.classList.toggle('active');
        navMenu.classList.toggle('active')
      }
    }

  return(
    <header>
      <div className="logo-container">
        <img src='./images/logo.svg' alt='logo'/>
      </div>
      <nav className="no-show-nav-mobile">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
        <img onClick={()=> handleClick()} alt='' src='./images/icon-hamburger.svg' id='buttonMenu' className=' no-show-desktop active'/>
        <nav className="no-show-desktop" id='navMenu'>
          <img onClick={()=> handleClick()} alt=""  src='./images/icon-close.svg' id='closeButton' className='no-show-desktop'/>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;