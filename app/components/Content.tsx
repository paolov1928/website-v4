'use client';

import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ArticleContainer from './ArticleContainer';
import { useArticleContext } from './articles/ArticleContext';

export default function ContentProps() {
  const [timeoutState, setTimeoutState] = useState(false);

  // REFACTOR THESE INTO A PROVIDER SO articles can get it
  const {
    articleTimeout,
    setArticleTimeout,
    setArticle,
    setIsArticleVisible,
    isArticleVisible,
  } = useArticleContext();

  const handleOpenArticle = (article: any) => {
    if (!setArticle || !setArticleTimeout) {
      return;
    }

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
    if (!setArticle || !setArticleTimeout) {
      return;
    }
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
    <>
      <Header onOpenArticle={handleOpenArticle} timeout={timeoutState} />
      <ArticleContainer
        timeout={timeoutState}
        onCloseArticle={handleCloseArticle}
      />
      <Footer timeout={timeoutState} />
    </>
  );
}
