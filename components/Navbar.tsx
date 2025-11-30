'use client'
import Image from 'next/image'
import React from 'react'
import {logo} from '../public/assets'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {FiGithub, FiLinkedin, FiFacebook, FiYoutube} from 'react-icons/fi'
import { transform } from 'next/dist/build/swc'
import { nav } from 'framer-motion/client'
import Github from './skills/Github'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className='w-full shadow-navbarShadow h-20 lg:[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
        <h2 className="text-xs w-1 h-1 p-0 overflow-hidden text-bodyColor">Main navigation menu</h2>
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
            <div>
                <Image src={logo} priority className='w-14' alt="logo"/>
            </div>
            <div className={`hidden mdl:flex items-center justify-between gap-6`}>
                <ul className='mdl:flex  text-[13px] gap-7'>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}  >
                        <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            Home
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay:0.3 }}  >
                        <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">01</span>
                            About
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay:0.3 }}  >
                        <a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">02</span>
                            Skills
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5,delay:0.3 }}  >
                        <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">03</span>
                            Projects
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5,delay:0.3 }}  >
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">04</span>
                            Contact
                        </a>
                    </motion.li>
                </ul>
                <motion.button 
                initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay:0.3 }}  className='px-4 py-2  rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300' >
                   <a href="#resume" target=''>Resume</a> 
                    </motion.button>
            </div>
            <button onClick={()=>setShowMenu(!showMenu)} className="menu w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-4 transition-all ease-in-out duration-300'></span>
            </button>

            {
                showMenu ?(
                <div onClick={()=>setShowMenu(false)} className="w-3/4 h-[80vh] bg-bodyColor absolute top-20 left-0 shadow-xl  ">
                    <ul className='flex flex-col h-2/3  justify-between py-4 items-center  text-[18px] gap-4'>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}  >
                        <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            Home
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay:0.3 }}  >
                        <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}
                        className="flex items-center gap-1 font-lg text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">01</span>
                            About
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay:0.3 }}  >
                        <a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">02</span>
                            Skills
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5,delay:0.3 }}  >
                        <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">03</span>
                            Projects
                        </a>
                    </motion.li>
                    <motion.li className=''
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5,delay:0.3 }}  >
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}
                        className="flex items-center gap-1 font-medium text-textDark cursor-pointer hover:text-textGreen duration-300 nav-link">
                            <span className="text-textGreen">04</span>
                            Contact
                        </a>
                    </motion.li>
                </ul>
                <motion.button 
                initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay:0.3 }}  className='px-4 py-2  w-[50%] mx-[25%] my-6  rounded-md text-textGreen text-[18px] border border-textGreen  hover:bg-hoverColor duration-300' >
                   <a href="/assets/trust_resume.pdf" target='_blank'>Resume</a> 
                    </motion.button>
                 <ul className='flex  items-center gap-4 p-4 justify-center'>
                        <li  className='w-7 h-7  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiGithub className='hover:text-textGreen '/></a></li>
                        <li className='w-6 h-6  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiLinkedin className='hover:text-textGreen '/></a></li>
                        <li className='w-6 h-6  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiYoutube className='hover:text-textGreen '/></a></li>
                        <li className='w-6 h-6  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiFacebook className='hover:text-textGreen'/></a></li>
                      </ul>
                
            </div>

                ):!showMenu
            }
        </div>
    </nav>
  )
}

export default Navbar