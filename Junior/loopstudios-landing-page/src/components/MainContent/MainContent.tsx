import React from 'react';
import './MainContent.css';
import MainHeader from '../MainHeader/MainHeader';
import InfoCard from '../InfoCard/InfoCard';
import CreationSection from '../CreationSection/CreationSection';

const MainContent = () => {
  return (
    <main>
      <MainHeader/>
      <InfoCard/>
      <CreationSection/>
    </main>
  )
}

export default MainContent;