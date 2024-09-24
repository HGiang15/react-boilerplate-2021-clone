import React from 'react';
import Header1 from 'components/Header1';
import Hero from '../../components/Hero';
import Main from '../../components/Main';
import Footer from '../../components/Footer1';
// import BackToTop from '../../components/BackToTop';

export function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
