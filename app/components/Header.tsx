import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/fontawesome-free-regular';
import { HeaderCopy, PageTitles } from './copy';
import { useArticleContext } from '../context/ArticleContext';

const Header: React.FC = () => {
  const { handleOpenArticle, hasTimedOut } = useArticleContext();
  return (
    <header id='header' style={hasTimedOut ? { display: 'none' } : {}}>
      <div className='logo'>
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faSnowflake} transform='grow-18' />
      </div>
      <div className='content'>
        <div className='inner'>
          <h1>{HeaderCopy.name}</h1>
          {HeaderCopy.quickDescription.map((text, i) => (
            <p key={i} className='quick-description'>
              {text}
            </p>
          ))}
        </div>
      </div>
      <nav>
        <ul>
          {PageTitles.filter((pt) => !!pt).map((pt) => {
            return (
              <li key={`page-title-${pt}`}>
                <button
                  onClick={() => {
                    handleOpenArticle(pt);
                  }}
                >
                  {pt}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
