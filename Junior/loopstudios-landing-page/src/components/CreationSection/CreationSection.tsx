import React from 'react';
import './CreationSection.css'

const CreationSection = () => {
  return (
    <section>
      <div>
        <h2>Our creations</h2>
        <button>See all</button>
      </div>
      <div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-deep-earth.jpg' alt='deep earth'/>
            </picture>
          </div>
          <h3>Deep earth</h3>
        </div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-night-arcade.jpg' alt='night arcade'/>
            </picture>
          </div>
          <h3>Night arcade</h3>
        </div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-soccer-team.jpg' alt='soccer team'/>
            </picture>
          </div>
          <h3>Soccer team VR</h3>
        </div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-grid.jpg' alt='grid'/>
            </picture>
          </div>
          <h3>The grid</h3>
        </div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-from-above.jpg' alt='from-above'/>
            </picture>
          </div>
          <h3>From up above VR</h3>
        </div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-pocket-borealis.jpg' alt='pocket borealis'/>
            </picture>
          </div>
          <h3>Pocket borealis</h3>
        </div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-curiosity.jpg' alt='curiosity'/>
            </picture>
          </div>
          <h3>The curiosity</h3>
        </div>
        <div className='creation-item'>
          <div className='creation-item-picture'>
            <picture>
              <source media='(max-width:375px)' srcset='./images/image-'/>
              <img src='./images/image-fisheye.jpg' alt='fisheye'/>
            </picture>
          </div>
          <h3>Make it fisheye</h3>
        </div>
      </div>
    </section>
  )};

export default CreationSection;