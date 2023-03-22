import React from 'react';
import './ProfileCard.css'
import { Timeframe } from '../MainContent/MainContent';

interface Props {
  activeTimeframe: Timeframe;
  setActiveTimeframe: (newTimeframe: Timeframe) => void;
}

const ProfileCard: React.FC<Props> = ({ activeTimeframe, setActiveTimeframe }) => {
  
  return (
    <section className="profile-card">
      <div className='profile-info'>
        <div className='profile-picture'>
          <img title='profile' src="/images/image-jeremy.png" alt='profile' />
        </div>
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <nav>
        <ul>
          <li className={activeTimeframe === 'daily' ? 'active' : ''}
              onClick={() => setActiveTimeframe('daily')}>Daily
          </li>
          <li onClick={() => setActiveTimeframe('weekly')}
              className={activeTimeframe === 'weekly' ? 'active' : ''}>Weekly
          </li>
          <li onClick={() => setActiveTimeframe('monthly')}
              className={activeTimeframe === 'monthly' ? 'active' : ''}>Monthly
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default ProfileCard;
