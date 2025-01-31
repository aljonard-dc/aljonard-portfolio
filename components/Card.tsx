import Button from "./Button";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Carousel from "./ui/Carousel";

interface CardProps {
  id: number;
  title: string;
  description: string;
  link: string;
  images: string[];
  tags: { name: string }[];
}

export function Card({ title, description, images, tags }: CardProps) {
  return (
    <div className="max-w-[550px] min-h-[550px] cursor-pointer bg-white p-5 rounded-lg shadow-lg">
      <div>
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
          <Carousel slides={images} />
        </div>

        <div className="text-start mt-2">
          <h1 className="font-mukta text-xl font-semibold">{title}</h1>
        </div>
        <div className="mt-2">
          <p className="text-justify text-sm text-neptune-800">{description}</p>
        </div>

        <div className="mt-4 gap-1 flex">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="px-4 py-1 text-neptune-500 font-semibold bg-neptune-100 rounded-full text-xs border-1 border-neptune-200"
            >
              {tag.name}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-start gap-2">
          <Button
            className="flex-row-reverse bg-gray-200 hover:bg-gray-300"
            title="View Code"
            target="_blank"
            href="#"
            icon={<IoLogoGithub />}
          />
          <Button
            className="flex-row-reverse bg-gray-200 hover:bg-gray-300"
            title="Visit"
            target="_blank"
            href="#"
            icon={<TbWorld />}
          />
        </div>
      </div>
    </div>
  );
}