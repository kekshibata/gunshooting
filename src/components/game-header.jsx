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
  slug, id, gameName, menu, iconSource, headerSource,
}) => (
  <header>
    <div className={titleHeader}>
      <ImgixGatsbyImage src={iconSource} layout="constrained" width={30} height={30} className="block rounded-md shadow-sm z-10" />
      <div className="ml-2 font-bold leading-4 overflow-visible">
        {gameName}
        攻略wiki
      </div>
    </div>
    <ImgixGatsbyImage src={headerSource} layout="constrained" height={90} aspectRatio={16 / 5} className="w-full block align-middle" />
    <ul className={navMenu}>
      {menu.map(({ name: menuName, slug: menuSlug }) => (
        <li className={menuItem}>
          <Link to={`/${slug}/${menuSlug}`} className={menuItemInner}>{menuName}</Link>
        </li>
      ))}
    </ul>
  </header>
);

export default GameHeader;
