import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
            game {
              slug
            }
            category {
              name
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
            blogId,
            eyeCatch: {
              image: {
                url,
              },
            },
            game,
            category: {
              name: categoryName,
            },
          } = node;

          return (
            <li
              className={`shadow-xl ${item}`}
            >
              <Link to={game ? `/${game.slug}/${blogId}` : `/posts/${blogId}`}>
                <ImgixGatsbyImage src={url} layout="constrained" aspectRatio={16 / 9} alt="item" className={`z-10 ${imageCss}`} />
                <div className={`z-20 ${tag}`}>{categoryName}</div>
                <div className={`z-20 ${titleLabel}`}>
                  <div className={`z-20 ${titleCss}`}>{title.length > 20 ? `${title.substr(0, 19)}...` : title }</div>
                </div>
              </Link>
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default HorizontalScroll;
