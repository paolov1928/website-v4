'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Index from './components/Index';
import { ArticleContextProvider } from './components/articles/ArticleContext';

const IndexPage = () => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [loading, setLoading] = useState('is-loading');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

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
            <Index
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
