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
  hashTag,
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
            slug
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
            slug,
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
            <>
              <li
                className={`shadow-xl ${item}`}
              >
                <Link to={game ? `/${game.slug}/${slug}` : `/posts/${blogId}`}>
                  <ImgixGatsbyImage src={url} layout="constrained" aspectRatio={16 / 9} alt="item" className={`z-10 ${imageCss}`} />
                  <div className={`z-20 ${tag}`}>{categoryName}</div>
                  <div className={`z-20 ${titleLabel}`}>
                    <div className={`z-20 ${titleCss}`}>{title.length > 20 ? `${title.substr(0, 19)}...` : title }</div>
                  </div>
                </Link>
                {game?.slug && (
                <span className={`text-red-700 font-semibold ${hashTag}`}>
                  #
                  {game.slug}
                </span>
                )}
              </li>
            </>
          );
        })}

      </ul>
    </div>
  );
};

export default HorizontalScroll;
