import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface ArticleContextProps {
  article?: string;
  articleTimeout?: boolean;
  setArticleTimeout?: Dispatch<SetStateAction<boolean>>;
  setArticle?: Dispatch<SetStateAction<string>>;
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
  const [article, setArticle] = useState('');
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
    <ArticleContext.Provider
      value={{ articleTimeout, setArticleTimeout, article, setArticle }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
