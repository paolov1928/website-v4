'use client';

import Head from 'next/head';
import {
  ArticleContextProvider,
  useArticleContext,
} from './context/ArticleContext';
import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import Footer from './components/Footer';
import { useLoading } from './hooks/useLoading';

const IndexPageWrapper = () => {
  return (
    <ArticleContextProvider>
      <IndexPage />
    </ArticleContextProvider>
  );
};

const IndexPage = () => {
  const { loading } = useLoading();
  const { isArticleVisible } = useArticleContext();

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? 'is-article-visible' : ''
      }`}
    >
      <div>
        <Head>
          <title>Paolo&apos;s Website</title>

          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>

        <div id='wrapper'>
          <Header />
          <ArticleContainer />
          <Footer />
        </div>

        <div id='bg' />
      </div>
    </div>
  );
};

export default IndexPageWrapper;
