import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";
import Link from "next/link";
import { ShinyButton } from "@/lib/imports";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-neptune-100 py-10">
      <div className="container mx-auto">
        <div className="pb-10">
          <h1 className="font-mukta text-4xl lg:text-5xl text-center font-semibold">
            Feel free to contact me
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="lg:col-span-2 text-center">
            <p className="text-md">
              I&apos;m always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="lg:col-span-2 flex">
            <ShinyButton
              className="bg-neptune-600 text-blue-50 flex items-center gap-2 mx-auto"
              href="mailto:aljonarddc@gmail.com">
              Let&apos;s Connect <BiSolidNavigation size={20} />
            </ShinyButton>
          </div>

          <div className="lg:col-span-1 text-center lg:text-left ">
            <h1>© 2024 Aljonard. All rights reserved.</h1>
          </div>
          <div className=" lg:col-span-1">
            <div className="flex justify-center lg:justify-end gap-4">
              <Link target="_blank" href="https://github.com/aljonard-dc" aria-label="GitHub">
                <FaGithub size={32} />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/aljonarddelacruz/" aria-label="LinkedIn">
                <FaLinkedin size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
