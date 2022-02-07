import React, { useState } from 'react';
import { ServicesHeader } from './servicesHeader';
import { ServicesSlider } from './serviceSlider';

export function Services(props: { refs: React.MutableRefObject<any> }) {
  const { refs } = props;

  const [scrolled, setScrolled] = useState(0);

  function countScrolled() {
    const slider = refs.current as unknown as HTMLElement;
    return ((slider.scrollLeft + slider.clientWidth) / slider.scrollWidth) * 100;
  }

  return (
    <div className='services'>
      <ServicesHeader />

      <div
        className='services-slider-wrapper'
        ref={refs}
        onScroll={() => {
          setScrolled(countScrolled());
        }}>
        <ServicesSlider />
      </div>

      <div className='services-slider-status' style={{ width: `${scrolled}%` }}></div>
    </div>
  );
}
