import React from 'react';
import { graphql, Link } from 'gatsby';
import { ImgixGatsbyImage } from '@imgix/gatsby';
import { BiChevronRight } from 'react-icons/bi';
import moment from 'moment';

import SEO from '../../components/seo';
import Layout from '../../components/layout';
import GameHeader from '../../components/game-header';
import Recommend from '../../components/recommend';
import SocialIcons from '../../components/social-icons';

import {
  buffer,
  breadcrumb,
  article,
  status,
} from '../../components/templates/game-post.module.css';

import {
  body as bodyStyle,
} from './game-page.module.css';

const GamePage = ({ data, location }) => {
  const {
    slug,
    gameName,
    updatedAt,
    menu,
    iconImage: {
      url: iconSource,
    },
    headerImage: {
      url: headerSource,
    },
    thumbnailImage: {
      url: thumbnailSource,
    },
    body: {
      body,
    },
  } = data.microcmsGames;
  return (
    <>
      <SEO title={`${gameName}攻略wiki`} image={thumbnailSource} />
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
          <div className="font-bold text-2xl py-4">
            {gameName}
            攻略wikiトップ
          </div>
          <div className={status}>
            <div>
              最終更新：
              {moment(updatedAt).local().format('YYYY年MM月DD日 HH:mm')}
            </div>
            <SocialIcons url={location.href} />
          </div>
          <ImgixGatsbyImage
            src={thumbnailSource}
            layout="constrained"
            aspectRatio={16 / 9}
            className="w-full block align-middle rounded-lg z-10 my-4 shadow-lg"
          />

          <div className={bodyStyle}>

            {body.map(({
              fieldId,
              richEditor,
              image,
              alt,
              rows,
            }) => {
              switch (fieldId) {
                case 'richEditor': return (
                  <div dangerouslySetInnerHTML={{ __html: `${richEditor}` }} />
                );
                case 'image': return (
                  <ImgixGatsbyImage src={image?.url} layout="constrained" aspectRatio={16 / 9} alt={alt} className="w-full block align-middle my-5" />
                );
                case 'table': return (
                  <table>
                    <tbody>
                      {rows.map(({ item }) => (
                        <tr>
                          {item.map(({
                            name: itemName,
                            alt: itemAlt,
                            linkSlug,
                            thumbnail: {
                              url: itemImgSource,
                            },
                            colspan,
                          }) => (
                            <td colSpan={colspan || null} className={colspan && 'pt-6'}>
                              <Link to={`/${slug}/${linkSlug}`}>
                                <ImgixGatsbyImage
                                  src={itemImgSource}
                                  layout="constrained"
                                  aspectRatio={16 / 9}
                                  alt={itemAlt}
                                  className="align-middle max-w-xs"
                                />
                                <div className={colspan && 'text-xl mt-2'}>{itemName}</div>
                              </Link>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
                default: return undefined;
              }
            })}
          </div>
        </article>

      </Layout>
    </>
  );
};

export const pageQuery = graphql`
    query GamePageQuery($id: String!) {
        microcmsGames(id: {eq: $id}) {
            slug
            id
            gameName
            updatedAt
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
            thumbnailImage {
              url
            }
            body {
              body {
                fieldId
                richEditor
                image {
                  url
                }
                rows {
                  fieldId
                  item {
                    name
                    alt
                    linkSlug
                    thumbnail {
                      url
                    }
                    colspan
                  }
                }
              }
            }
          }
    }
`;

export default GamePage;
