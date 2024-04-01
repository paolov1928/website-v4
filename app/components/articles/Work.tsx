import { WorkCopy } from '../copy';
import Article from './Article';

interface WorkProps {
  article?: string;
  articleTimeout?: boolean;
  close: React.JSX.Element;
}

export default function Work({ close, article, articleTimeout }: WorkProps) {
  const id = 'work';
  return (
    <Article id={id} article={article} articleTimeout={articleTimeout}>
      <Article.Title id={id} />
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
      {close}
    </Article>
  );
}
