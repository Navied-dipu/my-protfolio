import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaDiagramProject, FaSchool } from 'react-icons/fa6'
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiMail, FiPhone } from 'react-icons/fi'
import { SiNextdotjs, SiTailwindcss, SiFramer, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si'

// export const navMenu = ['Home', 'About', 'Skills', 'Work', 'Contact']

export const personalInfo = {
    name: "Dipu",
    designation: "React & Next.js Specialist | Full Stack Developer",
    email: "dipurd19@email.com",
    phone: "+880 1701 974476",
    whatsapp: "+880 1701 974476",
    location: "Dhaka, Bangladesh",
    journey: "My programming journey started 1+ years ago when I first discovered the power of JavaScript. Since then, I've mastered React and Next.js, building high-performance web applications with a focus on modern architecture and seamless user experiences. I've built over 25 projects, constantly pushing myself to leverage the latest features of Next.js and MERN stack.",
    workType: "I specialize in building server-side rendered (SSR) and static site generated (SSG) applications using Next.js. I enjoy crafting interactive, cinematic web experiences that combine technical excellence with state-of-the-art animations.",
    hobbies: "Outside of coding, I'm a passionate soccer fan, I enjoy traveling to new places, and I occasionally indulge in digital painting to explore my creative side.",
//  education
    socials: [
        { icon: FiLinkedin, link: "https://www.linkedin.com/in/dipu-nextdev" },
        { icon: FiGithub, link: "https://github.com/Navied-dipu" },
        { icon: FiFacebook, link: "https://www.facebook.com/naviedsiddque.dipu" }
    ]
}

export const skillsData = [
    {
        icon: FaReact,
        title: 'Frontend Mastery',
        technologies: ['React 19', 'Next.js 15', 'TailwindCSS v4', 'GSAP', 'Framer Motion', 'TypeScript', 'JavaScript']
    },
    {
        icon: FaMicrochip,
        title: 'Backend Expertise',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST APIs', 'JWT Auth', 'BetterAuth']
    },
    {
        icon: FaDesktop,
        title: 'Modern Workflow',
        technologies: ['Vercel', 'Netlify', 'Git/GitHub', 'Figma', ]
    }
]

export const projectData = [
    {
        id: "project-1",
        title: 'Woo-AI Prompt Platform ',
        description: 'A full-stack AI prompt marketplace with secure authentication and role-based access control.',
        image: 'https://i.ibb.co.com/Myww0Gjy/image.png',
        tech: ['Next.js 16', 'React 19', 'MongoDB', 'TailwindCSS', 'BetterAuth'],
        liveLink: "https://woo-ai-cyan.vercel.app",
        githubLink: "https://github.com/Navied-dipu/woo-ai-client",
        challenges: "A full-stack AI prompt marketplace with secure authentication and role-based access control.",
        improvements: "Planning to integrate AI-driven diagnosis assistance using Claude API."
    },
    {
        id: "project-2",
        title: 'PetHub to adopet pet',
        description: 'A full-stack platform for browsing pets and managing adoption requests.',
        image: 'https://i.ibb.co.com/VYGC0PKP/image.png',
        tech: ['Next.js 15', 'React 19', 'MongoDB', 'TailwindCSS', 'BetterAuth'],
        liveLink: "https://pet-hub-client-three.vercel.app",
        githubLink: "https://github.com/Navied-dipu/pet-hub-client",
        challenges: "Implementing complex server actions for real-time scheduling while maintaining strict type safety across the application.",
        improvements: "Planning to integrate AI-driven diagnosis assistance using Claude, Cuesor API."
    },
    {
        id: "project-3",
        title: 'Tiles Gallery  Tile Showcase Platform',
        description: 'A premium Tile Showcase Platform .',
        image: 'https://i.ibb.co.com/pjQ3vRvj/image.png',
        tech: ['Next.js', 'TailwindCSS', 'BetterAuth'],
        liveLink: "https://tiles-gallery-a8.vercel.app",
        githubLink: "https://github.com/Navied-dipu/tiles-gallery-a8",
        challenges: "Optimizing LCP (Largest Contentful Paint) for 3D heavy pages and ensuring smooth transitions between furniture models.",
        improvements: "Adding Augmented Reality (AR) features for room placement visualization."
    },
]

export const profileData = [
    {
        icon: FaCode,
        title: 'Technical Focus',
        technologies : ['React & Next.js Specialist', 'MERN Stack Mastery']
    },
    {
        icon: FaDiagramProject,
        title: 'Impact',
        technologies : ['5+ Production Projects']
    },
]