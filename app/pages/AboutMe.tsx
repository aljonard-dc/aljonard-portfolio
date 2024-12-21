import { DotPatternBackground } from '@/components/DotPatternBackground'
import { OrbitingCirclesDemo } from '@/components/OrbitingCirclesDemo';
import DotPattern from '@/components/ui/dot-pattern'
import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
 

    <section className='relative bg-white w-full h-auto xl:h-screen px-5 2xl:px-60'>
    <DotPatternBackground />
        <div className='w-full h-40 lg:h-52 flex justify-center items-end '>
            <h1 className='font-mukta text-3xl lg:text-5xl '>
                About Me
            </h1>
                
        </div>
                   
        <div className='flex flex-col xl:flex-row'>
            <div className='w-full mt-8 lg:mt-24 flex flex-col items-start justify-start space-y-5 lg:space-y-10'>
                
                <h1 className='font-mukta text-2xl lg:text-3xl'>Hi there 👋</h1>
                
                <p className='font-mukta text-lg'>
                    I’m Aljonard Dela Cruz. A recent graduate with a Bachelor’s degree in Information Technology. I’m a front-end developer with a passion for creating user-friendly websites and web applications. Currently, I’m learning and exploring web development, focusing on building responsive websites and utilizing the latest technologies and best practices, including React, Typescript, and Next.js, to deliver modern, high-quality web applications. My enthusiasm for web development motivates me to continuously expand my knowledge and turn complex challenges into practical solutions.
                </p>

                <div className='flex items-center gap-4'>
                    <a target='_blank' href="https://github.com/aljonard-dc"><FaGithub size={32} /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/aljonard-dela-cruz-69b052317/"><FaLinkedin size={32} /></a>

                </div>
                
                
          
            </div>
            <div className='relative flex justify-center items-center'>
                <OrbitingCirclesDemo/>
            </div>   
          
        </div>
        
        
     
    </section>
   
    
  )
}

export default AboutMe

