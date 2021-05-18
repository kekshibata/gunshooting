import React from 'react';
import { navigate, Link } from 'gatsby';
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
  blogId, title, writer, createdAt, imageUrl, gameSlug, slug,
}) => (
  <>
    <div className={wrapper}>
      <div className={content}>
        {imageUrl
        && (
          <Link to={gameSlug ? `/${gameSlug}/${slug}` : `/posts/${blogId}`} className={`z-10 ${imageCss} overflow-hidden`}>
            <ImgixGatsbyImage
              src={imageUrl}
              layout="constrained"
              aspectRatio={16 / 9}
              alt="アイキャッチ"
              className="block align-middle"
            />
          </Link>
        )}
        <dl>
          <dt className={heading}>
            <Link to={gameSlug ? `/${gameSlug}/${slug}` : `/posts/${blogId}`}>
              {title.length > 23 ? `${title.substr(0, 22)}...` : title }
            </Link>
          </dt>
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
