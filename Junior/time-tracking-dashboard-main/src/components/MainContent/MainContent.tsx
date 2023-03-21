import React, { useState } from 'react';
import ActivityCard from "../ActivityCard/ActivityCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import data from "../../data.json"
import './MainContent.css';
export type Timeframe = "daily" | "weekly" | "monthly";

export type Activity = {
  title: string;
  timeframes: Record<Timeframe, { current: number; previous: number }>;
};

export interface Props {
  setActiveTimeframe: (newTimeframe: Timeframe) => void;
  activityData: Activity[];
  activeTimeframe: Timeframe;
  onTimeframeChange: (newTimeframe: Timeframe) => void
}

const MainContent: React.FC<Props> = ({ setActiveTimeframe }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>("daily");

  const filteredData = data.filter((activity: Activity) => {
    return activity.timeframes.hasOwnProperty(timeframe);
  });

  const handleTimeframeChange = (newTimeframe: Timeframe) => {
    setTimeframe(newTimeframe);
    setActiveTimeframe(newTimeframe);
  };

  return (
    <main className='main-content'>
      <ProfileCard activeTimeframe={timeframe} setActiveTimeframe={handleTimeframeChange} />
      {filteredData.map((activity: Activity) => (
        <ActivityCard key={activity.title} activity={activity} timeframe={timeframe} />
      ))}
    </main>
  );
};

export default MainContent;
