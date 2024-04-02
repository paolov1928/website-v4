'use client';

import Head from 'next/head';
import Content from './components/Content';
import {
  ArticleContextProvider,
  useArticleContext,
} from './components/articles/ArticleContext';

const IndexPageWrapper = () => {
  return (
    <ArticleContextProvider>
      <IndexPage />
    </ArticleContextProvider>
  );
};

const IndexPage = () => {
  const { loading, isArticleVisible } =
    useArticleContext();
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
          <Content />
        </div>

        <div id='bg' />
      </div>
    </div>
  );
};

export default IndexPageWrapper;
