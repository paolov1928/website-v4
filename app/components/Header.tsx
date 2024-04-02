import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/fontawesome-free-regular';
import { HeaderCopy, PageTitles } from './copy';
import { useArticleContext } from '../context/ArticleContext';

const Header: React.FC = () => {
  const { handleOpenArticle, timeoutState } = useArticleContext();
  return (
    <header id='header' style={timeoutState ? { display: 'none' } : {}}>
      <div className='logo'>
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faLemon} transform='grow-18' />
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
          {PageTitles.map((pt) => {
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
