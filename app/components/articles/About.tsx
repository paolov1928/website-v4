import Image from 'next/image';
import { AboutCopy } from '../copy';
import Article from './Article';

interface AboutProps {
  article?: string;
  articleTimeout?: boolean;
  close: React.JSX.Element;
}

export default function About({ article, articleTimeout, close }: AboutProps) {
  const id = 'about';
    return (
      <Article id={id} article={article} articleTimeout={articleTimeout}>
        <Article.Title id={id} />
        <span className='image main image__about'>
          <Image
            className='curious-george-photo'
            src='/images/curious-george.png'
            alt=''
            width={200}
            height={113}
          />
        </span>
        {AboutCopy.main.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
        {close}
      </Article>
    );
}
