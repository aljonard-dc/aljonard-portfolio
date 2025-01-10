import ShinyButton from '@/components/ui/shiny-button'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiSolidNavigation } from "react-icons/bi";

const Contact = () => {
  return (
    <section className='relative bg-blue-200 w-full h-[450px] px-5 '>
      <div className='w-full h-24 flex justify-center items-end'>
        <h1 className='text-2xl lg:text-4xl text-center'>Feel free to contact me</h1>
      </div>
      <div className='-600 w-full h-20 flex justify-center items-center'>
        <p className='text-md text-center'>I'm always open to new opportunities and collaborations.</p>
      </div>
      <div className='w-full h-32 flex justify-center items-center'>
        <ShinyButton className='bg-blue-600 text-blue-50 flex items-center gap-2' href='mailto:aljonarddc@gmail.com'>
          Let's Connect <BiSolidNavigation size={20} />
        </ShinyButton>
      </div>
      <div className='px-10 space-y-4 md:space-y-0 w-full h-24 flex items-center justify-between flex-col lg:flex-row'>
        <h1 className='text-center'>
          © 2024 Aljonard. All rights reserved.
        </h1>
        <div className='flex gap-4'>
          <a href=""> <FaGithub size={32} /></a>
          <a href=""> <FaLinkedin size={32} /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact
