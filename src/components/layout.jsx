import React from 'react';

import Header from './header';
import Footer from './footer';

const Layout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
);

export default Layout;
