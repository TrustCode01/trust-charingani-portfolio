import Image from 'next/image'
import React from 'react'
import {logo} from '../public/assets'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full shadow-navbarShadow h-20 lg:[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
        <h2 className="text-xs w-1 h-1 p-0 overflow-hidden text-bodyColor">Main navigation menu</h2>
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
            <div>
                <Image src={logo} className='w-14' alt="logo"/>
            </div>
            <div>
                <ul className='flex text-[13px] gap-7'>
                    <li className=''>
                        
                        <Link href="#home"
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            Home
                            </Link>
                    </li>
                    <li className=''>
                        
                        <Link href="#about"
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">01</span>
                            About
                            </Link>
                    </li>
                    <li className=''>
                        
                        <Link href="#projects"
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">02</span>
                            Projects
                            </Link>
                    </li>
                    <li className=''>
                        
                        <Link href="#experience"
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">03</span>
                            Experience
                            </Link>
                    </li>
                    <li className=''>
                        
                        <Link href="#contact"
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">04</span>
                            Contact
                            </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar