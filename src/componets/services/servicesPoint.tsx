import React from 'react';
import { ArrowIcon } from '../icons/arrowIcon';
import { TextBebas } from '../textBebas';
import { TextProxima } from '../textProxima';
import { ServiceInt } from './servicesMock';
import './servicesPoint.scss';

export function ServicesPoint(props: { point: ServiceInt }) {
  const { photo, title, info, link } = props.point;
  return (
    <div className='services-point'>
      <div className='services-point__info-wrapper'>
        <div
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/' + photo})` }}
          className='services-point__photo'
        />
        <TextProxima classes={['service-title']}>{title}</TextProxima>
        <TextProxima classes={['service-info']}>{info}</TextProxima>
      </div>
      <a href={link} className='services-point__more'>
        <TextBebas>Подробнее</TextBebas>
        <ArrowIcon />
      </a>
    </div>
  );
}
