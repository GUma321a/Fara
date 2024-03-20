'use client';

import React from 'react';
import pt from 'prop-types';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: pt.node,
};

export default Layout;
