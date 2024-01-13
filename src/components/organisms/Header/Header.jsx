import React, { useState } from 'react';

import { Button, Link } from '../../atoms';
import logo from '../../../assets/images/symbol.svg';
import wordmark from '../../../assets/images/wordmark.svg';
import PopUpForm from '../../molecules/PopUpForm';

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 1150) {
      setActiveMenu(!activeMenu);
      document.body.style.overflow = !activeMenu ? 'hidden' : '';
    }
  };
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="header sticky inset-x-0 top-0 z-50 bg-gray-400 py-sm transition-all duration-300 midlg:py-md">
      <div className="header__container mx-auto w-full px-sm midlg:px-md">
        <div className="header__navbar flex w-full items-center justify-between text-white">
          <div className="header__logo z-110 flex items-center">
            <Link
              className="header__logo-link inline-flex items-center"
              href="/"
              onClick={toggleMenu}
            >
              <img src={logo.src} alt="watchTowr" />
              <img src={wordmark.src} className="ml-[11px] hidden midlg:block" alt="watchTowr" />
            </Link>
          </div>
          <nav className="header__menu block">
            <ul
              className={`${
                activeMenu ? 'header__menu-list-active' : ''
              } header__menu-list fixed bottom-0 left-full right-0 top-0 z-100 m-0 flex h-full w-full flex-col items-center justify-start overflow-y-auto overflow-x-hidden overscroll-y-contain bg-black p-0 px-md pt-120px text-left transition-all duration-300 midlg:static midlg:z-1 midlg:flex-row midlg:overflow-x-visible midlg:bg-transparent midlg:px-0 midlg:pt-0`}
            >
              <li className="header__menu-list-item mr-xl">
                <Link
                  href="#gallery"
                  onClick={toggleMenu}
                  className="header__menu-list-link body-text-m w-full whitespace-nowrap py-md transition-colors hover:text-cta midlg:py-0"
                >
                  Галерея
                </Link>
              </li>
              <li className="header__menu-list-item mr-xl">
                <Link
                  href="#faq"
                  onClick={toggleMenu}
                  className="header__menu-list-link body-text-m w-full whitespace-nowrap py-md transition-colors hover:text-cta midlg:py-0"
                >
                  Часті запитання
                </Link>
              </li>
              <li className="header__menu-list-item mr-xl">
                <Button text="Зробити замовлення" variant="cta" size="s" onClick={onOpen} />
              </li>
            </ul>
          </nav>
          <buttton
            type="button"
            onClick={toggleMenu}
            className={`${activeMenu ? 'active-burger' : ''} 
            header__burger relative z-100 block h-[18px] w-[20px] cursor-pointer transition-all before:absolute before:top-0 before:h-[2px] before:w-full before:bg-white before:duration-300 after:absolute after:bottom-0 after:h-[2px] after:w-full after:bg-white after:duration-300 midlg:hidden
            `}
          >
            <span className="absolute right-0 top-xs h-[2px] w-full scale-100 bg-white transition-all duration-300" />
          </buttton>
        </div>
        <PopUpForm open={open} onClose={onClose} />
      </div>
    </header>
  );
}

export default Header;
