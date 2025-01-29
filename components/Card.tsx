import Image from 'next/image';
import Button from './Button';
import { IoLogoGithub } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import Carousel from './ui/Carousel';

export function Card() {
  const slides = ["/landingpage.png", "/landingpage.png", "/landingpage.png"];

  return (
  
      <div className="max-w-[550px] min-h-[550px] cursor-pointer bg-white p-5 rounded-lg shadow-lg">
        {/* Image Container*/}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          {/* <Image 
            src="/landingpage.png" 
            alt="Profile" 
            layout="fill"
            objectFit="stretch"
          /> */}
          <Carousel slides={slides}/>
        </div>

        {/* Project Title */}
        <div className="text-start mt-2">
          <h1 className="font-mukta text-xl font-semibold">Resort Web-based Reservation Management System</h1>
        </div>

        {/* Description */}
        <div className="mt-2">
          <p className="text-justify text-sm text-neptune-800">
          The system offers an intuitive and user-friendly website that provides comprehensive information about the resort, a seamless and efficient reservation management system, and an engaging virtual tour of the resort.
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-1'>
            <span className='px-4 py-1 text-white bg-black-100 rounded-full text-xs'>HTML</span>
            <span className='px-4 py-1 text-white bg-black-100 rounded-full text-xs'>CSS</span>
            <span className='px-4 py-1 text-white bg-black-100 rounded-full text-xs'>Javascript</span>
            <span className='px-4 py-1 text-white bg-black-100 rounded-full text-xs'>NodeJS</span>
            <span className='px-4 py-1 text-white bg-black-100 rounded-full text-xs'>PHP</span>
            <span className='px-4 py-1 text-white bg-black-100 rounded-full text-xs'>MySQL</span>
        </div>
        <div className='mt-6 flex justify-end gap-2 '>
            <Button 
            className='flex-row-reverse bg-gray-200 hover:bg-gray-300'
            title='View Code'
            target="_blank"
            href='#'
            icon={<IoLogoGithub/>}/>
            <Button 
            className='flex-row-reverse bg-gray-200 hover:bg-gray-300'
            title='Visit'
            target="_blank"
            href='#'
            icon={<TbWorld />}/>
        </div>
      </div> 

  );
}
