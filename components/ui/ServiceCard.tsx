import React from 'react'
import Image from 'next/image'
import { iconProps } from '@/lib/props';
const ServiceCard = ({ icon ,title , description }: iconProps) => {
  return (
    <div className='max-w-[350px] h-[350px] lg:h-[370px]  cursor-pointer bg-neptune-50 p-5 rounded-lg 
    flex flex-col items-center gap-5 shadow-lg hover:shadow-xl'>
            <div className='flex items-center justify-center size-20 border-2 border-neptune-950 bg-neptune-100 rounded-full'>
                <Image src={icon} alt={title} width={50} height={50} />
            </div>
            <div>
                <h1 className='text-neptune-900  font-mukta text-2xl text-center font-semibold '>{title}</h1>
            </div>
            <div>
                <h2 className='text-neptune-800 text-center'>{description}</h2>
            </div>
    </div>
  )
}

export default ServiceCard
