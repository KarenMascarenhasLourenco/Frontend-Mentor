import React from 'react';

import { Timeframe } from '../MainContent/MainContent';

interface Props {
  activeTimeframe: Timeframe;
  setActiveTimeframe: (newTimeframe: Timeframe) => void;
}

const ProfileCard: React.FC<Props> = ({ activeTimeframe, setActiveTimeframe }) => {
  return (
    <div>
      <h2>Monthly Overview</h2>
      <div>
        <h3>{activeTimeframe}</h3>
        <button onClick={() => setActiveTimeframe('daily')}>Daily</button>
        <button onClick={() => setActiveTimeframe('weekly')}>Weekly</button>
        <button onClick={() => setActiveTimeframe('monthly')}>Monthly</button>
      </div>
    </div>
  );
};

export default ProfileCard;
