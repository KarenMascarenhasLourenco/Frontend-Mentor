import React from 'react';
import './MainContent.css';
import MainHeader from '../MainHeader/MainHeader';
import InfoCard from '../InfoCard/InfoCard';

const MainContent = () => {
  return (
    <main>
      <MainHeader/>
      <InfoCard/>
    </main>
  )
}

export default MainContent;