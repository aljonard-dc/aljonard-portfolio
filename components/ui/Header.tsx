"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/imports";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  // Function for smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior

    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href); // Set active section when clicked
      }
    } else {
      window.location.href = href; // Redirect to other pages normally
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const sections = navLinks.map((link) => link.href).filter((href) => href.startsWith("#"));

    const handleScrollEvent = () => {
      let currentSection = "";

      sections.forEach((href) => {
        const section = document.querySelector(href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <header className="dark:bg-neptune-950 py-2 fixed inset-x-0 top-0 z-50 w-full bg-neptune-50/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
    
          <Link 
          className="flex items-center gap-4"
          href="#home">
          <Image src="/images/logo-light.png" alt="logo" width={50} height={50} />
          <div className="flex flex-col">
            <span className="text-base font-semibold text-neptune-950">Aljonard</span>
            <span className="text-base font-semibold">Dela Cruz</span>
          </div>
          </Link>
          
        

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex text-base gap-8 text-neptune-950">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  (pathName === link.href || activeSection === link.href)
                    ? "border-b-4 border-neptune-500"
                    : "border-b-4 border-transparent hover:border-neptune-500"
                }`}
              >
                <Link href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="text-neptune-950" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`${menuOpen ? "block" : "hidden"} lg:hidden bg-neptune-50/80 w-full`}>
        <ul className="flex flex-col items-center text-neptune-950 text-base gap-4 p-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                (pathName === link.href || activeSection === link.href)
                  ? "border-b-4 border-neptune-500"
                  : "border-b-4 border-transparent hover:border-neptune-500"
              }`}
            >
              <Link href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
