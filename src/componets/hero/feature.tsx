import React from 'react';
import { TextProxima } from '../textProxima';

export function Feature(props: { number: string; text: string }) {
  const { number, text } = props;
  return (
    <div className='hero-video__feature'>
      <img src={number} alt='feature'></img>
      <TextProxima>{text}</TextProxima>
    </div>
  );
}
