import React from 'react';
import PointIcon from '../../assets/images/point.png';
import { TextProxima } from '../textProxima';

export function Point(props: { text: string }) {
  const { text } = props;
  return (
    <div className='whywe-points__point'>
      <img src={PointIcon} alt='point' />
      <TextProxima>{text}</TextProxima>
    </div>
  );
}
