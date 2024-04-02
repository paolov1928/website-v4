'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { useArticleContext } from './articles/ArticleContext';

// import { useArticleContext } from './components/articles/ArticleContext';

type IndexProps = {
  isArticleVisible: boolean;
  setIsArticleVisible: Dispatch<SetStateAction<boolean>>;
};

export default function Index({
  setIsArticleVisible,
  isArticleVisible,
}: IndexProps) {
  const [timeoutState, setTimeoutState] = useState(false);

  // REFACTOR THESE INTO A PROVIDER SO articles can get it
  const { articleTimeout, setArticleTimeout, article, setArticle } =
    useArticleContext();

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
      <Main
        timeout={timeoutState}
        onCloseArticle={handleCloseArticle}
      />
      <Footer timeout={timeoutState} />
    </>
  );
}
