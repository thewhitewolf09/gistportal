import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import JobSearchForm from '../components/Home/JobSearchForm';
import LatestJobOpenings from '../components/Home/LatestJobOpenings';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <JobSearchForm/>
      <LatestJobOpenings/>
    </div>
  );
};

export default Home;
