import React from 'react';
import { graphql, Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';

import SEO from '../../components/seo';
import Layout from '../../components/layout';
import GameHeader from '../../components/game-header';
import Recommend from '../../components/recommend';

import {
  buffer,
  breadcrumb,
} from './game-page.module.css';

const GamePage = ({ data }) => {
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
  return (
    <>
      <SEO title={`${gameName}攻略wiki`} />
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
    }
`;

export default GamePage;
