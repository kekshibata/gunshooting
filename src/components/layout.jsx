import React from 'react';

import SEO from './seo';
import Header from './header';
import Footer from './footer';

import {
  background,
} from './layout.module.css';

const Layout = (props) => (
  <>
    <div className="max-w-lg mx-auto bg-white">
      <SEO />
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
    <div className={background} />
  </>
);

export default Layout;
