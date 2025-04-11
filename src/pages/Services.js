import React from 'react';
import ProblemCard from '../components/ProblemCard';
import '../styles/Services.scss';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Problèmes de cablage courants et solutions</h1>
      <ProblemCard />
    </div>
  );
};

export default Services;