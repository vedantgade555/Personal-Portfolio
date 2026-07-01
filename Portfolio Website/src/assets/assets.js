import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import profileImage from '../assets/profileImage.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import projectImg7 from '../assets/project7.avif';
import projectImg8 from '../assets/project8.avif';


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
    title: "Frontend Development",
    icon: FaReact,
    description: "Building responsive, interactive, and modern user interfaces.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Developing scalable backend applications and RESTful APIs.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST API",
      "JWT Authentication",
      "OAuth2",
      "Maven"
    ]
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description: "Designing, managing, and optimizing relational and NoSQL databases.",
    tags: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Hibernate",
      "Spring Data JPA",
      "SQL"
    ]
  },
  {
    title: "Programming & Problem Solving",
    icon: FaCode,
    description: "Strong foundation in programming concepts and data structures.",
    tags: [
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Collections Framework"
    ]
  },
  {
    title: "Version Control & Tools",
    icon: FaTools,
    description: "Tools and technologies used in my daily development workflow.",
    tags: [
      "Git",
      "GitHub",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "Eclips"
    ]
  },
  // Uncomment if you learn these technologies
  // {
  //   title: "Cloud & DevOps",
  //   icon: FaCloud,
  //   description: "Deploying and managing applications in cloud environments.",
  //   tags: [
  //     "Docker",
  //     "AWS",
  //     "Kubernetes",
  //     "CI/CD",
  //     "GitHub Actions"
  //   ]
  // }
];


export const projects = [
  {
    title: "AI Chat Application",
    description:
      "An AI-powered chat application that generates intelligent responses using the Gemini API, providing a smooth and interactive conversational experience.",
    image: projectImg1,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "EasyFit",
    description:
      "A responsive fitness application that helps users discover exercises, follow workout routines, and stay consistent with their fitness goals.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Groomify",
    description:
      "An online salon appointment booking system that allows customers to schedule visits while helping salon owners manage appointments and daily operations efficiently.",
    image: projectImg3,
    tech: ["JSP", "Servlet", "Bootstrap", "MySql"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio website built to showcase my projects, technical skills, education, and professional experience in an interactive way.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Recommendation Website",
    description:
      "A fitness recommendation platform that suggests personalized workouts and activities based on user preferences to support healthier lifestyle choices.",
    image: projectImg5,
    tech: ["SpringBoot", "Microservices", "Keycloak", "Bootstrap", "React", "MySql", "MongoDB", "Docker"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Medical Store Management System",
    description:
      "A pharmacy management system that manages inventory, generates bills, sends invoices through WhatsApp, and provides low-stock alerts for better inventory control.",
    image: projectImg6,
    tech: ["SpringBoot", "Bootstrap", "React", "JWT Authentication"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Video Calling and Chat Application",
    description:
      "A real-time communication platform that enables users to create virtual meeting rooms, exchange messages, and participate in secure video calls.",
    image: projectImg7,
    tech: ["SpringBoot", "Bootstrap", "React", "JWT Authentication"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Secure Notes",
    description:
      "A secure note-taking application with JWT-based authentication and Google and GitHub OAuth login, allowing users to store and manage their notes safely.",
    image: projectImg8,
    tech: ["SpringBoot", "Bootstrap", "React", "JWT Authentication", "OAuth2 Authentication"],
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
