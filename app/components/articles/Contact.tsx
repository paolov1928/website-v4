import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/fontawesome-free-brands';
import { useArticleContext } from '../../context/ArticleContext';
import Article from './Article';
import { sendToEmailService } from '@/app/actions/contact';
import { z, ZodError } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type FormData = z.infer<typeof ContactSchema>;

const initialFormData: FormData = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const { articleTimeout, article } = useArticleContext();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({}); // Store error messages
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSendingError, setShowSendingError] = useState(false);

  const formValidation = () => {
    try {
      ContactSchema.parse(formData);
      setFormErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          const fieldName = err.path[0] as keyof FormData;
          fieldErrors[fieldName] = err.message;
        });
        setFormErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = () => {
    if (formValidation()) {
      const data = formData;
      onSubmit(data);
    }
  };

  const onSubmit = async (data: FormData) => {
    const submitResponse = await sendToEmailService(data);
    if (submitResponse) {
      setShowSuccess(true);
    } else {
      setShowSendingError(true);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear error message when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  return (
    <article
      id='contact'
      className={`${article === 'contact' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className='major'>Contact</h2>
      {showSuccess ? (
        <h3 className='major'>Thanks for contacting us</h3>
      ) : (
        <form method='post'>
          <div className='field half first'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && (
              <span className='error'>{formErrors.name}</span>
            )}
          </div>
          <div className='field half'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <span className='error'>{formErrors.email}</span>
            )}
          </div>
          <div className='field'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.message && (
              <span className='error'>{formErrors.message}</span>
            )}
          </div>
          <ul className='actions'>
            <li key='contact-action-1'>
              <button
                type='submit'
                className='special'
                onClick={(e) => {
                  e.preventDefault();
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
                  setFormData(initialFormData);
                  setFormErrors({});
                }}
              />
            </li>
            {showSendingError && (
              <li key='contact-action-3'>
                <p>Message sending error: Please try again in a few minutes</p>
              </li>
            )}
          </ul>
        </form>
      )}
      <SocialIcons />
      <Article.Close
        onClick={() => {
          setTimeout(() => {
            setFormData(initialFormData);
            setFormErrors({});
            setShowSuccess(false);
            setShowSendingError(false);
          }, 500);
        }}
      />
    </article>
  );
}

const socialMediaData = [
  { icon: faGithub, url: 'https://github.com/paolov1928' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/paolo-ventura/' },
  { icon: faMedium, url: 'https://medium.com/@ventura.paolo' },
  { icon: faInstagram, url: 'https://www.instagram.com/paolov1928/' },
];

const SocialIcons = () => (
  <ul className='icons'>
    {socialMediaData.map((social, index) => (
      <li key={`social-contact-icon-${index}`}>
        <a href={social.url}>
          {/* @ts-ignore */}
          <FontAwesomeIcon icon={social.icon} />
        </a>
      </li>
    ))}
  </ul>
);
