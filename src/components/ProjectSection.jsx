'use client';

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from 'framer-motion';


const projectsData = [
  {
    id: 1,
    title: "Pokemon App",
    description: "Interactive Pokemon showcase with API integration",
    image: "/image/pokemon.png",
    tag: ["All", "Web"],
   
  },
  {
    id: 2,
    title: "Razer Clone",
    description: "Gaming Hub",
    image: "/image/razer.jpg",
    tag: ["All", "Web"],
   
  },
  {
    id: 3,
    title: "Barbing Exp",
    description: "A Daily Show",
    image: "/image/barbing.png",
    tag: ["All", "Web"],
   
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          My <span className="text-purple-500">Projects</span>
        </h2>
   
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
        </div>

        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="h-full"
            >
              <ProjectCard
                imgUrl={project.image}
                title={project.title}
                description={project.description}
                
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;