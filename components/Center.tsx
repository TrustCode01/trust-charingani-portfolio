"use client"
import {motion} from 'framer-motion'

const Center = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
        <motion.p 
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.6}}
        className="text-base sm:text-lg font-titleFont tracking-wide text-textGreen">Hello, my name is</motion.p>
        <motion.h1
        initial={{y:10,opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-titleFont font-semibold flex flex-col'
        >Trust Charingani <span className='text-textDark text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-3 md:mt-4'>I provide tech solutions to your problems</span></motion.h1>
        <motion.p
         initial={{y:10,opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:1}}
         className="text-sm sm:text-base max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[650px] font-bodyFont text-textDark font-medium">
         I'm a passionate software developer who thrives on solving real-world problems through clean, efficient code. I specialize in building modern, responsive web applications using tools like React, Next.js, and Tailwind CSS. Whether it's streamlining school enrollments or empowering mission-driven communities, I love turning ideas into impactful digital solutions that make a difference.{""} <br />
          <a href="" target='_blank'>
            <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group mt-4'>Learn More
                 <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
            </span>
            </a>
        </motion.p>
        
        <motion.button
         initial={{x:20,opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.5, delay:1.2}}
         className='mt-6 sm:mt-8 w-full sm:w-52 h-12 sm:h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check out my Projects</motion.button>

    </section>
  )
}

export default Center