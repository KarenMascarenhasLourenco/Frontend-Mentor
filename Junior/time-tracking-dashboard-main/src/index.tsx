import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Timeframe} from './components/MainContent/MainContent'
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from './data.json';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function handleTimeframeChange(newTimeframe: Timeframe) {  }
root.render(
  <React.StrictMode>
    <App activityData={data} onTimeframeChange={handleTimeframeChange} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
