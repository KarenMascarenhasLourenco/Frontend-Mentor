import React, { useState } from 'react';
import './App.css';
import MainContent, { Activity } from './components/MainContent/MainContent';

type Props = {
  activityData: Activity[];
};

function App({ activityData }: Props) {
  const [activeTimeframe, setActiveTimeframe] = useState('daily');

  const handleTimeframeChange = (newTimeframe: string) => {
    setActiveTimeframe(newTimeframe);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Time Tracking Dashboard</h1>
      </header>
      <MainContent activityData={activityData} activeTimeframe={activeTimeframe} onTimeframeChange={handleTimeframeChange} />
    </div>
  );
}

export default App;
