import Image from 'next/image';
import { IntroCopy } from '../copy';
import Article from './Article';
import { useArticleContext } from '../../context/ArticleContext';

export default function Intro() {
  const { articleTimeout, article } = useArticleContext();
  const id = 'intro';
  return (
    <Article id={id} article={article} articleTimeout={articleTimeout}>
      <Article.Title />
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
      <Article.Close />
    </Article>
  );
}
