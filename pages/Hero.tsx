import React from 'react'
import ParticlesBackground from '@/components/ui/ParticlesBackground'
import { TypingAnimation } from '@/components/ui/typing-animation'
import Button from '@/components/Button'
import { FiDownload, FiGithub } from 'react-icons/fi'
import { HiMiniArrowUturnRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'



const Hero = () => {
  return (
    <section className='bg-neptune-50 relative w-full h-auto lg:h-screen flex flex-col lg:flex-row justify-evenly items-center px-2'>
      <ParticlesBackground />
      <div className=' flex flex-col 2xl:w-1/4 lg:w-1/2  space-y-8'>
    
            <h3 className=' text-2xl uppercase neptune-neptune-600 '>Hi There!, I&apos;m-</h3>
              
            <TypingAnimation
                className="font-roboto text-bold text-neptune-950 tracking-wide md:text-6xl sm:text-5xl"
                text="ALJONARD DELA CRUZ"/>
              
            <p className='text-justify w-full '> 
              An aspiring web developer continuously expanding my expertise in modern technologies like React, Typescript, and NextJS, while actively seeking hands-on experience in front-end development to enhance my skills.
            </p>
            <div className='flex flex-row gap-5'>
                <Button
                 className='border border-neptune-950 hover:text-neptune-50 hover:bg-neptune-700 hover:border-neptune-700' title='Resume' href='#Resume' target='_blank' icon={<FiDownload />}/>
                
                <Button 
                className='border text-neptune-50 bg-neptune-700 hover:border-neptune-900  hover:bg-neptune-900'
                title='Go to Projects' href='#Projects' icon={<HiMiniArrowUturnRight/> }/>
            </div>
      </div>


      <div className='flex flex-col justify-center items-center space-y-8 h-auto size-80 lg:size-96'>
            <img className='object-contain' src="profile.png" alt="profile" />
            <div className='flex gap-3'>
               <a target='_blank' href="https://github.com/aljonard-dc"><IoLogoGithub size={32} /></a>
               <a target='_blank' href="https://www.linkedin.com/in/aljonarddelacruz/"><FaLinkedin size={32} /></a>
               <a target='_blank' href="mailto:aljonarddc@gmail.com"><HiOutlineMail size={32} /></a>
            </div>
      </div>
     
    </section>
  )
}

export default Hero
