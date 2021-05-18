import React from 'react';
import { graphql } from 'gatsby';
import { ImgixGatsbyImage } from '@imgix/gatsby';
import moment from 'moment';

import SEO from '../seo';
import Layout from '../layout';

import {
  description as descriptionCss,
  status,
  body as bodyStyle,
} from './blog-post.module.css';

const BlogPost = ({ data }) => {
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
        <ImgixGatsbyImage src={eyeCatchSource} layout="constrained" aspectRatio={16 / 9} className="w-full block align-middle" />
        <article className="p-2">
          <div className="font-bold text-xl">{title}</div>
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
          </div>
          <div className={bodyStyle}>
            {body.map(({
              fieldId, richEditor, html, image, alt,
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
  query PostQuery ($blogId: String!) {
    microcmsBlog(blogId: {eq: $blogId}) {
      title
      description
      body {
        fieldId
        richEditor
        html
        alt
        image {
          url
        }
      }
      blogId
      eyeCatch {
        image {
          url
        }
        alt
      }
      updatedAt
      writer {
        name
      }
    }
  }
`;

export default BlogPost;
