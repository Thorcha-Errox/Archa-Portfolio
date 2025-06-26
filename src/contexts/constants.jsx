import weatherForecastImg from '../assets/weatherimg.png';
import stickyNotepadImg from '../assets/stickynotepad.png';
import bubbleGameImg from '../assets/bubblegame.png';
import todoAppImg from '../assets/todoapp.png';
import portfolioImg from '../assets/myportfolioimg.png';
import { GraduationCap, BookOpen, Mail, Phone, MapPin } from 'lucide-react';

export const skills = [
  {
    title: "Frontend Dev",
    skills: [
      { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS", image: "https://icon.icepanel.io/Technology/svg/CSS3.svg" },
      { name: "JS", image: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
      { name: "React", image: "https://icon.icepanel.io/Technology/svg/React.svg" },
      { name: "Bootstrap", image: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg" },
    ],
  },
  {
    title: "Backend Dev",
    skills: [
      { name: "Node.js", image: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "PHP", image: "https://icon.icepanel.io/Technology/svg/PHP.svg" },
      { name: "Express", image: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png" },
      { name: "Django", image: "https://icon.icepanel.io/Technology/png-shadow-512/Django.png" },
      { name: "MongoDB", image: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
      { name: "MySQL", image: "https://icon.icepanel.io/Technology/svg/MySQL.svg" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "C++", image: "https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg" },
      { name: "Git", image: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png" },
      { name: "Firebase", image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
      { name: "Figma", image: "https://icon.icepanel.io/Technology/svg/Figma.svg" },
    ],
  },
];

export const projects = [
  {
    title: "Weather Forecast",
    description: "A modern weather forecast application built with React featuring real-time weather updates.",
    image: weatherForecastImg,
    tech: ["React"],
    liveLink: "https://thorcha-errox.github.io/Weather-App/",
    githubLink: "https://github.com/thorcha-errox/Weather-App",
  },
  {
    title: "Sticky Notepad",
    description: "A Notepad applications built with simple Javascript, platform for adding important notes with intractive UI.",
    image: stickyNotepadImg,
    tech: ["HTML", "CSS", "Javascript"],
    liveLink: "https://thorcha-errox.github.io/Sticky-Notepad/",
    githubLink: "https://github.com/thorcha-errox/Sticky-Notepad",
  },
  {
    title: "My Portfolio",
    description: "A Portfolio webpage that include all details about me,featuring Ai chatbot of myself.",
    image: portfolioImg,
    tech: ["React"],
    liveLink: "https://thorcha-errox.github.io/Archa-Portfolio/",
    githubLink: "https://github.com/Thorcha-Errox/Archa-Portfolio",
  },
  {
    title: "Bubble Game",
    description: "A Bubble game built with simple Javascript, Score high in least 60 Sec.",
    image: bubbleGameImg,
    tech: ["HTML", "CSS", "Javascript"],
    liveLink: "https://thorcha-errox.github.io/Bubble-Game/",
    githubLink: "https://github.com/thorcha-errox/Bubble-Game",
  },
  {
    title: "Todo App",
    description: "Todo App just for learning basics of Javascript.",
    image: todoAppImg,
    tech: ["HTML", "CSS", "Javascript"],
    liveLink: "https://thorcha-errox.github.io/To-Do-App/",
    githubLink: "https://github.com/thorcha-errox/To-Do-App",
  },
];

export const educationData = [
  {
    title: "B.Tech In (Computer Science And Engineering)",
    description: "Computer Science Engineering helped me focusing on modern web technologies and software development.",
    highlight: true,
    icon: GraduationCap
  },
  {
    title: "Higher Secondary Education In (Diploma In Computer Science And Technology)", 
    description: "Computer Science as core subjects helped me a lot in the introduction to coding and software usage.",
    highlight: true,
    icon: BookOpen
  }
];

export const contactData = {
  email: {
    value: "archaviveksgp@gmail.com",
    icon: Mail
  },
  phone: {
    value: "+91 7366800688",
    icon: Phone
  },
  location: {
    value: "Bihar, India",
    icon: MapPin
  }
};

export const emailJsConfig = {
  publicKey: '8cmHHMcGz3fuqziPq',
  serviceID: 'service_9humj5l',
  templateID: 'template_wv12v6a'
};