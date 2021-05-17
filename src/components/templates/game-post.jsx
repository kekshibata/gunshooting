import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';
import GameHeader from '../game-header';

const GamePost = ({ data }) => {
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

export const query = graphql`
query GamePostQuery($gameSlug: String!) {
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
  microcmsBlog(game: {slug: {eq: $gameSlug}}) {
    title
  }
}
`;

export default GamePost;
