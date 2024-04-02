import { useArticleContext } from '@/app/context/ArticleContext';

interface ArticleProps {
  article?: string;
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

const Title = ({ id }: { id: string }) => {
  return <h2 className='major'>{id}</h2>;
};

Article.Title = Title;
Article.Close = Close;

export default Article;
