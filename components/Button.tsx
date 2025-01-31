import React from "react";
import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  title: string | ReactNode; // Title or label for the anchor, can include icons
  icon?: ReactNode; // Optional icon to display next to the title
  className?: string; // Optional custom styles
  href: string; // URL to navigate to
  target?: "_self" | "_blank" | "_parent" | "_top"; // Optional target attribute
};

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  className = "",
  href,
  target = "_self",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`flex items-center gap-2 px-4 py-2 text-base font-manrope font-bold rounded-[10px] ${className}`}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
     
      <span>{title}</span>
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default Button;
