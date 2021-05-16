import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { ImgixGatsbyImage } from '@imgix/gatsby';

import {
  wrapper,
  innerContainer,
  item,
  imageCss,
  tag,
  titleLabel,
  title as titleCss,
} from './horizontal-scroll.module.css';

const HorizontalScroll = () => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsBlog(
        sort: {order: DESC, fields: createdAt}
        filter: {pickUp: {eq: true}}
      ) {
        edges {
          node {
            title
            blogId
            createdAt(formatString: "YYYY/MM/DD")
            eyeCatch {
              image {
                url
              }
            }
            writer {
              name
              image {
                url
              }
            }
          }
        }
      }
    }
  `);

  const pickedList = data.allMicrocmsBlog.edges;

  return (
    <div className={wrapper}>
      <ul className={innerContainer}>
        {pickedList.map(({ node }) => {
          const {
            title,
            eyeCatch: {
              image: {
                url,
              },
            },
          } = node;

          return (
            <li className={`shadow-xl ${item}`}>
              <ImgixGatsbyImage src={url} layout="constrained" aspectRatio={16 / 9} alt="item" className={`z-10 ${imageCss}`} />
              <div className={`z-20 ${tag}`}>カテゴリ</div>
              <div className={`z-20 ${titleLabel}`}>
                <div className={`z-20 ${titleCss}`}>{title.length > 20 ? `${title.substr(0, 19)}...` : title }</div>
              </div>
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default HorizontalScroll;
