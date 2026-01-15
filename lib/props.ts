import { MouseEventHandler } from "react";

export type iconProps = {
  id: number;
  title: string;
  icon: string;
  description: string;
};

export type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  pauseAfterTyping?: number;
  className?: string;
}
export interface CardProps {
  id: number;
  title: string;
  description: string;
  github?: string;
  link?: string;
  images: string[];
  tags: { name: string }[];
}
