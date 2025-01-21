import { DotPatternBackground } from '@/components/DotPatternBackground'
import { OrbitingCirclesDemo } from '@/components/OrbitingCirclesDemo';

import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from 'react-icons/io';

const AboutMe = () => {
  return (
    <section className='bg-white relative flex justify-center items-center py-20 min-h-screen'>
      <DotPatternBackground />
 
      <div className='container mx-auto'>
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16'>
          
          <div className='col-span-1 lg:col-span-2 place-self-center'>
            <h1 className='font-mukta text-4xl lg:text-5xl '>About Me</h1>
          </div>
          
          <div className='flex flex-col items-center lg:items-start justify-start gap-4 md:gap-8 lg:gap-10 place-self-center'>
            <h1 className='font-mukta text-2xl lg:text-3xl'>Hi there 👋</h1>
            <p className='text-base lg:text-lg text-justify text-gray-700 pr-0 lg:pr-10'>
              I&apos;m Aljonard Dela Cruz. A recent graduate with a Bachelor&apos;s degree in Information Technology. I&apos;m a front-end developer with a passion for creating user-friendly websites and web applications. Currently, I&apos;m learning and exploring web development, focusing on building responsive websites and utilizing the latest technologies and best practices, including React, Typescript, and Next.js, to deliver modern, high-quality web applications. My enthusiasm for web development motivates me to continuously expand my knowledge and turn complex challenges into practical solutions.
            </p>

            <div className='flex items-center gap-4'>
              <a target='_blank' href="https://github.com/aljonard-dc"><IoLogoGithub size={32} /></a>
              <a target='_blank' href="https://www.linkedin.com/in/aljonarddelacruz/"><FaLinkedin size={32} /></a>
            </div>
          </div>   

          <div className='place-self-center justify-self-center lg:justify-self-end'>
            <OrbitingCirclesDemo/>
          </div>   
          
        </div>
      </div>
    </section>
  );
}

export default AboutMe;