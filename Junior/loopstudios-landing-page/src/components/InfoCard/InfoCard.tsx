import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <section className='info-card'>
      <div className='no-show'>
        <img src='./images/desktop/image-interactive.jpg' alt='man with a vr glasses'/>
      </div>
      <div className='info-vr'>
        <h2>The leader in interactive VR</h2>
        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.
        </p>
      </div>
    </section>
  )
}

export default InfoCard;