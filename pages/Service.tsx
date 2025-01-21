import ServiceCard from '@/components/ServiceCard'
import React from 'react'
import { ServiceCardContent } from '@/data'

const Service = () => {
  return (
    <section className="bg-neptune-100 relative flex items-center py-16 ">
      <div className="container mx-auto">
        <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 place-self-center">
            <h1 className="text-5xl text-center font-semibold py-10">What I Can Provide?</h1>
          </div>
          {ServiceCardContent.map((content) => (
            <div key={content.id} className="m-auto">
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
