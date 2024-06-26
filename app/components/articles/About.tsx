import Image from 'next/image';
import { AboutCopy } from '../copy';
import Article from './Article';
import { useArticleContext } from '../../context/ArticleContext';

export default function About() {
  const { articleTimeout, article } = useArticleContext();
  const id = 'about';
  return (
    <Article id={id} article={article} articleTimeout={articleTimeout}>
      <Article.Title />
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
      <Article.Close />
    </Article>
  );
}
