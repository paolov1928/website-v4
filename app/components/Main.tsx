import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/fontawesome-free-brands';
import { IntroCopy, WorkCopy, AboutCopy } from './copy';

interface MainProps {
  article?: string;
  articleTimeout?: boolean;
  onCloseArticle?: () => void;
  timeout?: boolean;
}

const Main: React.FC<MainProps> = ({
  article,
  articleTimeout,
  onCloseArticle,
  timeout,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle && onCloseArticle();
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
    <div id="main" style={timeout ? { display: 'flex' } : { display: 'none' }}>
      {/* Intro Article */}
      <article
        id="intro"
        className={`${article === 'intro' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <p>{IntroCopy.main}</p>
        <span className="image main image__intro">
          <img
            src={`/images/intro-pic.jpg`}
            alt=""
            className="laughing-photo"
            width={'200px'}
          />
        </span>
        {close}
      </article>

      {/* Work Article */}
      <article
        id="work"
        className={`${article === 'work' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>
        {WorkCopy.main.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
        <h3 className="experience">Experience</h3>
        {WorkCopy.experience.map((text: any, i: number) => (
          <div className="experience__chunk" key={i}>
            <h4 className="experience__what">
              {text.title} at {text.workplace}
            </h4>
            <span className="experience__when">{text.dates}</span>
            <p className="experience__blurb">{text.blurb}</p>
          </div>
        ))}
        {close}
      </article>

      {/* About Article */}
      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main image__about">
          <img
            className="curious-george-photo"
            src={`/images/curious-george.png`}
            alt=""
          />
        </span>
        {AboutCopy.main.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
        {close}
      </article>

      {/* Contact Article */}
      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>
          <ul className="actions">
            <li key="contact-action-1">
              <button
                type="submit"
                className="special"
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
            <li key="contact-action-2">
              <input
                type="reset"
                value="Reset"
                onClick={(e) => {
                  e.preventDefault();
                  setFormData({ name: '', email: '', message: '' }); // Reset the form fields
                }}
              />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li key="contact-icon-1">
            <a href="https://github.com/paolov1928">
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li key="contact-icon-2">
            <a href="https://www.linkedin.com/in/paolo-ventura/">
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li key="contact-icon-3">
            <a href="https://medium.com/@ventura.paolo">
              {/* @ts-ignore */}
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </li>
          <li key="contact-icon-4">
            <a href="https://www.instagram.com/paolov1928/">
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

export default Main;
