'use client';

import { useState } from 'react';
import Head from 'next/head';
import Content from './components/Content';
import { ArticleContextProvider } from './components/articles/ArticleContext';
import { useLoading } from './hooks/useLoading';

const IndexPage = () => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const { loading } = useLoading();

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
          <ArticleContextProvider>
            <Content
              isArticleVisible={isArticleVisible}
              setIsArticleVisible={setIsArticleVisible}
            />
          </ArticleContextProvider>
        </div>

        <div id='bg' />
      </div>
    </div>
  );
};

export default IndexPage;
