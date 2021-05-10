import React from 'react';

import Header from './header';

const Layout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
  </>
);

export default Layout;
