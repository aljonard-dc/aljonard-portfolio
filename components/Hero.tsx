import React from 'react'
import ParticlesBackground from './ui/ParticlesBackground'
import TypingAnimation from './ui/typing-animation'

const Hero = () => {
  return (
    <main className='relative w-full h-screen flex flex-col justify-center items-center p-2 lg:flex-row space-y-10  '>
      <ParticlesBackground />
      <div className=' flex flex-col 2xl:w-1/4 px-5 lg:w-1/2 '>
            <h1 className='font-mukta text-2xl '>Hi There!, I&apos;m-</h1>
            
            <TypingAnimation
                className="font-inter text-blue-300 md:text-6xl sm:text-5xl"
                text="ALJONARD DELA CRUZ"/>
            <p className='text-justify'> 
            An aspiring web developer continuously expanding my expertise in modern technologies like React and Next.js, while actively seeking hands-on experience in front-end development to enhance my skills.</p>
      </div>
      <div className=' relative size-96'>
            <img className='object-contain' src="profile.png" alt="" />
      </div>
    </main>
  )
}

export default Hero
