import ShinyButton from '@/components/ui/shiny-button'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiSolidNavigation } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="relative bg-white py-10">
      <div className='container mx-auto'>
      
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center px-2">
          
     
          <div className="lg:col-span-2 text-center">
            <h1 className="text-2xl lg:text-4xl">Feel free to contact me</h1>
          </div>
          
     
          <div className="lg:col-span-2 text-center">
            <p className="text-md">I'm always open to new opportunities and collaborations.</p>
          </div>

         
          <div className="lg:col-span-2 flex">
            <ShinyButton className="bg-neptune-600 text-blue-50 flex items-center gap-2 mx-auto" href="mailto:aljonarddc@gmail.com">
              Let's Connect <BiSolidNavigation size={20} />
            </ShinyButton>
          </div>

         
          <div className="lg:col-span-1 text-center lg:text-left ">
            <h1>© 2024 Aljonard. All rights reserved.</h1>
          </div>
          <div className=" lg:col-span-1">
              <div className="flex justify-center lg:justify-end gap-4">
                <a href="#" aria-label="GitHub">
                  <FaGithub size={32} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin size={32} />
                </a>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact;
