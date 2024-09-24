import React from 'react';
import MainStyle from './MainStyle';
import Announcement from '../Announcement';
import ChangeLog from '../ChangeLog';
import AndroidSection from '../AndroidSection';
import IosSection from '../IosSection';
import FaqSection from '../FaqSection';
import Gallery from '../Gallery';
// import Gallery from '../Gallery';

const Main = () => (
  <MainStyle id="main">
    <Announcement />
    <ChangeLog />
    <AndroidSection />
    <IosSection />
    <Gallery />
    <FaqSection />
  </MainStyle>
);

export default Main;
