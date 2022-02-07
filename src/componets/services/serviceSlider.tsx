import React from 'react';
import { ServicesMock } from './servicesMock';
import { ServicesPoint } from './servicesPoint';
import './servicesSlider.scss';

export function ServicesSlider() {
  return (
    <div className='services-slider'>
      {ServicesMock.map((service) => (
        <ServicesPoint point={service} key={service.id} />
      ))}
    </div>
  );
}
