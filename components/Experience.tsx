"use client"
import {motion} from 'framer-motion'
import { use, useState } from "react"
import SectionTitle from "@/components/SectionTitle"
import Accessibility from "./skills/Accessibility"
import Seo from "./skills/Seo"
import UserInterface from './skills/UserInterface'
import Github from "./skills/Github"
import GenAI from "./skills/GenAI"
import Standards from "./skills/Standards"
import Sdlc from "./skills/Sdlc"


const Experience = () => {
  const [sdlc,setSdlc] = useState(false)
  const [accessibility,setAccessibility] = useState(true)
  const [seo,setSeo] = useState(false)
  const [uiux,setUiux] = useState(false)
  const [github,setGithub] = useState(false)
  const [genai,setGenAI] = useState(false)
  const [standards,setStandards] = useState(false)

  const handleSdlc =()=>{
     setSdlc(true)
     setAccessibility(false)
     setSeo(false)
     setUiux(false)
     setGithub(false)
     setGenAI(false)
     setStandards(false)
  }

  const handleAccessibility =()=>{
     setSdlc(false)
     setAccessibility(true)
     setSeo(false)
     setUiux(false)
     setGithub(false)
     setGenAI(false)
     setStandards(false)
  }
   const handleSeo =()=>{
   setSdlc(false)
    setAccessibility(false)
     setSeo(true)
     setUiux(false)
     setGithub(false)
     setGenAI(false)
     setStandards(false)
    
  }
   const handleUiUx =()=>{
      setSdlc(false)
    setAccessibility(false)
     setSeo(false)
     setUiux(true)
     setGithub(false)
     setGenAI(false)
     setStandards(false)
    
  }
   const handleGithub =()=>{
      setSdlc(false)
    setAccessibility(false)
     setSeo(false)
     setUiux(false)
     setGithub(true)
     setGenAI(false)
     setStandards(false)
    
  }
   const handleGenAI =()=>{
    setAccessibility(false)
     setSdlc(false)
     setSeo(false)
     setUiux(false)
     setGithub(false)
     setGenAI(true)
     setStandards(false)
  }
   const handlestandards =()=>{
       setSdlc(false)
    setAccessibility(false)
     setSeo(false)
     setUiux(false)
     setGithub(false)
     setGenAI(false)
     setStandards(true)
    
  }
  return (
    <motion.section 
     initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    id="experience" 
    className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col gap-4 sm:gap-6 md:gap-8">
        <SectionTitle titleNo="02" title="Skills that i have learnt"/>
        <div className="w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <ul className="flex flex-col sm:flex-row md:flex-col flex-wrap justify-center md:justify-start md:w-40 lg:w-48 gap-2 md:gap-0 overflow-x-auto sm:overflow-x-visible">
            <li onClick={handleSdlc} className={`${sdlc?'bg-textGreen text-black font-bold' : 'bg-transparent  text-textLight'} border-b-2 md:border-b-0  border-textGreen  hover:border-l-2 text-xs sm:text-sm cursor-pointer duration-300 px-2 sm:px-4 md:px-6 py-2 md:py-3 font-medium`}>SDLC</li>
          <li onClick={handleAccessibility} className={`${accessibility?'bg-textGreen text-black font-bold' : 'bg-transparent  text-textLight'} border-b-2 md:border-b-0  border-textGreen  hover:border-l-2 text-xs sm:text-sm cursor-pointer duration-300 px-2 sm:px-4 md:px-6 py-2 md:py-3 font-medium`}>Web Accessibility</li>
             <li onClick={handleSeo} className={`${seo ?'bg-textGreen text-black font-bold' : 'bg-transparent text-textLight'} border-b-2 md:border-b-0   border-textGreen  hover:border-l-2 text-xs sm:text-sm cursor-pointer duration-300 px-2 sm:px-4 md:px-6 py-2 md:py-3 font-medium`}>SEO</li>
              <li onClick={handleUiUx} className={` ${uiux ? 'bg-textGreen text-black font-bold': 'bg-transparent text-textLight'} border-b-2 md:border-b-0  border-textGreen hover:border-l-2 text-xs sm:text-sm cursor-pointer duration-300 px-2 sm:px-4 md:px-6 py-2 md:py-3 font-medium`}>UI/UX Design</li>
               <li onClick={handleGithub} className={` ${github ? 'bg-textGreen text-black font-bold': 'bg-transparent text-textLight' } border-b-2 md:border-b-0  border-textGreen hover:border-l-2 text-xs sm:text-sm cursor-pointer duration-300 px-2 sm:px-4 md:px-6 py-2 md:py-3 font-medium`}>Git/Github</li>
                <li onClick={handleGenAI} className={` ${genai ? 'bg-textGreen text-black font-bold':'bg-transparent text-textLight'} border-b-2 md:border-b-0  border-textGreen  hover:border-l-2 text-xs sm:text-sm cursor-pointer duration-300 px-2 sm:px-4 md:px-6 py-2 md:py-3 font-medium`}>Generative AI</li>
                 <li onClick={handlestandards} className={`${standards ? 'bg-textGreen text-black font-bold': 'bg-transparent text-textLight'} border-b-2 md:border-b-0  border-textGreen  hover:border-l-2 text-xs sm:text-sm cursor-pointer duration-300 px-2 sm:px-4 md:px-6 py-2 md:py-3 font-medium`}>W3C Best Practices</li>
          </ul>
          {sdlc && <Sdlc/>}
          {accessibility && <Accessibility/>}
          {seo && <Seo/>} 
          {uiux && <UserInterface/>}
          {github && <Github/>}
          {genai && <GenAI/>}
          {standards && <Standards/>}
        </div>
    </motion.section>
  )
}

export default Experience