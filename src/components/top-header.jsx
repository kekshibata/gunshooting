import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

import {
  fixedHeader,
  navbar,
  item,
  innerItem,
} from './top-header.module.css';

const TopHeader = () => (
  <div className={`sticky top-0 z-90 ${fixedHeader}`}>
    <ul className={navbar}>
      <li className={item}><ScrollLink to="top" smooth duration={500} spy activeClass="active" className={innerItem}>トップ</ScrollLink></li>
      <li className={item}><ScrollLink to="posts" smooth duration={500} spy activeClass="active" className={innerItem}>新着記事</ScrollLink></li>
      <li className={item}><ScrollLink to="games" smooth duration={500} spy activeClass="active" className={innerItem}>ゲーム一覧</ScrollLink></li>
      <li className={item}><ScrollLink to="writers" smooth duration={500} spy activeClass="active" className={innerItem}>ライター</ScrollLink></li>
    </ul>
  </div>
);

export default TopHeader;
