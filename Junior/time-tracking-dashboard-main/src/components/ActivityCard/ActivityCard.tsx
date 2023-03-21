import React from 'react';
type Props = {
  activity: Activity;
};
function ActivityCard({ activity }) {
  return (
    <div>
      <h3>{activity.title}</h3>
      <p>Current: {activity.timeframes.current}hrs</p>
      <p>Previous: {activity.timeframes.previous}hrs</p>
    </div>
  );
}

export default ActivityCard;
