import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <section>
      <div className="promo-vr">
        <picture>
          <source/>
          <img src='./images/desktop/image-interactive' alt='' />
        </picture>
      </div>
      <div>
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