import React from 'react';
import { motion } from 'framer-motion';

import Header from './header';
import Footer from './footer';

const Layout = (props) => (
  <>
    <div className="max-w-lg mx-auto bg-white">
      <Header />
      {/*       <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          duration: 0.5,
        }}
      > */}
      {props.children}
      {/* </motion.main> */}
      <Footer />
    </div>
    {/* <div className={background} /> */}
  </>
);

export default Layout;
