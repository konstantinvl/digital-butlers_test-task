import React, { useRef } from 'react';
import './App.scss';
import { Hero } from './componets/hero/hero';
import { Services } from './componets/services/services';
import { WhyWe } from './componets/whyWe/whyWe';
import { useScroll } from '@use-gesture/react';
import { Steps } from './componets/steps/steps';

function App() {
  const ref = useRef();

  const bind = useScroll((state) => {
    function scroll() {
      let { movement, currentTarget, lastOffset } = state;
      const slider = ref.current as unknown as HTMLElement;
      const sliderCords = (ref.current as unknown as HTMLElement).getBoundingClientRect();
      const elem = currentTarget as HTMLElement;
      const elemCords = elem.getBoundingClientRect();
      const sliderBottom = elem.scrollTop + sliderCords.bottom;
      const sliderTop = elem.scrollTop + sliderCords.top;
      console.log(lastOffset);
      const scrolledBottom = elemCords.height + elem.scrollTop;

      const top = sliderTop - 195;
      const bottom = sliderBottom - elemCords.height + 145;

      if (
        movement[1] > 0 &&
        slider.scrollWidth > slider.scrollLeft + sliderCords.width &&
        scrolledBottom > bottom + elemCords.height
      ) {
        console.log('right');
        if (lastOffset[1] === top) {
          elem.scrollTo({
            top: lastOffset[1],
            left: 0,
            behavior: 'auto',
          });
        } else {
          elem.scrollTo({
            top: bottom,
            left: 0,
            behavior: 'auto',
          });
        }

        slider.scrollBy({
          top: 0,
          left: 20,
          behavior: 'auto',
        });

        if (slider.scrollWidth === slider.scrollLeft + sliderCords.width) {
          elem.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth',
          });
        }
      }

      if (movement[1] < 0 && slider.scrollLeft && scrolledBottom < bottom + elemCords.height) {
        console.log('left');
        if (lastOffset[1] === bottom) {
          elem.scrollTo({
            top: lastOffset[1],
            left: 0,
            behavior: 'auto',
          });
        } else {
          elem.scrollTo({
            top: bottom,
            left: 0,
            behavior: 'auto',
          });
        }

        slider.scrollTo({
          top: 0,
          left: slider.scrollLeft - 20,
          behavior: 'auto',
        });
        if (!slider.scrollLeft) {
          elem.scrollTo({
            top: sliderBottom - bottom,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    }

    requestAnimationFrame(scroll);
  });

  return (
    <div className='app' {...bind()}>
      <Hero />
      <WhyWe />
      <Services refs={ref} />
      <Steps />
    </div>
  );
}

export default App;
