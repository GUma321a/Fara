import React from 'react';
import { Text } from '../../atoms';

export default function Footer() {
  return (
    <section className="footer pt-xl pb-md bg-gray-400">
      <div className="container">
        <Text className="text-white" size="s" text="Copyright 2024, fara.com" />
      </div>
    </section>
  );
}
