import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import GameHeader from '../../components/game-header';

const GamePage = ({ data }) => {
  const {
    slug,
    id,
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
    <Layout>
      <GameHeader
        slug={slug}
        gameName={gameName}
        menu={menu}
        iconSource={iconSource}
        headerSource={headerSource}
      />
    </Layout>
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
