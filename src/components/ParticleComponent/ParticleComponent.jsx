import React from 'react';
import Particles from 'react-particles-js';

const ParticleComponent = ({ particleParams }) => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
      <Particles params={particleParams} />
    </div>
  );
};

export default ParticleComponent;
