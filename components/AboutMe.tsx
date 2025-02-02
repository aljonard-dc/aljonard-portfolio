"use client";
import React, { useRef } from "react";
import { DotPatternBackground } from "@/components/ui/DotPatternBackground";
import { OrbitingCirclesDemo } from "@/components/ui/OrbitingCircles";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
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
  const buttonHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section id="about" className="bg-white relative flex items-center py-24 ">
      <DotPatternBackground />
      <div className=" container mx-auto">
        <motion.div
          ref={sectionRef}
          variants={titleVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          exit={"hidden"}
          className="pb-16 lg:pb-20"
        >
          <h1 className="text-neptune-900  font-mukta text-4xl lg:text-5xl text-center font-semibold">
            About Me
          </h1>
        </motion.div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial={"hidden"}
            animate={isInView ? "visible" : "hidden"}
            exit={"hidden"}
            className="flex flex-col items-center lg:items-start justify-start space-y-5 place-self-center">
            <h1 className="text-neptune-900 font-mukta text-2xl lg:text-3xl">
              Hi there 👋
            </h1>
            <p className="text-base lg:text-lg text-justify text-neptune-700">
              I&apos;m Aljonard Dela Cruz. A recent graduate with a
              Bachelor&apos;s degree in Information Technology. I&apos;m a
              front-end developer with a passion for creating user-friendly
              websites and web applications. Currently, I&apos;m learning and
              exploring web development, focusing on building responsive
              websites and utilizing the latest technologies and best practices,
              including React, Typescript, and Next.js, to deliver modern,
              high-quality web applications. My enthusiasm for web development
              motivates me to continuously expand my knowledge and turn complex
              challenges into practical solutions.
            </p>

            <div className="flex items-center gap-4">
              <motion.div
                variants={buttonHoverVariants}
                initial={{ scale: 1 }}
                whileHover="hover">
                <Link
                  target="_blank"
                  href="https://github.com/aljonard-dc"
                  rel="noopener noreferrer"
                  aria-label="Visit my Github profile"
                  className="text-neptune-950 hover:text-neptune-600 transition duration-200">
                  <IoLogoGithub size={40} />
                </Link>
              </motion.div>
              <motion.div
                variants={buttonHoverVariants}
                initial={{ scale: 1 }}
                whileHover="hover">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/aljonarddelacruz/"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="text-neptune-950 hover:text-neptune-600 transition duration-200">
                  <FaLinkedin size={40} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial={"hidden"}
            animate={isInView ? "visible" : "hidden"}
            exit={"hidden"}
            className="w-full flex justify-center lg:justify-end">
            <OrbitingCirclesDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
