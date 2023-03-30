import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="attribution">
      <div className="social-brand">
        <img alt='' src='./images/logo.svg' />
        <div>
          <img alt='' src='./images/icon-facebook.svg' />
          <img alt='' src='./images/icon-twitter.svg' />
          <img alt='' src='./images/icon-pinterest.svg' />
          <img alt='' src='./images/icon-instagram.svg' />
        </div>
      </div>
      <div className="info-footer">
        <div className="links-footer">
          <a href=''>About</a>
          <a href=''>Careers</a>
          <a href=''>Events</a>
          <a href=''>Products</a>
          <a href=''>Support</a>
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
      <div>
        Challenge by <a rel='noopener noreferrer' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://karenmascarenhaslourenco.github.io/">Karen Lourenço</a>.
      </div>
    </footer>
  )
}

export default Footer