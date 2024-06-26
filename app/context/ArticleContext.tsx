import { createContext, useContext, useState } from 'react';
import { PageTitle } from '../components/copy';

interface ArticleContextProps {
  article?: PageTitle;
  articleTimeout?: boolean;
  isArticleVisible: boolean;
  hasTimedOut: boolean;
  handleOpenArticle: (article: PageTitle) => void;
  handleCloseArticle: () => void;
}

const ArticleContext = createContext<ArticleContextProps | null>(null);

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (context === undefined || context === null) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }
  return context;
};

interface ArticleContextProviderProps {
  children: React.ReactNode;
}

export const ArticleContextProvider = ({
  children,
}: ArticleContextProviderProps) => {
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState(PageTitle.Home);
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [hasTimedOut, setHasTimedOut] = useState(false);

  const handleOpenArticle = (article: PageTitle) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setHasTimedOut(previousState => !previousState);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setHasTimedOut(previousState => !previousState);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle(PageTitle.Home);
    }, 350);
  };

  return (
    <ArticleContext.Provider
      value={{
        articleTimeout,
        article,
        isArticleVisible,
        handleOpenArticle,
        handleCloseArticle,
        hasTimedOut,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
