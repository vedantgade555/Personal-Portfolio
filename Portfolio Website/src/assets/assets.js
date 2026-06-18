import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import profileImage from '../assets/profileImage.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
    profileImage,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['SpringBoot']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Figma']
  }
];



export const projects = [
  {
    title: "AI-Chat Application",
    description: "A full-featured AI chat application using gemini api",
    image: projectImg1,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "EasyFit",
    description: "A fitness application for all exercises with responsive design",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Groomify",
    description: "A software that will be help to book salon appointment online,and helps to owner to manage all componemts",
    image: projectImg3,
    tech: ["JSP", "Servlet","Bootstrap","MySql"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills,education,experience",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Featness Recommendation Website",
    description: "A application that will recommends the fitness activity to improve effiviency and accuracy",
    image: projectImg5,
    tech: ["SpringBoot","Microservices","Keycloak","Bootstrap","React", "MySql", "MongoDB","Docker"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "Medical Store Management System",
    description: "Generate a bill and sent it on whatsapp,,manage the all stock and also give low stock alert",
    image: projectImg6,
    tech: ["SpringBoot","Bootstrap","React","JWT Authentiation"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Interned Java Developer",
    company: " NILESON IT CONSULTING (OPC) PRIVATE LIMITED",
    duration: "August 2025-November 2025",
    description:
      "Durig internship i will learn those concepts that are used in industry and in fintech projects.",
    color: "purple"
  },
  // {
  //   role: "Web Developer",
  //   company: "Digital Solutions LLC",
  //   duration: "2018 - 2020",
  //   description:
  //     "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
  //   color: "pink"
  // },
  // {
  //   role: "Junior Developer",
  //   company: "StartUp Ventures",
  //   duration: "2016 - 2018",
  //   description:
  //     "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
  //   color: "blue"
  // }
];

export const eduData = [
  {
    role: "10th ",
    company: "Mahatma Phule Vidhyalay Bhosari Pune 39",
    duration: "2020",
    color: "purple"
  },
  {
    role: "12th",
    company: "BJS Collage Pimpri Pune 18",
    duration: "2022",
    color: "pink"
  },
  {
    role: "Bsc.Cs",
    company: "MIT ACSC",
    duration: "2023-2026",
    color: "blue"
  }
];
