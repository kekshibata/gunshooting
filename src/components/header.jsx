import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter } from 'react-icons/fa';

import Logo from './logo';

import {
  container,
  header,
  logo as logoCss,
  description,
  twitter,
} from './header.module.css';

const Header = () => (
  <div className={container}>
    <header className={header}>
      <Link to="/" className={logoCss}>
        <Logo height="25px" />
      </Link>
      <p className={description}>
        ガンシューティングゲーム
        <br />
        総合情報・攻略サイト
      </p>
      <a href="https://twitter.com/gunshootingnet?s=20" className={twitter} target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </header>
  </div>
);

export default Header;
