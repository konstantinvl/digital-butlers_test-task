import React from 'react';
import { TextProxima } from '../textProxima';
import { Point } from './point';
import './whyWePoints.scss';

export function WhyWePoints() {
  return (
    <div className='whywe-points'>
      <TextProxima>Вы и Ваши архитекторы получаете:</TextProxima>
      <Point text='Отчет на который на 100% можно положиться' />
      <Point text='Экономию времени и прогнозируемость сроков' />
      <Point text='Предварительные результаты сразу на месте' />
    </div>
  );
}
