import React from 'react';
import './CreationSection.css'

const CreationSection = () => {
  return (
    <section className='creation-section'>
      <div>
        <h2>Our creations</h2>
        <button>See all</button>
      </div>
      <div className='creation-items'>
        <div className='deep-earth'>
          <h3>Deep earth</h3>
        </div>
        <div className='night-arcade'>
          <h3>Night arcade</h3>
        </div>
        <div className='soccer-team'>
          <h3>Soccer team VR</h3>
        </div>
        <div className='the-grid'>
          <h3>The grid</h3>
        </div>
        <div className='above-vr'>
          <h3>From up above VR</h3>
        </div>
        <div className='pocket-borealis'>
          <h3>Pocket borealis</h3>
        </div>
        <div className='the-curiosity'>
          <h3>The curiosity</h3>
        </div>
        <div className='fisheye'>
          <h3>Make it fisheye</h3>
        </div>
      </div>
    </section>
  )};

export default CreationSection;