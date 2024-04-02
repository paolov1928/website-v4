import React from 'react';
import { useArticleContext } from '../context/ArticleContext';

const Footer: React.FC = () => {
  const { timeoutState } = useArticleContext();
  return (
    <footer id='footer' style={timeoutState ? { display: 'none' } : {}}>
      <p className='copyright'>Thanks for visiting!</p>
    </footer>
  );
};

export default Footer;
