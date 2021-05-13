import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import {
  wrapper,
  innerContainer,
  item,
  imageCss,
  tag,
  titleLabel,
  title,
} from './horizontal-scroll.module.css';

const HorizontalScroll = () => (
  <div className={wrapper}>
    <ul className={innerContainer}>
      <li className={item}>
        <StaticImage src="../images/note-image.jpeg" alt="item" className={`z-10 ${imageCss}`} />
        <div className={`z-20 ${tag}`}>カテゴリ</div>
        <div className={`z-20 ${titleLabel}`}>
          <div className={`z-20 ${title}`}>タイトル</div>
        </div>
      </li>
      <li className={item}>
        <StaticImage src="../images/note-image.jpeg" alt="item" className={`z-10 ${imageCss}`} />
        <div className={`z-20 ${tag}`}>カテゴリ</div>
        <div className={`z-20 ${titleLabel}`}>
          <div className={`z-20 ${title}`}>タイトル</div>
        </div>
      </li>
      <li className={item}>
        <StaticImage src="../images/note-image.jpeg" alt="item" className={`z-10 ${imageCss}`} />
        <div className={`z-20 ${tag}`}>カテゴリ</div>
        <div className={`z-20 ${titleLabel}`}>
          <div className={`z-20 ${title}`}>タイトル</div>
        </div>
      </li>
      <li className={item}>
        <StaticImage src="../images/note-image.jpeg" alt="item" className={`z-10 ${imageCss}`} />
        <div className={`z-20 ${tag}`}>カテゴリ</div>
        <div className={`z-20 ${titleLabel}`}>
          <div className={`z-20 ${title}`}>タイトル</div>
        </div>
      </li>
    </ul>
  </div>
);

export default HorizontalScroll;
