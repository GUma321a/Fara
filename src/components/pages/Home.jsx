import React from 'react';

import SectionHero from '../organisms/SectionHero';
import SectionAdvantages from '../organisms/SectionAdvantages';
import SectionSlider from '../organisms/SectionSlider';
import SectionFAQ from '../organisms/Section FAQ/SectionFAQ';

function Home() {
  return (
    <>
      <SectionHero /> <SectionAdvantages /> <SectionSlider /> <SectionFAQ />
    </>
  );
}

export default Home;
