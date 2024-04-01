'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const IndexPage = () => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeoutState, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleOpenArticle = (article: any) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setTimeoutState(!timeoutState);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimeoutState(!timeoutState);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle('');
    }, 350);
  };

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? 'is-article-visible' : ''
      }`}
    >
      <div>
        <Head>
          <title>Paolo&apos;s Website</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeoutState} />
          <Main
            timeout={timeoutState}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={timeoutState} />
        </div>

        <div id="bg" />
      </div>
    </div>
  );
};

export default IndexPage;
