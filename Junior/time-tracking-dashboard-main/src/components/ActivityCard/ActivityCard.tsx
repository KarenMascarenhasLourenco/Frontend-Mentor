import React from 'react';
import './ActivityCard.css'

import { Activity, Timeframe } from '../MainContent/MainContent';

type Props = {
  activity: Activity;
  timeframe: Timeframe;
  image:string;
  backgroundColor:string;
};
const ActivityCard: React.FC<Props> = ({ activity, timeframe,image,backgroundColor }) => {
  const { current, previous } = activity.timeframes[timeframe];
  let time:string;
  if(timeframe === 'daily'){
    time = 'Day';
  }else if(timeframe === 'weekly'){
    time = 'Week';
  }else{
    time = 'Month';
  }
  return (
      <div className='activity' style={{backgroundColor}}>
        <div className='icon-activity' style={{backgroundImage:`url(${image})`}}>

        </div>
        <div className='activity-info'>
          <div>
            <h2>{activity.title}</h2>
            <img src='./images/icon-ellipsis.svg' alt=''/>
          </div>
          <h3>{current}hrs</h3>
          <p>Last {time} - {previous}hrs</p>
        </div>
      </div>
  );
};

export default ActivityCard;
