import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiChevronUp } from 'react-icons/fi';

import Logo from './logo';
import TaitaLogo from './taita-logo';

import {
  border,
  toTopButton,
} from './footer.module.css';

const Footer = () => (
  <>
    <hr className={border} />
    <div className="flex flex-col items-center">
      <div className={toTopButton} onClick={() => { scroll.scrollToTop(); }}>
        <FiChevronUp size={18} color="white" />
      </div>
      <div className="mb-10 mt-2">
        <Logo height="40px" />
      </div>
      {/* <div className="mb-2.5">
        <TataLogo />
</div> */}
      <div className="mb-2.5">
        &copy; 2021 all rights reserved
      </div>
    </div>
  </>
);

export default Footer;
