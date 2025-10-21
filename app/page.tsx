"use client"
import About from "@/components/About"
import Center from "@/components/Center"
import LeftSide from "@/components/LeftSide"
import Navbar from "@/components/Navbar"
import RightSide from "@/components/RightSide"
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
    <Navbar/>
    <main>
      <header className="w-full relative h-[88vh] mdl:grid grid-cols-12 items-center  gap-20">
        <motion.div
        initial={{opacity:0,}}
        animate={{opacity:1}}
        transition={{delay:1.5, stiffness:300}}
         className="hidden mdl:inline-flex col-span-2 w-32 h-full fixed left-0 top-0"><LeftSide/></motion.div>
        <div className="w-full h-[88vh] mx-auto col-span-8 col-start-2 col-end-10 p-4 "><Center/></div>
        <motion.div
        initial={{opacity:0,}}
        animate={{opacity:1}}
        transition={{delay:1.5, stiffness:300}}
         className="hidden mdl:inline-flex col-span-2  w-32 h-full fixed right-0 top-0"><RightSide/></motion.div>
      </header>
      <About/>
    </main>
    </div>
  )
}
