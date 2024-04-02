import { useLoading } from '@/app/hooks/useLoading';
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
  loading: string;
  isArticleVisible: boolean;
  setIsArticleVisible: Dispatch<SetStateAction<boolean>>;
  timeoutState: boolean;
  handleOpenArticle: (article: any) => void;
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
  const [article, setArticle] = useState('');
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const { loading } = useLoading();

  const [timeoutState, setTimeoutState] = useState(false);

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
    <ArticleContext.Provider
      value={{
        articleTimeout,
        setArticleTimeout,
        article,
        setArticle,
        loading,
        isArticleVisible,
        setIsArticleVisible,
        handleOpenArticle,
        handleCloseArticle,
        timeoutState,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
