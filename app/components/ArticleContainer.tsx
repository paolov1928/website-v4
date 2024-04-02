import React from 'react';
import About from './articles/About';
import Intro from './articles/Intro';
import Work from './articles/Work';
import { useArticleContext } from '../context/ArticleContext';
import Contact from './articles/Contact';

const ArticleContainer: React.FC = () => {
  const { hasTimedOut } = useArticleContext();
  return (
    <div
      id='main'
      style={hasTimedOut ? { display: 'flex' } : { display: 'none' }}
    >
      <Intro />

      <Work />

      <About />

      <Contact />
    </div>
  );
};

export default ArticleContainer;
