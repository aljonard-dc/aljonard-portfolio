import React from "react";
import Link from "next/link";
import { ButtonProps } from "@/lib/props";

const Button = ({ title, icon, className = "", href, target = "_self", onClick }: ButtonProps) => (
  <Link
    href={href}
    target={target}
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-4 py-2 text-base font-manrope font-bold rounded-[10px] ${className}`}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}>
    <span>{title}</span>
    {icon && <span className="text-lg">{icon}</span>}
  </Link>
);

export default Button;
