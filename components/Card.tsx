import Image from 'next/image';

export function Card() {
  return (
  
      <div className="max-w-[500px] min-h-[550px] cursor-pointer bg-white p-5 rounded-lg shadow-lg">
        {/* Image Container - Ang laki nito ang magko-control sa Image */}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Image 
            src="/landingpage.png" 
            alt="Profile" 
            layout="fill"
            objectFit="stretch"
          />
        </div>

        {/* Project Title */}
        <div className="flex justify-start mt-4">
          <h1 className="font-mukta text-2xl font-semibold">Project Title</h1>
        </div>

        {/* Description */}
        <div className="mt-2">
          <p className="text-justify text-gray-700">
            Aljonard Dela Cruz. A recent graduate with a Bachelor&apos;s degree in Information Technology.
            I&apos;m a front-end developer with a passion for creating user-friendly websites and web applications.
          </p>
        </div>
      </div>

  );
}
