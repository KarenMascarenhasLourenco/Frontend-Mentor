import React, { useState } from 'react';
import ActivityCard from "../ActivityCard/ActivityCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import data from "../../data.json"

export type Timeframe = "daily" | "weekly" | "monthly";

export type Activity = {
  title: string;
  timeframes: Record<Timeframe, { current: number; previous: number }>;
};

interface Props {
  setActiveTimeframe: (newTimeframe: Timeframe) => void;
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
    <div>
      <ProfileCard activeTimeframe={timeframe} setActiveTimeframe={handleTimeframeChange} />
      {filteredData.map((activity: Activity) => (
        <ActivityCard key={activity.title} activity={activity} timeframe={timeframe} />
      ))}
    </div>
  );
};

export default MainContent;
