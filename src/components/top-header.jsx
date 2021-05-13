import React from 'react';

import Headroom from 'react-headroom';
import { Link as ScrollLink } from 'react-scroll';

import {
  fixedHeader,
  navbar,
  item,
  innerItem,
} from './top-header.module.css';

const TopHeader = () => (
  <Headroom>
    <div className={fixedHeader}>
      <ul className={navbar}>
        <li className={item}><ScrollLink to="top" activeClass="active" className={innerItem}>トップ</ScrollLink></li>
        <li className={item}><ScrollLink activeClass="active" className={innerItem}>新着記事</ScrollLink></li>
        <li className={item}><ScrollLink activeClass="active" className={innerItem}>ゲーム一覧</ScrollLink></li>
        <li className={item}><ScrollLink activeClass="active" className={innerItem}>ライター</ScrollLink></li>
      </ul>
    </div>
  </Headroom>
);

export default TopHeader;
