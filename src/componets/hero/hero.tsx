import React from 'react';
import { HeroContent } from './heroContent';
import { HeroVideo } from './heroVideo';
import { Navigation } from './navigation';

export function Hero() {
  return (
    <div className='hero'>
      <Navigation />
      <HeroContent />
      <HeroVideo />
    </div>
  );
}
