import React from 'react';
import { LetterIcon } from '../icons/letterIcon';
import { TextProxima } from '../textProxima';

export function Mail() {
  return (
    <div className='navigation__right__mail'>
      <TextProxima>Пишите нам на email</TextProxima>
      <a href='mailto:info@diagnistics.by' className='navigation__right__mail-btn'>
        <LetterIcon />
        <TextProxima>info@diagnistics.by</TextProxima>
      </a>
    </div>
  );
}
