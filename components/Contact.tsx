"use client";
import React, { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";
import Link from "next/link";
import { ShinyButton } from "@/lib/imports";
import { motion, useInView } from "framer-motion";
const Contact = () => {

  const currentYear = new Date().getFullYear();
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
    <section id="contact" className="relative bg-neptune-100 py-10">
      <div className="place-items-center container mx-auto ">
        <motion.div
          ref={sectionRef}
          variants={titleVariants}
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
          exit={"hidden"}
          className="pb-10">
          <h1 className="font-mukta text-neptune-900 text-4xl lg:text-5xl text-center font-semibold">
            Feel free to contact me
          </h1>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            ref={sectionRef}
            variants={titleVariants}
            initial={"hidden"}
            animate={isInView ? "visible" : "hidden"}
            exit={"hidden"}
            className="lg:col-span-2 text-center">
            <h2 className="text-md text-neptune-800">
              I&apos;m always open to new opportunities and collaborations.
            </h2>
          </motion.div>

          <motion.div
            variants={buttonHoverVariants}
            initial={{ scale: 1 }}
            whileHover="hover"
            className="lg:col-span-2 flex">
            <ShinyButton
              className="bg-neptune-600 text-blue-50 flex items-center gap-2 mx-auto"
              rel="noopener noreferrer"
              onClick={() => {
                window.umami?.track("contact_email_click");
              }}
              href="mailto:aljonarddc@gmail.com">
              Let&apos;s Connect <BiSolidNavigation size={20} />
            </ShinyButton>
          </motion.div>

          <div className="lg:col-span-1 text-center lg:text-left text-neptune-800">
            <h1>© {currentYear} Aljonard. All rights reserved.</h1>
          </div>
          <div className=" lg:col-span-1">
            <div className="flex justify-center lg:justify-end gap-4">
              <motion.div
                variants={buttonHoverVariants}
                initial={{ scale: 1 }}
                whileHover="hover">
                <Link
                  className="text-neptune-950 hover:text-neptune-600 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/aljonard-dc"
                  aria-label="Visit my Github profile">
                  <FaGithub size={32} />
                </Link>
              </motion.div>
              <motion.div
                className="text-neptune-950 hover:text-neptune-600 transition duration-200"
                variants={buttonHoverVariants}
                initial={{ scale: 1 }}
                whileHover="hover">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/aljonarddelacruz/"
                  aria-label="Visit my LinkedIn profile">
                  <FaLinkedin size={32} />
                </Link>
              </motion.div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
