'use client'
import React, { useRef } from 'react';
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaLevelDownAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { Button, ParticlesBackground, TypingAnimation } from "@/lib/imports";
import {motion, useInView } from 'framer-motion';
const Hero = () => {


  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50px"})
  const containerVariants = {
      hidden: {opacity: 0, y:100},
      visible: {
        opacity: 1, y:0,
        transition: {duration: 0.8, ease: 'easeIn',delay: 0.1}
      }
    }
    const buttonHoverVariants = {
      hover: {
        scale: 1.1,
        transition: {
          type: 'tween', 
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    };
  return (
    <section id="home" className="relative bg-neptune-100 py-24 min-h-screen flex items-center">
      <ParticlesBackground />
      <div className="container mx-auto">
        <motion.div 
        ref={sectionRef}
        variants={containerVariants}
        initial={"hidden"}
        animate={isInView ? 'visible' : 'hidden'}
        exit={"hidden"}
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Text */}
          <div className="text-center lg:text-start space-y-5">
            <h1 className="text-xl uppercase text-neptune-700">
              Hi There!, I&apos;m
            </h1>
            <div className="lg:w-[300px] xl:w-[400px] place-self-center lg:place-self-start">
              <TypingAnimation text="ALJONARD DELA CRUZ" />
            </div>

            <h2 className="text-base text-neptune-700">
              An aspiring web developer continuously expanding my expertise in
              modern technologies like React, Typescript, and NextJS, while
              actively seeking hands-on experience in front-end development to
              enhance my skills.
            </h2>
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <motion.div
              variants={buttonHoverVariants}
              initial={{ scale: 1 }}
              whileHover="hover">
              
              <Button
                className="border border-neptune-900 hover:text-neptune-50 hover:bg-neptune-700 hover:border-neptune-700"
                title="Resume"
                href="/resume/DELACRUZ_ALJONARD_RESUME.pdf"
                target="_blank"
                icon={<FiDownload />}
              />
              </motion.div>
              <motion.div
              variants={buttonHoverVariants}
              whileHover="hover">
              <Button
                className="border text-neptune-50 bg-neptune-700 hover:border-neptune-900 hover:bg-neptune-900"
                title="Go to Projects"
                href="#projects"
                icon={<FaLevelDownAlt />}
              />
              </motion.div>
            </div>
          </div>

          {/* Right Side - Profile Image & Social Icons */}
          <div className="place-self-center lg:place-self-end">
            <div className="flex flex-col items-center space-y-5">
              <Image
                src="/images/profile.png"
                alt="Profile Picture"
                width={400}
                height={400}
                className="object-cover rounded-full"
              />

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center">
                <motion.div
                  variants={buttonHoverVariants}
                  initial={{ scale: 1 }}
                  whileHover="hover">
                    <Link
                      target="_blank"
                      href="https://github.com/aljonard-dc"
                      rel="noopener noreferrer"
                      aria-label="Visit my GitHub profile"
                      className="text-neptune-950 hover:text-neptune-700 transition duration-200">
                        
                      <IoLogoGithub size={28} />
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
                    className="text-neptune-950 hover:text-neptune-700 transition duration-200">
                  <FaLinkedin size={28} />
                </Link>
                </motion.div>
                <motion.div
                  variants={buttonHoverVariants}
                  initial={{ scale: 1 }}
                  whileHover="hover">
                  <Link
                    target="_blank"
                    href="mailto:aljonarddc@gmail.com"
                    aria-label="Send Email to my email address"
                    rel="noopener noreferrer"
                    className="text-neptune-950 hover:text-neptune-700 transition duration-200">
                  <HiOutlineMail size={28} />
                </Link>
                </motion.div> 
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;