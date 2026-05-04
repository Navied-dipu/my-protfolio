import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaDiagramProject, FaSchool } from 'react-icons/fa6'
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiMail, FiPhone } from 'react-icons/fi'
import { SiNextdotjs, SiTailwindcss, SiFramer, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si'

export const navMenu = ['Home', 'About', 'Skills', 'Work', 'Contact']

export const personalInfo = {
    name: "Dipu",
    designation: "React & Next.js Specialist | Full Stack Developer",
    email: "dipurd19@email.com",
    phone: "+880 1234 567890",
    whatsapp: "+880 1234 567890",
    location: "Dhaka, Bangladesh",
    journey: "My programming journey started 5 years ago when I first discovered the power of JavaScript. Since then, I've mastered React and Next.js, building high-performance web applications with a focus on modern architecture and seamless user experiences. I've built over 25 projects, constantly pushing myself to leverage the latest features of Next.js and MERN stack.",
    workType: "I specialize in building server-side rendered (SSR) and static site generated (SSG) applications using Next.js. I enjoy crafting interactive, cinematic web experiences that combine technical excellence with state-of-the-art animations.",
    hobbies: "Outside of coding, I'm a passionate soccer fan, I enjoy traveling to new places, and I occasionally indulge in digital painting to explore my creative side.",
    education: [
        {
            degree: "B.Tech in Computer Science",
            institution: "Dhaka International University",
            year: "2020 - 2024",
            details: "Completed with a CGPA of 3.8/4.0. Focused on Software Engineering, Data Structures, and Web Technologies."
        }
    ],
    socials: [
        { icon: FiLinkedin, link: "https://www.linkedin.com/in/dipu-reactdev" },
        { icon: FiGithub, link: "https://github.com/Navied-dipu" },
        { icon: FiTwitter, link: "https://twitter.com" },
        { icon: FiFacebook, link: "https://facebook.com" }
    ]
}

export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend Mastery',
        technologies: ['React 19', 'Next.js 15', 'TailwindCSS v4', 'GSAP', 'Framer Motion', 'TypeScript']
    },
    {
        icon: FaMicrochip,
        title: 'Backend Expertise',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth']
    },
    {
        icon: FaDesktop,
        title: 'Modern Workflow',
        technologies: ['Vercel', 'Docker', 'Git/GitHub', 'CI/CD Pipelines', 'Figma', 'Testing']
    }
]

export const projectData = [
    {
        id: "project-1",
        title: 'NextGen Health Portal',
        description: 'A Next.js 15 powered healthcare management system with server actions and optimized performance.',
        image: 'https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=800&auto=format&fit=crop&q=60',
        tech: ['Next.js 15', 'React 19', 'MongoDB', 'TailwindCSS'],
        liveLink: "https://example.com",
        githubLink: "https://github.com/Navied-dipu/project1",
        challenges: "Implementing complex server actions for real-time scheduling while maintaining strict type safety across the application.",
        improvements: "Planning to integrate AI-driven diagnosis assistance using OpenAI API."
    },
    {
        id: "project-2",
        title: 'FurniCraft E-commerce',
        description: 'A premium furniture store with 3D previews and dynamic Next.js routing.',
        image: 'https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=800&auto=format&fit=crop&q=60',
        tech: ['Next.js', 'Three.js', 'Redux Toolkit', 'TailwindCSS'],
        liveLink: "https://example.com",
        githubLink: "https://github.com/Navied-dipu/project2",
        challenges: "Optimizing LCP (Largest Contentful Paint) for 3D heavy pages and ensuring smooth transitions between furniture models.",
        improvements: "Adding Augmented Reality (AR) features for room placement visualization."
    },
    {
        id: "project-3",
        title: 'Collaborative Design Hub',
        description: 'Real-time collaborative platform with Next.js API routes and Socket.io.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
        tech: ['Socket.io', 'Next.js', 'Node.js', 'Framer Motion'],
        liveLink: "https://example.com",
        githubLink: "https://github.com/Navied-dipu/project3",
        challenges: "Managing real-time state synchronization across multiple users without compromising server-side rendering performance.",
        improvements: "Implementing a version history feature for shared design boards."
    }
]

export const profileData = [
    {
        icon: FaCode,
        title: 'Technical Focus',
        technologies : ['React & Next.js Specialist', 'MERN Stack Mastery']
    },
    {
        icon: FaSchool,
        title: 'Background',
        technologies : ['B.Tech in CS (DIU)']
    },
    {
        icon: FaDiagramProject,
        title: 'Impact',
        technologies : ['25+ Production Projects']
    },
]