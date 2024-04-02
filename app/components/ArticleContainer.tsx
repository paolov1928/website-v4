import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/fontawesome-free-brands';
import About from './articles/About';
import Intro from './articles/Intro';
import Work from './articles/Work';
import { useArticleContext } from '../context/ArticleContext';



const ArticleContainer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { articleTimeout, article, handleCloseArticle, timeoutState } = useArticleContext();

  const close = (
    <div
      className='close'
      onClick={() => {
        handleCloseArticle && handleCloseArticle();
      }}
    ></div>
  );

  const getContactFormElements = () => {
    return {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
  };

  const formValidation = () => {
    const inputs = getContactFormElements();
    const inputValues = Object.values(inputs);
    // Check if none are empty
    return inputValues.every(Boolean);
  };

  const handleSubmit = () => {
    const data = getContactFormElements();
    onSubmit(data);
    window.alert('Thank you for the message!');
  };

  const URL = 'fdsfdsf';

  const onSubmit = async (data: any) => {
    try {
      await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    } catch (error) {
      console.log(error);
    }
    console.log('submit successful');
  };

  return (
    <div
      id='main'
      style={timeoutState ? { display: 'flex' } : { display: 'none' }}
    >
      <Intro close={close} />

      <Work close={close} />

      <About close={close} />

      {/* Contact Article */}
      <article
        id='contact'
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className='major'>Contact</h2>
        <form method='post'>
          <div className='field half first'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className='field half'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className='field'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <ul className='actions'>
            <li key='contact-action-1'>
              <button
                type='submit'
                className='special'
                onClick={(e) => {
                  e.preventDefault();
                  if (!formValidation()) {
                    window.alert('Please fill in all form fields');
                    return;
                  }
                  handleSubmit();
                }}
              >
                Send Message
              </button>
            </li>
            <li key='contact-action-2'>
              <input
                type='reset'
                value='Reset'
                onClick={(e) => {
                  e.preventDefault();
                  setFormData({ name: '', email: '', message: '' }); // Reset the form fields
                }}
              />
            </li>
          </ul>
        </form>
        <ul className='icons'>
          <li key='contact-icon-1'>
            <a href='https://github.com/paolov1928'>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li key='contact-icon-2'>
            <a href='https://www.linkedin.com/in/paolo-ventura/'>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li key='contact-icon-3'>
            <a href='https://medium.com/@ventura.paolo'>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </li>
          <li key='contact-icon-4'>
            <a href='https://www.instagram.com/paolov1928/'>
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  );
};

export default ArticleContainer;
