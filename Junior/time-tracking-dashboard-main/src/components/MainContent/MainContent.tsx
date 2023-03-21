import React, { useState } from 'react';
import ActivityCard from "../ActivityCard/ActivityCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import data from "../../../public/data.json"


type Timeframe = "daily" | "weekly" | "monthly";

const MainContent = () => {
  const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>("weekly");

  const handleTimeframeChange = (newTimeframe: Timeframe) => {
    setActiveTimeframe(newTimeframe);
  };

  const filteredData = data.map((activity) => {
    const timeframe = activity.timeframes[activeTimeframe];
    return {
      title: activity.title,
      current: timeframe.current,
      previous: timeframe.previous,
    };
  }) as Activity[];

  return (
    <main>
      <ProfileCard onTimeframeChange={handleTimeframeChange} />
      <div className="activity-cards">
        {filteredData.map((activity) => (
          <ActivityCard key={activity.title} activity={activity} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;