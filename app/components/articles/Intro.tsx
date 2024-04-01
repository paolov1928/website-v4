import Image from 'next/image';
import { IntroCopy } from '../copy';
import Article from './Article';

interface IntroProps {
  article?: string;
  articleTimeout?: boolean;
  close: React.JSX.Element;
}

export default function Intro({ close, article, articleTimeout }: IntroProps) {
  const id = 'intro';
  return (
    <Article id={id} article={article} articleTimeout={articleTimeout}>
      <Article.Title id={id} />
      <p>{IntroCopy.main}</p>
      <span className='image main image__intro'>
        <Image
          className='laughing-photo'
          src='/images/intro-pic.jpg'
          alt=''
          height={100}
          width={200}
          style={{ height: 'auto' }}
        />
      </span>
      {close}
    </Article>
  );
}
