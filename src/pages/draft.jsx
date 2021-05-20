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
        'X-API-KEY': '42b26e8e-0c48-4089-b02a-b1b16fe9171c',
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

                            <ImgixGatsbyImage
                              src={`${imgSource}?w=45?h=45`}
                              layout="constrained"
                              width={45}
                              height={45}
                              alt={tableImgAlt}
                              className="align-middle"
                            />
                            <div>{tdName}</div>

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
                default: return undefined;
              }
            })}
          </div>
        </article>
      </Layout>
    </>
  );
};

export default GamePost;
