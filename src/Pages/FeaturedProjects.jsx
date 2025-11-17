import React from "react";
import { motion } from "framer-motion";
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiJavascript,
} from "react-icons/di";
import { span } from "framer-motion/client";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Job Portal System",
      desc: "Full-stack MERN job portal with Firebase auth, JWT, and dynamic dashboards.",
      tech: [
        <DiReact size={25} />,
        <DiNodejsSmall size={25} />,
        <DiMongodb size={25} />,
      ],
      img: "https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive personal portfolio showcasing projects, skills, and contact form.",
      tech: [
        <DiHtml5 size={25} />,
        <DiCss3 size={25} />,
        <DiJavascript size={25} />,
        <DiReact size={25} />,
      ],
      img: "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
      link: "#",
    },
    {
      title: "Library Management",
      desc: "Node.js + MongoDB library management system with borrowing and returning books.",
      tech: [<DiNodejsSmall size={25} />, <DiMongodb size={25} />],
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",

      link: "#",
    },
  ];

  return (
    <div id="Work" className="py-20 px-4 lg:px-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center font-orbitron text-zinc-800 bitron mb-14">
        My <span className="text-cyan-800">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className=" group relative p-8 rounded-2xl border border-cyan-800
              bg-white dark:bg-zinc-900 
              shadow-lg hover:shadow-2xl 
              transition-all duration-300 cursor-pointer"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-white  font-orbitron mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-white font-space-grotesk mb-4">
                {project.desc}
              </p>

              <div className="flex dark:text-white gap-3 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-block text-cyan-700 dark:text-cyan-400 font-semibold group-hover:underline transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
