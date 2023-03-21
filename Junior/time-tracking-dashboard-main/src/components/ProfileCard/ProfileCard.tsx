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
      <div>
        <img title='profile' src="../../../public/images/image-jeremy.png" alt='profile' />
        <p>Report for</p>
        <h1>Monthly Overview</h1>
      </div>
      
      <div>
        <ul>
          <li onClick={() => setActiveTimeframe('daily')}>Daily</li>
          <li onClick={() => setActiveTimeframe('weekly')}>Weekly</li>
          <li onClick={() => setActiveTimeframe('monthly')}>Monthly</li>
        </ul>
      </div>
    </section>
  );
};

export default ProfileCard;
