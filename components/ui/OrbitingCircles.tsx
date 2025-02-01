'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

export function OrbitingCirclesDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [outerCircleRadius, setOuterCircleRadius] = useState(190);
  const [innerCircleRadius, setInnerCircleRadius] = useState(50);

  useEffect(() => {
    const updateCircleRadii = () => {
      if (containerRef.current) {
        const containerSize = containerRef.current.offsetWidth;
        setOuterCircleRadius(containerSize * 0.4);
        setInnerCircleRadius(containerSize * 0.2);
      }
    };

    updateCircleRadii();
    window.addEventListener("resize", updateCircleRadii);
    return () => window.removeEventListener("resize", updateCircleRadii);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[500px] h-[500px] bg-none xl:bg-neptune-50 rounded-none xl:rounded-custom-shape"
    >
      {/* Inner Circles */}
      <OrbitingCircles className="border-none bg-transparent" duration={20} delay={5} radius={innerCircleRadius}>
        <Icons.tsIcon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" duration={20} delay={10} radius={innerCircleRadius}>
        <Icons.reactjsIcon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" duration={20} delay={15} radius={innerCircleRadius}>
        <Icons.javascriptIcon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" duration={20} delay={20} radius={innerCircleRadius}>
        <Icons.nextjsIcon />
      </OrbitingCircles>

      {/* Outer Circles (reverse) - Dynamic radius */}
      <OrbitingCircles className="border-none bg-transparent" radius={outerCircleRadius} duration={20} delay={3} reverse>
        <Icons.css3Icon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" radius={outerCircleRadius} duration={20} delay={6} reverse>
        <Icons.tailwindcssIcon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" radius={outerCircleRadius} duration={20} delay={9} reverse>
        <Icons.html5Icon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" radius={outerCircleRadius} duration={20} delay={12} reverse>
        <Icons.gitIcon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" radius={outerCircleRadius} duration={20} delay={15} reverse>
        <Icons.gitHubIcon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" radius={outerCircleRadius} duration={20} delay={17.5} reverse>
        <Icons.phpIcon />
      </OrbitingCircles>

      <OrbitingCircles className="border-none bg-transparent" radius={outerCircleRadius} duration={20} delay={20.5} reverse>
        <Icons.mysqlIcon />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  tailwindcssIcon: () => <Image src="/tailwindcss.svg" alt="Tailwind CSS" width={50} height={50} />,
  gitHubIcon: () => <Image src="/github.svg" alt="GitHub" width={40} height={40} />,
  css3Icon: () => <Image src="/css3.svg" alt="CSS3" width={40} height={40} />,
  gitIcon: () => <Image src="/git.svg" alt="Git" width={50} height={50} />,
  javascriptIcon: () => <Image src="/js.svg" alt="JavaScript" width={40} height={40} />,
  html5Icon: () => <Image src="/html5.svg" alt="HTML5" width={45} height={45} />,
  phpIcon: () => <Image src="/php.svg" alt="PHP" width={50} height={50} />,
  mysqlIcon: () => <Image src="/mysql.svg" alt="MySQL" width={60} height={60} />,
  nextjsIcon: () => <Image src="/nextjs.svg" alt="Next.js" width={40} height={40} />,
  reactjsIcon: () => <Image src="/react.svg" alt="React.js" width={40} height={40} />,
  tsIcon: () => <Image src="/tslogo.svg" alt="TypeScript" width={50} height={50} />,
};


