import Button from "./Button";
import { IoLogoGithub } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Carousel from "./Carousel";
import { CardProps } from "@/lib/props";

export default function Card({ title, description, images, tags, github, link }: CardProps) {
  return (
    <div className="max-w-[550px] cursor-pointer bg-white p-3 md:p-5 rounded-lg shadow-lgz">
      <Carousel slides={images} />

      <div className="text-start mt-2">
        <h1 className="text-neptune-900  font-mukta text-xl font-semibold">{title}</h1>
      </div>

      <div className="mt-2">
        <p className="text-justify text-sm text-neptune-800">{description}</p>
      </div>

      <div className="mt-4 gap-1 flex flex-wrap">
        {tags.map((tag, idx) => (
          <div
            key={idx}
            className="px-4 py-1 text-neptune-900 font-semibold bg-neptune-100 rounded-full border border-neptune-300 text-xs">
            {tag.name}
          </div>
        ))}
      </div>

      {/* Conditional Rendering for Buttons */}
      <div className="mt-6 flex justify-start gap-2">
        {github && (
          <Button
            className="flex-row-reverse text-neptune-50 hover:text-neptune-100 bg-neptune-500 hover:bg-neptune-800 border border-neptune-500 hover:border-neptune-900"
            title="View Code"
            target="_blank"
            href={github}
            onClick={() => {
              window.umami?.track(`${github} + "card-github_click"`);
            }}
            icon={<IoLogoGithub />}
          />
        )}
        {link && (
          <Button
            className="flex-row-reverse text-neptune-50 hover:text-neptune-100 bg-neptune-500 hover:bg-neptune-800 border border-neptune-500 hover:border-neptune-900"
            title="Visit"
            target="_blank"
            onClick={() => {
              window.umami?.track(`${link} + "visit-link_click"`);
            }}
            href={link}
            icon={<TbWorld />}
          />
        )}
      </div>
    </div>
  );
}
