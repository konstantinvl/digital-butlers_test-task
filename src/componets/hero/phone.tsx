import React from 'react';
import { PhoneIcon } from '../icons/phoneIcon';
import { TextProxima } from '../textProxima';

export function Phone() {
  return (
    <div className='navigation__right__phone'>
      <div className='navigation__right__phone__top-text'>
        <PhoneIcon />
        <TextProxima>Есть вопросы? Звоните!</TextProxima>
      </div>
      <TextProxima>+375 (29) 456-45-45</TextProxima>
    </div>
  );
}
