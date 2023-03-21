import React from 'react';

import { Activity, Timeframe } from '../MainContent/MainContent';

type Props = {
  activity: Activity;
  timeframe: Timeframe;
};
const ActivityCard: React.FC<Props> = ({ activity, timeframe }) => {
  const { current, previous } = activity.timeframes[timeframe];
  return (
    <div>
      <h3>{activity.title}</h3>
      <p>Current: {current}hrs</p>
      <p>Previous: {previous}hrs</p>
    </div>
  );
};

export default ActivityCard;
