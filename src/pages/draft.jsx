import React from 'react';
import queryString from 'query-string';
import moment from 'moment';
import { ImgixGatsbyImage } from '@imgix/gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

import {
  description as descriptionCss,
  status,
  body as bodyStyle,
} from './draft.module.css';

const GamePost = ({ location }) => {
  const { contentId, draftKey } = queryString.parse(location.search);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://houseof.microcms.io/api/v1/blog/${contentId}?draftKey=${draftKey}`, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => setData({ microcmsBlog: res }));
  }, []);

  if (data === null) {
    return null;
  }
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
        <article className="p-2 py-5">
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
          <ImgixGatsbyImage src={eyeCatchSource} layout="constrained" aspectRatio={16 / 9} className="w-full block align-middle rounded-lg z-10 my-4 shadow-lg" />
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

export default GamePost;
