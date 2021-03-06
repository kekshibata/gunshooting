import React from 'react';
import { Link } from 'gatsby';
import { ImgixGatsbyImage } from '@imgix/gatsby';

import {
  titleHeader,
  navMenu,
  menuItem,
  menuItemInner,
} from './game-header.module.css';

const GameHeader = ({
  slug, gameName, menu, iconSource, headerSource,
}) => (
  <header>
    <div className={titleHeader}>
      <Link to={`/${slug}`}>
        <ImgixGatsbyImage src={iconSource} layout="constrained" width={35} height={35} className="block align-middle rounded-md shadow-sm z-10" />
      </Link>
      <Link to={`/${slug}`}>
        <div className="ml-2 font-bold leading-5 overflow-visible">
          {gameName}
          攻略wiki
        </div>
      </Link>
    </div>
    <ImgixGatsbyImage src={headerSource} layout="constrained" height={90} aspectRatio={16 / 5} className="w-full block align-middle" />
    <ul className={navMenu}>
      {menu.map(({ name: menuName, slug: menuSlug }) => (
        <li className={menuItem}>
          <Link activeStyle={{ color: 'var(--color-red)' }} to={menuSlug ? `/${slug}/${menuSlug}` : `/${slug}`} className={`box-border ${menuItemInner}`}>{menuName}</Link>
        </li>
      ))}
    </ul>
  </header>
);

export default GameHeader;
