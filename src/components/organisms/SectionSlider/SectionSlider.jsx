import React from 'react';
import { Slider } from '../../molecules';
import item_1 from '../../../assets/images/decor/fara-1.jpg';
import item_2 from '../../../assets/images/decor/fara-2.jpg';
import item_3 from '../../../assets/images/decor/fara-3.jpg';
import item_4 from '../../../assets/images/decor/fara-4.jpg';
import item_5 from '../../../assets/images/decor/fara-5.jpg';
import item_6 from '../../../assets/images/decor/fara-6.jpg';
import { Title } from '../../atoms';

export default function SectionSlider() {
  const items = [
    {
      src: item_1,
      id: 0,
    },
    {
      src: item_2,
      id: 1,
    },
    {
      src: item_3,
      id: 2,
    },
    {
      src: item_4,
      id: 3,
    },
    {
      src: item_5,
      id: 4,
    },
    {
      src: item_6,
      id: 5,
    },
  ];
  return (
    <section className="slider section-margin" id="gallery">
      <div className="container">
        <Title size="h3" text="Останні покупки фар" className="mb-md text-center lg:mb-lg" />
        <Slider content={items} wrapperClass="px-[60px] h-[300px]" />
      </div>
    </section>
  );
}
