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

const Title = ({ id }: { id: string }) => {
  return <h2 className='major'>{id}</h2>;
};

Article.Title = Title;

export default Article;
