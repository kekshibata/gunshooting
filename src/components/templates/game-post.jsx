import React from 'react';
import { graphql, Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import moment from 'moment';
import { ImgixGatsbyImage } from '@imgix/gatsby';

import SEO from '../seo';
import Layout from '../layout';
import GameHeader from '../game-header';
import Recommend from '../recommend';
import SocialIcons from '../social-icons';

import {
  buffer,
  breadcrumb,
  article,
  description as descriptionCss,
  status,
  body as bodyStyle,
} from './game-post.module.css';

const GamePost = ({ data, location }) => {
  const {
    slug,
    gameName,
    menu,
    iconImage: {
      url: iconSource,
    },
    headerImage: {
      url: headerSource,
    },
  } = data.microcmsGames;
  const {
    title,
    description,
    updatedAt,
    body,
    eyeCatch: {
      image: {
        url: eyeCatchSource,
      },
    },
    writer: {
      name: writerName,
    },
  } = data.microcmsBlog;
  return (
    <>
      <SEO title={title} description={description} image={eyeCatchSource} />
      <Layout>
        <GameHeader
          slug={slug}
          gameName={gameName}
          menu={menu}
          iconSource={iconSource}
          headerSource={headerSource}
        />
        <div className={buffer}>
          <div className={breadcrumb}>
            <Link to="/">ガンシューティング</Link>
            <BiChevronRight />
            <Link to={`/${slug}`}>
              {gameName}
              攻略wiki
            </Link>
          </div>
          <div className="mt-6 mb-5">
            <Recommend />
          </div>
        </div>
        <article className={`p-2 py-5 shadow-sm ${article}`}>
          <div className="font-bold text-2xl py-4">{title}</div>
          <div className={status}>
            <div className={descriptionCss}>{description}</div>
            <div>
              最終更新：
              {moment(updatedAt).local().format('YYYY年MM月DD日 HH:mm')}
            </div>
            <div>
              ライター：
              {writerName}
            </div>
            <SocialIcons url={location.href} />
          </div>
          <ImgixGatsbyImage src={eyeCatchSource} layout="constrained" aspectRatio={16 / 9} className="w-full block align-middle rounded-lg z-10 my-4 shadow-lg" />
          <div className={bodyStyle}>
            {body.map(({
              fieldId,
              richEditor,
              html,
              image,
              alt,
              first_title: firstTitle,
              second_title: secondTitle,
              row,
            }) => {
              switch (fieldId) {
                case 'richEditor': return (
                  <div dangerouslySetInnerHTML={{ __html: `${richEditor}` }} />
                );
                case 'html': return (
                  <div dangerouslySetInnerHTML={{ __html: `${html}` }} />
                );
                case 'image': return (
                  <ImgixGatsbyImage src={image?.url} layout="constrained" aspectRatio={16 / 9} alt={alt} className="w-full block align-middle" />
                );
                case 'two-col-table': return (
                  <table>
                    <tbody>
                      <tr>
                        <th>{firstTitle}</th>
                        <th>{secondTitle}</th>
                      </tr>
                      {row.map(({
                        name: tdName,
                        image: {
                          url: imgSource,
                        },
                        alt: tableImgAlt,
                        attribute: tdAttribute,
                        second_attribute: secondAttribute,
                        slug: linkSlug,
                      }) => (
                        <tr>
                          <td>
                            <Link to={`/${slug}/${linkSlug}`}>
                              <ImgixGatsbyImage
                                src={`${imgSource}?w=45?h=45`}
                                layout="constrained"
                                width={45}
                                height={45}
                                alt={tableImgAlt}
                                className="align-middle"
                              />
                              <div>{tdName}</div>
                            </Link>
                          </td>
                          <td>
                            <div>
                              {tdAttribute}
                            </div>
                            {secondAttribute
                                && (
                                <div>
                                  <hr />
                                  {secondAttribute}
                                </div>
                                )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
                default: return null;
              }
            })}
          </div>
        </article>
      </Layout>
    </>
  );
};

export const query = graphql`
query GamePostQuery($gameSlug: String!, $blogId: String!) {
  microcmsGames(slug: {eq: $gameSlug }) {
    slug
    id
    gameName
    menu {
      name
      slug
    }
    headerImage {
      url
    }
    iconImage {
      url
    }
  }
  microcmsBlog(blogId: {eq: $blogId}) {
    title
    body {
      fieldId
      richEditor
      html
      alt
      image {
        url
      }
      first_title
      second_title
      row {
        name
        image {
          url
        }
        attribute
        second_attribute
        slug
        alt
      }
    }
    blogId
    eyeCatch {
      image {
        url
      }
      alt
    }
    description
    updatedAt
    writer {
      name
    }
    game {
      slug
    }
  }
}
`;

export default GamePost;
