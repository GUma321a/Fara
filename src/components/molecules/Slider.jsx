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
        height: 300,
        rewind: true,
        perPage: 3,
        perMove: 1,
        gap: 16,
        autoplay: true,
        interval: 3000,
        pagination: false,
      }}
    >
      {content.map((i) => {
        return (
          <SplideSlide key={i.id}>
            <div className={`slider__image-wrapper max-h-full ${itemWrapper}`.trim()}>
              <Image
                className="slider__image max-h-[150px] rounded-tl-[60px] rounded-br-[60px]"
                src={i.src}
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
Slider.defaultProps = {
  itemWrapper: '',
};
