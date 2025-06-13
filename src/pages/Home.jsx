import React from 'react';
import HomeSections from '../components/HomeSections';
import HomeSectionStatsTestimonials from '../components/HomeSectionStatsTestimonials';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeSections />
      <HomeSectionStatsTestimonials />
    </div>
  );
};

export default Home;
