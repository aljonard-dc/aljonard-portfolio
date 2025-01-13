import React from 'react';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { TypingAnimation } from '@/components/ui/typing-animation';
import Button from '@/components/Button';
import { FiDownload } from 'react-icons/fi';
import { HiMiniArrowUturnRight } from 'react-icons/hi2';
import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative bg-neptune-100 flex justify-center items-center h-dvh">
      <ParticlesBackground />
      <div className='container mx-auto'>

   
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
       
        <div className="text-center lg:text-start space-y-5">
          <h3 className="text-lg sm:text-xl lg:text-2xl uppercase text-neptune-700 mt-10 md:mt-0">Hi There!, I&apos;m</h3>
          <TypingAnimation
            className=" text-neptune-800 text-6xl md:text-6xl xl:text-7xl 2xl:text-8xl font-semibold"
            text="ALJONARD DELA CRUZ"
          />
          <p className="text-base md:text-md  text-gray-700">
            An aspiring web developer continuously expanding my expertise in modern technologies like React,
            Typescript, and NextJS, while actively seeking hands-on experience in front-end development to enhance my
            skills.
          </p>
          <div className="flex flex-row gap-4 justify-center lg:justify-start ">
            <Button
              className="border border-neptune-950 hover:text-neptune-50 hover:bg-neptune-700 hover:border-neptune-700"
              title="Resume"
              href="#Resume"
              target="_blank"
              icon={<FiDownload />}
            />
            <Button
              className="border text-neptune-50 bg-neptune-700 hover:border-neptune-900 hover:bg-neptune-900"
              title="Go to Projects"
              href="#Projects"
              icon={<HiMiniArrowUturnRight />}
            />
          </div>
        </div>

        <div className="place-items-center lg:place-items-end ">
          <div className='size-8/12 space-y-5'>
          <img
                className=" object-contain"
                src="profile.png"
                alt="profile"
              />
             <div className=" flex gap-4 justify-center">
                <a target="_blank" href="https://github.com/aljonard-dc" rel="noopener noreferrer">
                  <IoLogoGithub size={28} className="hover:text-neptune-600 transition duration-200" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/aljonarddelacruz/" rel="noopener noreferrer">
                  <FaLinkedin size={28} className="hover:text-neptune-600 transition duration-200" />
                </a>
                <a target="_blank" href="mailto:aljonarddc@gmail.com" rel="noopener noreferrer">
                  <HiOutlineMail size={28} className="hover:text-neptune-600 transition duration-200" />
                </a>
              </div> 

          </div>
           
          
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;