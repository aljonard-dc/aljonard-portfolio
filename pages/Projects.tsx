import { Card } from "@/components/Card";
import React from "react";
import { ProjectData } from "@/data";

const Projects = () => {
  return (
    <section className="relative bg-neptune-100 flex flex-col py-24">
      <div className="place-items-center container mx-auto">
        <div className="space-y-4 pb-16 lg:pb-20">
          <h1 className="font-mukta text-4xl lg:text-5xl text-center font-semibold">
            Projects
          </h1>
          <h6 className="text-base text-center">
            Here&apos;s some of my projects that I have worked on.
          </h6>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 xl:gap-16">
          {ProjectData.map((project) => (
            <div key={project.id}>
              <Card 
              id={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              images={project.images}
              tags={project.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
