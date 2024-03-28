import React from 'react';

interface FooterProps {
  timeout?: boolean;
}

const Footer: React.FC<FooterProps> = ({ timeout }) => (
  <footer id="footer" style={timeout ? { display: 'none' } : {}}>
    <p className="copyright">Thanks for visiting!</p>
  </footer>
);

export default Footer;
