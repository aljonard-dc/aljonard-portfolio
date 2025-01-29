import ServiceCard from '@/components/ServiceCard'
import React from 'react'
import { ServiceCardContent } from '@/data'

const Service = () => {
  return (
    <section className="bg-neptune-100 relative py-24">
      <div className="place-content-center container mx-auto">
        <div className="pb-16 lg:pb-20">
            <h1 className="font-mukta text-4xl lg:text-5xl text-center font-semibold ">What I Can Provide?</h1>
          </div>
        <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 xl:gap-16">
        
          {ServiceCardContent.map((content) => (
            <div key={content.id} className="mx-auto">
              <ServiceCard
                id={content.id}
                icon={content.icon}
                title={content.title}
                description={content.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
