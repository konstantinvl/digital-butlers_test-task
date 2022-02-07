import React from 'react';
import Stamp from '../../assets/images/stamp.png';
import Photo from '../../assets/images/photo.png';
import Polygon from '../../assets/images/Polygon.png';

export function Video() {
  return (
    <a className='hero-video__video' href='/'>
      <img src={Stamp} alt='stamp' className='hero-video__video__stamp' />
      <img src={Photo} alt='personphoto' className='hero-video__video__photo' />
      <img src={Polygon} alt='play' className='hero-video__video__play' />
    </a>
  );
}
