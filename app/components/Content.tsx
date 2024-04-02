'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ArticleContainer from './ArticleContainer';
import { useArticleContext } from './articles/ArticleContext';

type ContentProps = {
  isArticleVisible: boolean;
  setIsArticleVisible: Dispatch<SetStateAction<boolean>>;
};

export default function ContentProps({
  setIsArticleVisible,
  isArticleVisible,
}: ContentProps) {
  const [timeoutState, setTimeoutState] = useState(false);

  // REFACTOR THESE INTO A PROVIDER SO articles can get it
  const { articleTimeout, setArticleTimeout, setArticle } = useArticleContext();

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
