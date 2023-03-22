import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer'
import MainContent, { Timeframe, Activity } from './components/MainContent/MainContent';

export interface Props {
  activityData: Activity[];
  onTimeframeChange: (newTimeframe: Timeframe) => void;
}

function App({ activityData, onTimeframeChange }: Props) {
  const [activeTimeframe, setActiveTimeframe] = useState<Timeframe>("weekly");

 function handleTimeframeChange(newTimeframe: Timeframe) {
    setActiveTimeframe(newTimeframe);
    onTimeframeChange(newTimeframe);
  }

  return (
    <div className="App">
      <MainContent
        activityData={activityData}
        activeTimeframe={activeTimeframe}
        onTimeframeChange={handleTimeframeChange}
        setActiveTimeframe={setActiveTimeframe}
      />
      <Footer/>
    </div>
  );
}

export default App;
