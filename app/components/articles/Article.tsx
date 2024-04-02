import { useArticleContext } from '@/app/context/ArticleContext';
import { PageTitle } from '../copy';

interface ArticleProps {
  article?: PageTitle;
  articleTimeout?: boolean;
  id: string;
  children: React.ReactNode;
}

const Article = ({ id, article, articleTimeout, children }: ArticleProps) => {
  return (
    <article
      id={id}
      style={{ display: 'none' }}
      className={`${article === id ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
    >
      {children}
    </article>
  );
};

const Close = () => {
  const { handleCloseArticle } = useArticleContext();
  return (
    <div
      className='close'
      onClick={() => {
        handleCloseArticle && handleCloseArticle();
      }}
    />
  );
};

const Title = () => {
  const { article } = useArticleContext();
  return <h2 className='major'>{article}</h2>;
};

Article.Title = Title;
Article.Close = Close;

export default Article;
