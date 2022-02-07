import React from 'react';
import { WhyWeContent } from './whyweContent';
import { WhyWePoints } from './whyWePoints';
import TermoSensor from '../../assets/images/tv.png';

export function WhyWe() {
  return (
    <div className='whywe'>
      <WhyWeContent />
      <img src={TermoSensor} alt='termal sensor' className='whywe-picture' />
      <WhyWePoints />
    </div>
  );
}
