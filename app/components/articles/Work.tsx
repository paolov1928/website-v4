import { WorkCopy } from '../copy';
import Article from './Article';
import { useArticleContext } from '../../context/ArticleContext';

export default function Work() {
  const { articleTimeout, article } = useArticleContext();
  const id = 'work';
  return (
    <Article id={id} article={article} articleTimeout={articleTimeout}>
      <Article.Title />
      {WorkCopy.main.map((text: string, i: number) => (
        <p key={i}>{text}</p>
      ))}
      <h3 className='experience'>Experience</h3>
      {WorkCopy.experience.map((text: any, i: number) => (
        <div className='experience__chunk' key={i}>
          <h4 className='experience__what'>
            {text.title} at {text.workplace}
          </h4>
          <span className='experience__when'>{text.dates}</span>
          <p className='experience__blurb'>{text.blurb}</p>
        </div>
      ))}
      <Article.Close />
    </Article>
  );
}
