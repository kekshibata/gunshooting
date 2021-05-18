import React from 'react';
import { graphql } from 'gatsby';
import { ImgixGatsbyImage } from '@imgix/gatsby';

import SEO from '../../components/seo';
import Layout from '../../components/layout';

import {
  avatar,
  body,
} from './writer-page.module.css';

const WriterPage = ({ data }) => {
  const {
    name,
    image: {
      url,
    },
    bio,
    twitter,
  } = data.microcmsWriter;

  return (
    <>
      <SEO title="ライター一覧" />
      <Layout>
        <div className="flex flex-col align-center">
          <ImgixGatsbyImage
            src={url}
            layout="constrained"
            aspectRatio={1 / 1}
            width={160}
            height={160}
            className={`rounded-full z-10 block align-middle mx-auto shadow-xl my-4 ${avatar}`}
          />
          <div className="text-center font-bold text-xl">{name}</div>
        </div>
        <article className={body} dangerouslySetInnerHTML={{ __html: `${bio}` }} />
      </Layout>
    </>
  );
};

export const query = graphql`
query WriterPageQuery($id: String!) {
    microcmsWriter(id: {eq: $id}) {
      name
      image {
        url
      }
      bio
      twitter
    }
  }
`;

export default WriterPage;
