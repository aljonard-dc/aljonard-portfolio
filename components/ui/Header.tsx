'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { navLinks } from '@/lib/imports'
import { FiMenu, FiX } from 'react-icons/fi'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();
    

  return (
   <header className='dark:bg-neptune-950 py-2 fixed inset-x-0 top-0 z-50 w-full bg-neptune-50/80 backdrop-blur-sm shadow-sm'>
    <div className='container mx-auto flex items-center justify-between'>
     <div className='flex items-center gap-4'>
            <Image src="/logo-light.png" alt="logo" width={50} height={50}></Image>
            <div className='flex flex-col'>
            <span className='text-base font-semibold text-neptune-950'>Aljonard</span>
            <span className='text-base font-semibold'>Dela Cruz</span>
            </div>
           
        </div>
       
        <div className='flex items-center'>  
            <nav className='hidden lg:block'>
                <ul className='flex text-base gap-8 text-neptune-950'>
                {
                    navLinks.map((link) => (
                        <li key={link.id} className={`
                            ${pathName === link.href ? 'border-b-4 border-neptune-500': 'border-b-4 border-transparent hover:border-neptune-500'} `}>
                            <Link href={link.href}> {link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
           
        </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
                <button
                    className="text-neptune-950"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

    </div>
            {/* Mobile Menu */}
            <nav
                className={`${menuOpen ? 'block' : 'hidden' } lg:hidden bg-neptune-50/80 w-full`}>
                <ul className="flex flex-col items-center text-neptune-950 text-base gap-4 p-4">
                {
                    navLinks.map((link) => (
                        <li
                        key={link.id}
                        className={`
                            ${pathName === link.href ? 'border-b-4 border-neptune-500': 'border-b-4 border-transparent hover:border-neptune-500'}`}>
                        <Link href={link.href}>{link.title}</Link>
                        </li>
                    ))
                }
                </ul>
            </nav>
    </header> 
  )
}

export default Header