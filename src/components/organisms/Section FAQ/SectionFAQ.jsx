import React, { useState } from 'react';
import AccordionComponent from '../../molecules/AccordionComponent';
import { Text, Title, Button } from '../../atoms';
import PopUpForm from '../../molecules/PopUpForm';

export default function SectionFAQ() {
  const faqContent = [
    {
      id: 0,
      title: 'Як підібрати фару до автомобіля?',
      text: '2',
    },
    {
      id: 1,
      title: 'Як довго потрібно чекати?',
      text: '2',
    },
    {
      id: 2,
      title: 'Як замовити фару?',
      text: '2',
    },
    {
      id: 3,
      title: 'Доставка і отримання',
      text: '2',
    },
  ];
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    faqContent && (
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__wrapper flex flex-wrap justify-between gap-[30px] md:flex-nowrap">
            <div className="faq__description mx-auto basis-[50%]">
              <Title text="Часті запитання" size="h3" className="mb-md text-center lg:mb-lg" />
              <Text size="m" className="mb-md text-center text-gray-400 md:text-left lg:mb-lg">
                Найчастіші питання які виникають в наших клієнтів
              </Text>
              <Button
                buttonType="button"
                onClick={onOpen}
                text="Зробити замовлення"
                variant="cta"
                size="l"
              />
              <PopUpForm open={open} onClose={onClose} />
            </div>
            <AccordionComponent
              className="w-full"
              content={faqContent}
              wrapperClass="flex gap-[30px] flex-col"
              titleClass="accordion__button main__accordion-button"
            />
          </div>
        </div>
      </section>
    )
  );
}
