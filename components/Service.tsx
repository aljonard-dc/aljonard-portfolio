'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { ServiceCard, ServiceCardContent } from '@/lib/imports';

const Service = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.8, // Delay staggered animations
        ease: "easeOut",
      },
    }),
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
 
  return (
    <section id="contact" className="bg-white relative py-24" ref={sectionRef}>
      <div className="place-items-center container mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="hidden"
          className="pb-16 lg:pb-20">
          <h1 className="text-neptune-950 font-mukta text-4xl lg:text-5xl text-center font-semibold">
            What I Can Provide?
          </h1>
        </motion.div>

        {/* Services Grid */}
        <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
          {ServiceCardContent.map((content, index) => (
            <motion.div
              key={content.id}
              className="mx-auto"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index} 
              whileHover={{ scale: 1.05, rotate: 1 }} >
              <ServiceCard
                id={content.id}
                icon={content.icon}
                title={content.title}
                description={content.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
