import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaTwitter, FaYoutube } from 'react-icons/fa';

import TopHeader from '../components/top-header';
import Recommend from '../components/recommend';
import Layout from '../components/layout';
import HorizontalScroll from '../components/horizontal-scroll';
import Posts from '../components/posts';
import Button from '../components/button';
import Footer from '../components/footer';

import {
  bgGray,
  bgBlack,
  twitter,
  youtube,
} from './top-page.module.css';

export default function HOME() {
  const postsData = useStaticQuery(graphql`
  query MyQuery {
    allMicrocmsBlog(sort: {order: DESC, fields: createdAt}, limit: 6) {
      edges {
        node {
          title
          blogId
          id
          createdAt(formatString: "YYYY/MM/DD")
          writer {
            name
            image {
              url
            }
          }
          eyeCatch {
            image {
              url
            }
          }
        }
      }
    }
  }  
  `);

  console.log(postsData);

  const postsList = postsData.allMicrocmsBlog.edges;

  return (
    <>
      <Layout>
        <TopHeader />
        <section id="top" className="p-0">
          <Recommend />
          <HorizontalScroll />
        </section>
        <section id="posts">
          <div className="heading-wrapper">
            <div className="heading">新着記事</div>
          </div>
          {postsList.map(({ node }) => (
            <Posts title={node.title} writer={node.writer} createdAt={node.createdAt} imageUrl={node.eyeCatch?.image?.url} />
          ))}
          <div className="py-6 flex justify-center">
            <Button variant="outline" color="red" to="/">
              記事一覧を見る
            </Button>
          </div>
        </section>
        <section id="games" className={`pb-10 ${bgGray}`}>
          <div className="heading-wrapper">
            <div className="heading">ゲーム攻略</div>
          </div>
          <ul className="px-2 py-2.5">
            <li className="block relative">
              <Link to="/">
                <StaticImage src="../images/game-hodsd.png" className="w-auto block align-middle rounded-lg shadow-lg z-10" />
                <div className={`absolute bottom-0 z-20 flex items-center justify-center rounded-b-lg h-8 w-full font-semibold text-white ${bgBlack}`}>
                  ハウスオブザデッド スカーレットドーン 攻略wiki
                </div>
              </Link>
            </li>
          </ul>
        </section>
        <section id="writers">
          <div className="heading-wrapper">
            <div className="heading">ライター</div>
          </div>
          <div className="px-6 py-4">
            <ul className="flex flex-row items-center justify-around">
              <li className="px-2 flex flex-col items-center">
                <StaticImage src="../images/note-image.jpeg" className="w-32 h-32 rounded-full z-10" />
                <div className="font-semibold mt-2 mb-1 text-base">
                  MIKADO
                </div>
                <div className="flex flex-row items-center justify-around my-1">
                  <a href="https://twitter.com/gunshootingnet?s=20" className={twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://twitter.com/gunshootingnet?s=20" className={youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </div>
                <div className="my-1">
                  <Button variant="outline" to="/" size="small">Profile</Button>
                </div>
              </li>
              <li className="px-2 flex flex-col items-center">
                <StaticImage src="../images/note-image.jpeg" className="w-32 h-32 rounded-full z-10" />
                <div className="font-semibold mt-2 mb-1 text-base">
                  MIKADO
                </div>
                <div className="flex flex-row items-center justify-around my-1">
                  <a href="https://twitter.com/gunshootingnet?s=20" className={twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://twitter.com/gunshootingnet?s=20" className={youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </div>
                <div className="my-1">
                  <Button variant="outline" to="/" size="small">Profile</Button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
}
