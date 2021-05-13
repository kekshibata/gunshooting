import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FaChevronRight } from 'react-icons/fa';

import {
  image,
  recommendCard,
  band,
  bandItem,
} from './recommend.module.css';

const Recommend = () => (
  <a href="#" className={recommendCard}>
    <StaticImage
      src="../images/note-image.jpeg"
      alt="hodsd攻略記事のおすすめ"
      className={image}
      imgStyle={{ display: 'block' }}
      imgClassName="algin-middle"
    />
    <div className={band}>
      <span className={bandItem}>詳細を見る</span>
      <span className={bandItem}><FaChevronRight size={12} /></span>
    </div>
  </a>
);

export default Recommend;
