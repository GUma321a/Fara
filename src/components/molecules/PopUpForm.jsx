import React from 'react';
import { Button } from '../atoms';

export default function PopUpForm({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="form fixed bottom-0 left-0 right-0 top-0 z-100 bg-[rgba(0,0,0,0.5)]">
      <div className="form__wrapper mx-auto mt-[50px] max-w-[760px] bg-gray-400 p-[30px]">
        <h1 className="form__title mb-lg text-center text-white md:mb-xl">Замовлення</h1>
        <form onSubmit={onClose} className="flex flex-col gap-[30px]">
          <input className="p-[10px]" type="text" placeholder="Ваше ім'я" />
          <input className="p-[10px]" type="text" placeholder="Ваш номер телефону" />
          <textarea className="p-[10px]" type="text" placeholder="Ваше повідомлення" />
          <Button variant="ghost" text="Замовити" type="submit" size="m" wrapperClass="mx-auto" />
        </form>
      </div>
    </div>
  );
}
