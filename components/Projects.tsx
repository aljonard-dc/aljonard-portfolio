'use client'
import React, { useRef } from 'react';
import { Card, ProjectData } from "@/lib/imports";
import {motion, useInView } from 'framer-motion';

const Projects = () => {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50px" });

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeIn", delay: 0.1 },
    },
  };

  return (
    <section id="projects" className="relative bg-neptune-100 flex flex-col py-24">
      <div className="place-items-center container mx-auto">
        <motion.div 
          ref={sectionRef}
          variants={titleVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          exit={"hidden"}
          className="space-y-4 pb-16 lg:pb-20">
          <h1 className="text-neptune-900 font-mukta text-4xl lg:text-5xl text-center font-semibold">
            Projects
          </h1>
          <h2 className="text-base text-center text-neptune-700">
            Here&apos;s some of my projects that I have worked on.
          </h2>
        </motion.div>

        <motion.div 
          ref={sectionRef}
          variants={containerVariants}
          initial={"hidden"}
          animate={isInView ? 'visible' : 'hidden'}
          exit={"hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 xl:gap-16">
          
          {ProjectData.map((project) => (
            <div
              key={project.id}
              className="lg:hover:scale-105 lg:transition-all lg:duration-300 lg:ease-in-out transform">
              <Card 
                id={project.id}
                title={project.title}
                description={project.description}
                github={project.github}
                link={project.link}
                images={project.images}
                tags={project.tags}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
