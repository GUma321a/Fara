import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import pt from 'prop-types';
import { Image } from '../atoms';

export default function Slider({ content, itemWrapper, wrapperClass }) {
  return (
    <Splide
      className={wrapperClass}
      options={{
        rewind: true,
        perPage: 3,
        perMove: 1,
        gap: 16,
        autoplay: true,
        interval: 3000,
        pagination: false,
        breakpoints: {
          760: {
            perPage: 1,
          },
          1000: {
            perPage: 2,
          },
        },
      }}
    >
      {content.map((i) => {
        return (
          <SplideSlide key={i.id}>
            <div className={`slider__image-wrapper ${itemWrapper}`.trim()}>
              <Image
                className="slider__image h-full max-h-[300px] rounded-br-[60px] rounded-tl-[60px]"
                src={i.src}
                fill
              />
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

Slider.propTypes = {
  content: pt.instanceOf(Array),
  itemWrapper: pt.string,
  wrapperClass: pt.string,
};
