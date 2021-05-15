import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ImgixGatsbyImage } from '@imgix/gatsby';

import { FiClock } from 'react-icons/fi';

import {
  wrapper,
  content,
  imageCss,
  avatarImg,
  heading,
  attributesContainer,
  attr,
  icon,
} from './posts.module.css';

const Posts = ({
  title, writer, createdAt, imageUrl,
}) => (
  <>
    <div className={wrapper}>
      <div className={content}>
        {imageUrl && <ImgixGatsbyImage src={imageUrl} layout="constrained" aspectRatio={16 / 9} alt="アイキャッチ" className={`z-10 ${imageCss}`} />}
        <dl>
          <dt className={heading}>{title}</dt>
          <dd className={attributesContainer}>
            <div className={attr}>
              <ImgixGatsbyImage src={writer.image?.url} layout="constrained" width={40} height={40} alt="avatar" className={`z-10 ${avatarImg}`} />
              <div>{writer.name}</div>
            </div>
            <div className={attr}>
              <FiClock className={icon} />
              <time>
                {createdAt}
              </time>
            </div>
          </dd>
        </dl>
      </div>
    </div>

  </>
);

export default Posts;
