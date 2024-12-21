import OrbitingCircles from "@/components/ui/orbiting-circles";


export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-[700px] flex-col items-center justify-center overflow-hidden">
    

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={80}
      >
        <Icons.tsIcon/>
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.reactjsIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={80}
      >
        <Icons.javascriptIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.nextjsIcon />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[43px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={3}
        reverse
      >
        <Icons.css3Icon />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={6}
        reverse
      >
        <Icons.tailwindcssIcon/>
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={9}
        reverse
      >
        <Icons.html5Icon />
      </OrbitingCircles>
   
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={12}
        reverse
      >
        <Icons.gitIcon />
      </OrbitingCircles>
   
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Icons.gitHubIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={17.5}
        reverse
      >
        <Icons.phpIcon />
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[70px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20.5}
        reverse
      >
        <Icons.mysqlIcon />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
tailwindcssIcon: () => (
    
    <img src="tailwindcss.svg" alt="" />
  ),
gitHubIcon: () => (
  <img src="github.svg" alt="" />
),
css3Icon: () => (
  <img src="css3.svg" alt="" />
),
gitIcon: () => (
  <img src="git.svg" alt="" />
  ),
javascriptIcon: () => (
  <img src="js.svg" alt="" />
  ),
html5Icon: () => (
   <img src="html5.svg" alt="" />
  ),

  phpIcon: () => (
    <img src="php.svg" alt="" />
  ),
  mysqlIcon: () => (
    <img src="mysql.svg" alt="" />
  ),
  nextjsIcon: () => (
    <img src="nextjs.svg" alt="" />
  ),
  reactjsIcon: () => (
    <img src="react.svg" alt="" />
  ),
  tsIcon: () => (
    <img src="tslogo.svg" alt="" />
  ),
};
