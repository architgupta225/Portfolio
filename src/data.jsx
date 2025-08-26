import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Archit',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Gupta',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '24 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Phone : ',
    description: '+91 9634867048',
  },

  {
    id: 6,
    title: 'Email : ',
    description: 'architgupta225@gmail.com',
  },

];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Years of <br /> Experience',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Web Developer <span> Nineleaps </span>',
    desc: `I am a results-driven Frontend Developer with 3+ years of experience, delivering high-quality, scalable applications while driving collaboration, Agile practices, and user adoption.<br /><br />
          - <span className="bold-text"><strong>Front-end Development:</strong></span> I build and optimize responsive ReactJS applications, refactoring code for maintainability and performance with HTML, CSS, JavaScript, and TypeScript.<br />
          - <span className="bold-text"><strong>Team Leadership:</strong></span> I lead and mentor cross-functional teams, ensuring 100% sprint success, on-time delivery, and adherence to best engineering practices.<br />
          - <span className="bold-text"><strong>Code Quality Assurance:</strong></span> I uphold rigorous standards with peer reviews and testing, reducing defect leakage by 25% and ensuring robust, production-ready code.<br />
          - <span className="bold-text"><strong>API Integration:</strong></span> I integrate third-party REST APIs seamlessly, enhancing data exchange, streamlining workflows, and elevating user experiences.<br />
          - <span className="bold-text"><strong>SDLC Oversight:</strong></span> I oversee end-to-end SDLC, orchestrating workflows from design to deployment, ensuring efficiency and continuous improvement.<br />
          - <span className="bold-text"><strong>Agile Scrum:</strong></span> I apply Agile Scrum practices to deliver iterative, adaptive project management, achieving faster release cycles and higher productivity.<br />
          - <span className="bold-text"><strong>User Training:</strong></span> I conduct user training and create documentation, enabling clients and end-users to effectively adopt and leverage applications.<br />
 `
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2022',
    title: 'Bachelor of Technology <span> Graphic Era Hill University </span>',
    desc: 'I earned a Bachelor of Technology in Computer Science with a 8.3 CGPA.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2018',
    title: 'Intermediate <span> Beverly Hills School </span>',
    desc: 'Achieved an 82% score in my intermediate studies.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015-2016',
    title: 'Matriculation <span> Beverly Hills School </span>',
    desc: 'Obtained a perfect 10 CGPA in my matriculation.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '73',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '76',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '68',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Yuva Health',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Yuva Health',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://www.yuvahealth.in',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Event Finder',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Event Finder Web App',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, HTML, CSS',
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: 'Real Estate',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Real estate',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, HTML, TailwindCSS, NodeJs, MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://real-estate-marketplace-s0qq.onrender.com/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
