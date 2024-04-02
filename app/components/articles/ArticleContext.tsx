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
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
