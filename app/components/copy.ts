export enum PageTitle {
  Intro = 'intro',
  Work = 'work',
  About = 'about',
  Contact = 'contact',
  Home = '',
}

export const PageTitles = Object.values(PageTitle);

export const HeaderCopy = {
  name: 'Paolo Ventura',
  quickDescription: [
    'Full stack software engineer',
    'Specialist in: Javascript (React, NodeJS, Angular and Next.js) and C# (dotNet)',
  ],
};

export const IntroCopy = {
  main: "Hi I'm Paolo and welcome to my site!",
};
export const WorkCopy = {
  main: [
    '📍 I am back in London 🇬🇧 after two years in Austin 🇺🇸',
    '👨‍💻 Day to day I code in JavaScript, Typescript and sometimes in Python or C#.',
    '💻 I have expertise in ReactJS, NodeJS, Angular, .NET, Umbraco, Azure, Accessibility and SQL DBs.',
  ],
  experience: [
    {
      title: 'Contract Software Engineer',
      workplace: 'Clerq',
      dates: 'Mar 2023 - Mar 2024',
      blurb: `I integrated vanilla JS and React apps into client's Shopify sites and engineered the now-integral pay-by-bank invoice feature. As the sole front-end engineer, I excelled in making React-remix projects, including using some cool React hooks.`,
    },
    {
      title: 'Senior Front-end Engineer',
      workplace: 'Doma',
      dates: 'Aug 2022 - Feb 2023',
      blurb: `I originally handled the React app and APIs, but quickly expanded to manage the entire Flask backend application too! Whilst also improving code quality through best practices and implementing Cypress testing. Took charge of release management.`,
    },
    {
      title: 'Senior Software Engineer',
      workplace: 'NewDay',
      dates: 'Dec 2021 - July 2022',
      blurb: `Promoted to Senior Engineer for exceptional contributions in systems design, mentorship, and ownership.`,
    },
    {
      title: 'Software Engineer',
      workplace: 'NewDay',
      dates: 'July 2019 - Dec 2021',
      blurb:
        "Engineer on the Direct to Consumer team. Maintaining and deploying new features to the acquisition forms used by ~800k applicants a year. I used to work on the Dashboard team which itself has ~300k daily users. Tech stack includes: Angular, React, C# and Azure. Cool recent projects: Engineered the acquisition process for the UK's first cardless credit card, built the API layer for aggregators to come to our page directly and automated A11Y testing through cypress",
    },
    {
      title: 'Student',
      workplace: 'Flat Iron School',
      dates: 'September 2018 - March 2019',
      blurb:
        'Full time student, learning to build apps using a variety of technologies, including, Ruby, Rails, JavaScript, ReactJS, HTML, CSS, SQL.',
    },
    {
      title: 'Underwriter',
      workplace: 'Tokio Marine Kiln',
      dates: 'October 2014 - August 2018',
      blurb:
        "International property underwriter in Lloyd's of London. Writing EMEA domiciled facultative reinsurance. Developed my own profitable portfolio of $1.5m gross written premium within the Large Corporate Property team.",
    },
    {
      title: 'Student',
      workplace: 'Warwick University',
      dates: 'October 2010 - July 2014',
      blurb:
        "Bsc (Hons) in 'Economics with Study Abroad at Universidad Carlos III de Madrid', Upper Second Class (2.1)",
    },
  ],
};
export const AboutCopy = {
  main: [
    '💡 Currently I like Gen AI, Blockchain and Trading (paper most of the time!)',
    '🗣️ I am fluent in English, French and Spanish.',
    "🏋️ In my spare time you'll find me working out or using my sous-vide cooker!",
  ],
};
