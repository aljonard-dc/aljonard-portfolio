import Button from "./Button";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Carousel from "./ui/Carousel";
import { CardProps } from "@/lib/props";

export default function Card({ title, description, images, tags, github, link }: CardProps) {
  return (
    <div className="max-w-[550px] cursor-pointer bg-white p-3 md:p-5 rounded-lg shadow-lg">
      <Carousel slides={images} />

      <div className="text-start mt-2">
        <h1 className="font-mukta text-xl font-semibold">{title}</h1>
      </div>

      <div className="mt-2">
        <p className="text-justify text-sm text-neptune-800">{description}</p>
      </div>

      <div className="mt-4 gap-1 flex flex-wrap">
        {tags.map((tag, idx) => (
          <div
            key={idx}
            className="px-4 py-1 text-neptune-500 font-semibold bg-neptune-100 rounded-full text-xs border border-neptune-200">
            {tag.name}
          </div>
        ))}
      </div>

      {/* Conditional Rendering for Buttons */}
      <div className="mt-6 flex justify-start gap-2">
        {github && (
          <Button
            className="flex-row-reverse bg-gray-200 hover:bg-gray-300"
            title="View Code"
            target="_blank"
            href={github}
            icon={<IoLogoGithub />}
          />
        )}
        {link && (
          <Button
            className="flex-row-reverse bg-gray-200 hover:bg-gray-300"
            title="Visit"
            target="_blank"
            href={link}
            icon={<TbWorld />}
          />
        )}
      </div>
    </div>
  );
}
