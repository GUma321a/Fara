import React from 'react';

export default function SectionAdvantages() {
  const item = [
    { name: 'Широкий асортимент', id: 0 },
    { name: 'Якість гарантовано', id: 1 },
    { name: 'Експертна консультація', id: 2 },
    { name: 'Гарантія задоволеності', id: 3 },
    { name: 'Ексклюзивні пропозиції', id: 4 },
  ];
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__wrapper flex flex-wrap justify-center gap-[30px]">
          {item.map((i) => {
            return (
              <p
                className="advantages__item lg:body-text-m body-text-s rounded-[100px] border-[2px] border-secondary bg-transparent px-[20px] py-[16px] uppercase text-secondary md:px-[30px] md:py-[24px]"
                key={i.key}
              >
                {i.name}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
