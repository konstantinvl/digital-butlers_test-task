import React from 'react';

import { Feature } from './feature';
import './heroVideo.scss';
import One from '../../assets/images/one.png';
import Two from '../../assets/images/two.png';
import Three from '../../assets/images/three.png';
import { Video } from './videoStamp';

export function HeroVideo() {
  return (
    <div className='hero-video'>
      <div className='hero-video__left'>
        <Feature number={One} text='Начинаем работать без аванса' />
        <Feature number={Two} text='Предоставляем отсрочку платежа' />
        <Feature number={Three} text='Всегда называем справедливую цену' />
      </div>
      <Video />
    </div>
  );
}
