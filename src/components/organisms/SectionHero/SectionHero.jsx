import React, { useState } from 'react';
import { Title, Text, Button } from '../../atoms';
import PopUpForm from '../../molecules/PopUpForm';

export default function SectionHero() {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <section className="hero hero-padding bg-[url('../images/decor/hero-bg.jpeg')] bg-cover bg-center bg-no-repeat pb-[80px] text-white md:pb-[250px]">
      <div className="container">
        <Title size="h1" className="mb-lg">
          Купіть високоякісні автомобільні фари прямо зараз!
        </Title>
        <Text size="l" className="mb-md">
          Безпека на дорозі понад усе
        </Text>
        <Button variant="ghost" size="l" onClick={onOpen}>
          Замовити
        </Button>
        <PopUpForm open={open} onClose={onClose} />
      </div>
    </section>
  );
}
