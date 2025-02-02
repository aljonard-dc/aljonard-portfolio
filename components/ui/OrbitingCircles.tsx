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
  isPaused?: boolean; // New prop to control pause state
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  isPaused = false, // Default to false (not paused)
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
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        } as React.CSSProperties}
        className={cn(
          "absolute flex items-center justify-center rounded-full transform-gpu animate-orbit border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse, "paused": isPaused }, // Apply "paused" class if isPaused
          className
        )}
      >
        <div className="flex items-center justify-center">{children}</div>
      </div>
    </>
  );
}

export function OrbitingCirclesDemo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [outerCircleRadius, setOuterCircleRadius] = useState(190);
  const [innerCircleRadius, setInnerCircleRadius] = useState(50);
  const [paused, setPaused] = useState(false); // State to track whether the animation is paused
  const [activeCircle, setActiveCircle] = useState<"inner" | "outer" | null>(null); // Track which circle is active

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

  // Handle icon click to toggle pause/resume
  const handleIconClick = (circleType: "inner" | "outer") => {
    if (activeCircle === circleType) {
      setPaused(!paused); // Toggle paused state
    } else {
      setActiveCircle(circleType); // Set the active circle to the clicked one
      setPaused(false); // Unpause if switching between inner/outer circle
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[500px] h-[500px] bg-neptune-50 rounded-custom-shape"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Inner Circles */}
        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          delay={5}
          radius={innerCircleRadius}
          isPaused={paused && activeCircle === "inner"} // Pause inner circle animation when paused
        >
          <Icons.tsIcon onClick={() => handleIconClick("inner")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          delay={10}
          radius={innerCircleRadius}
          isPaused={paused && activeCircle === "inner"}
        >
          <Icons.reactjsIcon onClick={() => handleIconClick("inner")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          delay={15}
          radius={innerCircleRadius}
          isPaused={paused && activeCircle === "inner"}
        >
          <Icons.javascriptIcon onClick={() => handleIconClick("inner")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          duration={20}
          delay={20}
          radius={innerCircleRadius}
          isPaused={paused && activeCircle === "inner"}
        >
          <Icons.nextjsIcon onClick={() => handleIconClick("inner")} />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="border-none bg-transparent"
          radius={outerCircleRadius}
          duration={20}
          delay={3}
          reverse
          isPaused={paused && activeCircle === "outer"} // Pause outer circle animation when paused
        >
          <Icons.css3Icon onClick={() => handleIconClick("outer")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          radius={outerCircleRadius}
          duration={20}
          delay={6}
          reverse
          isPaused={paused && activeCircle === "outer"}
        >
          <Icons.tailwindcssIcon onClick={() => handleIconClick("outer")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          radius={outerCircleRadius}
          duration={20}
          delay={9}
          reverse
          isPaused={paused && activeCircle === "outer"}
        >
          <Icons.html5Icon onClick={() => handleIconClick("outer")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          radius={outerCircleRadius}
          duration={20}
          delay={12}
          reverse
          isPaused={paused && activeCircle === "outer"}
        >
          <Icons.gitIcon onClick={() => handleIconClick("outer")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          radius={outerCircleRadius}
          duration={20}
          delay={15}
          reverse
          isPaused={paused && activeCircle === "outer"}
        >
          <Icons.gitHubIcon onClick={() => handleIconClick("outer")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          radius={outerCircleRadius}
          duration={20}
          delay={17.5}
          reverse
          isPaused={paused && activeCircle === "outer"}
        >
          <Icons.phpIcon onClick={() => handleIconClick("outer")} />
        </OrbitingCircles>

        <OrbitingCircles
          className="border-none bg-transparent"
          radius={outerCircleRadius}
          duration={20}
          delay={20.5}
          reverse
          isPaused={paused && activeCircle === "outer"}
        >
          <Icons.mysqlIcon onClick={() => handleIconClick("outer")} />
        </OrbitingCircles>
      </div>
    </div>
  );
}


const Icons = {
  tailwindcssIcon: ({ onClick }: { onClick: () => void }) => <Image src="/tailwindcss.svg" alt="Tailwind CSS" width={50} height={50} onClick={onClick} className="cursor-pointer"/>,
  gitHubIcon: ({ onClick }: { onClick: () => void }) => <Image src="/github.svg" alt="GitHub" width={40} height={40} onClick={onClick} className="cursor-pointer" />,
  css3Icon: ({ onClick }: { onClick: () => void }) => <Image src="/css3.svg" alt="CSS3" width={40} height={40} onClick={onClick} className="cursor-pointer" />,
  gitIcon: ({ onClick }: { onClick: () => void }) => <Image src="/git.svg" alt="Git" width={50} height={50} onClick={onClick} className="cursor-pointer" />,
  javascriptIcon: ({ onClick }: { onClick: () => void }) => <Image src="/js.svg" alt="JavaScript" width={40} height={40} onClick={onClick} className="cursor-pointer" />,
  html5Icon: ({ onClick }: { onClick: () => void }) => <Image src="/html5.svg" alt="HTML5" width={45} height={45} onClick={onClick} className="cursor-pointer" />,
  phpIcon: ({ onClick }: { onClick: () => void }) => <Image src="/php.svg" alt="PHP" width={50} height={50} onClick={onClick} className="cursor-pointer" />,
  mysqlIcon: ({ onClick }: { onClick: () => void }) => <Image src="/mysql.svg" alt="MySQL" width={60} height={60} onClick={onClick} className="cursor-pointer" />,
  nextjsIcon: ({ onClick }: { onClick: () => void }) => <Image src="/nextjs.svg" alt="Next.js" width={40} height={40} onClick={onClick} className="cursor-pointer" />,
  reactjsIcon: ({ onClick }: { onClick: () => void }) => <Image src="/react.svg" alt="React.js" width={40} height={40} onClick={onClick} className="cursor-pointer" />,
  tsIcon: ({ onClick }: { onClick: () => void }) => <Image src="/tslogo.svg" alt="TypeScript" width={50} height={50} onClick={onClick} className="cursor-pointer" />,
};
