import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { FiClock } from 'react-icons/fi';

import {
  container,
  wrapper,
  content,
  imageCss,
  avatarImg,
  heading,
  attributesContainer,
  attr,
  icon,
} from './posts.module.css';

const Posts = () => (
  <>
    <div className={container}>
      <div className={wrapper}>
        <div className={content}>
          <StaticImage src="../images/note-image.jpeg" alt="eyecatch" className={`z-10 ${imageCss}`} />
          <dl>
            <dt className={heading}>タイトル</dt>
            <dd className={attributesContainer}>
              <div className={attr}>
                <StaticImage src="../images/note-image.jpeg" alt="avatar" className={`z-10 ${avatarImg}`} />
                <div>MIKADO</div>
              </div>
              <div className={attr}>
                <FiClock className={icon} />
                <time>
                  2021/05/11
                </time>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div className={wrapper}>
        <div className={content}>
          <StaticImage src="../images/note-image.jpeg" alt="eyecatch" className={`z-10 ${imageCss}`} />
          <dl>
            <dt className={heading}>タイトル</dt>
            <dd className={attributesContainer}>
              <div className={attr}>
                <StaticImage src="../images/note-image.jpeg" alt="avatar" className={`z-10 ${avatarImg}`} />
                <div>MIKADO</div>
              </div>
              <div className={attr}>
                <FiClock className={icon} />
                <time>
                  2021/05/11
                </time>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div className={wrapper}>
        <div className={content}>
          <StaticImage src="../images/note-image.jpeg" alt="eyecatch" className={`z-10 ${imageCss}`} />
          <dl>
            <dt className={heading}>タイトル</dt>
            <dd className={attributesContainer}>
              <div className={attr}>
                <StaticImage src="../images/note-image.jpeg" alt="avatar" className={`z-10 ${avatarImg}`} />
                <div>MIKADO</div>
              </div>
              <div className={attr}>
                <FiClock className={icon} />
                <time>
                  2021/05/11
                </time>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div className={wrapper}>
        <div className={content}>
          <StaticImage src="../images/note-image.jpeg" alt="eyecatch" className={`z-10 ${imageCss}`} />
          <dl>
            <dt className={heading}>タイトル</dt>
            <dd className={attributesContainer}>
              <div className={attr}>
                <StaticImage src="../images/note-image.jpeg" alt="avatar" className={`z-10 ${avatarImg}`} />
                <div>MIKADO</div>
              </div>
              <div className={attr}>
                <FiClock className={icon} />
                <time>
                  2021/05/11
                </time>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div className={wrapper}>
        <div className={content}>
          <StaticImage src="../images/note-image.jpeg" alt="eyecatch" className={`z-10 ${imageCss}`} />
          <dl>
            <dt className={heading}>タイトル</dt>
            <dd className={attributesContainer}>
              <div className={attr}>
                <StaticImage src="../images/note-image.jpeg" alt="avatar" className={`z-10 ${avatarImg}`} />
                <div>MIKADO</div>
              </div>
              <div className={attr}>
                <FiClock className={icon} />
                <time>
                  2021/05/11
                </time>
              </div>
            </dd>
          </dl>
        </div>
      </div>

      <div className={wrapper}>
        <div className={content}>
          <StaticImage src="../images/note-image.jpeg" alt="eyecatch" className={`z-10 ${imageCss}`} />
          <dl>
            <dt className={heading}>タイトル</dt>
            <dd className={attributesContainer}>
              <div className={attr}>
                <StaticImage src="../images/note-image.jpeg" alt="avatar" className={`z-10 ${avatarImg}`} />
                <div>MIKADO</div>
              </div>
              <div className={attr}>
                <FiClock className={icon} />
                <time>
                  2021/05/11
                </time>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>

  </>
);

export default Posts;
