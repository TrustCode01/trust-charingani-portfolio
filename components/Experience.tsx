import { useState } from "react"
import SectionTitle from "@/components/SectionTitle"
import Accessibility from "./skills/Accessibility"
import Seo from "./skills/Seo"
import UserInterface from './skills/UserInterface'
import Github from "./skills/Github"
import GenAI from "./skills/GenAI"
import Standards from "./skills/Standards"

const Experience = () => {
  const [accessibility,setAccessibility] = useState(false)
  const [seo,setSeo] = useState(false)
  const [uiux,setUiux] = useState(false)
  const [github,setGithub] = useState(false)
  const [genai,setGenAI] = useState(false)
  const [standards,setStandards] = useState(false)

  const handleAccessibility =()=>{
     setAccessibility(true)
     setSeo(false)
     setUiux(false)
     setGithub(false)
     setGenAI(false)
     setStandards(false)
  }
   const handleSeo =()=>{
    setAccessibility(false)
     setSeo(true)
     setUiux(false)
     setGithub(false)
     setGenAI(false)
     setStandards(false)
    
  }
   const handleUiUx =()=>{
    setAccessibility(false)
     setSeo(false)
     setUiux(true)
     setGithub(false)
     setGenAI(false)
     setStandards(false)
    
  }
   const handleGithub =()=>{
    setAccessibility(false)
     setSeo(false)
     setUiux(false)
     setGithub(true)
     setGenAI(false)
     setStandards(false)
    
  }
   const handleGenAI =()=>{
    setAccessibility(false)
     setSeo(false)
     setUiux(false)
     setGithub(false)
     setGenAI(true)
     setStandards(false)
  }
   const handlestandards =()=>{
    setAccessibility(false)
     setSeo(false)
     setUiux(false)
     setGithub(false)
     setGenAI(false)
     setStandards(true)
    
  }
  return (
    <section id="experience" className="max-w-containerSmall mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-10 flex flex-col gap-6 sm:gap-8">
        <SectionTitle titleNo="02" title="Skills that i have learnt"/>
        <div className="w-full mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row gap-8 md:gap-16">
          <ul className="flex flex-row md:flex-col flex-wrap justify-center md:justify-start md:w-40 lg:w-48 gap-2 md:gap-0">
          <li onClick={handleAccessibility} className={`${accessibility?'bg-textGreen text-black font-bold' : 'bg-transparent  text-textLight'} border-b-2 md:border-b-0  border-textGreen  hover:border-l-2 text-sm cursor-pointer duration-300 px-4 md:px-6 py-2 md:py-3 font-medium whitespace-nowrap`}>Web Accessibility</li>
             <li onClick={handleSeo} className={`${seo ?'bg-textGreen text-black font-bold' : 'bg-transparent text-textLight'} border-b-2 md:border-b-0   border-textGreen  hover:border-l-2 text-sm cursor-pointer duration-300 px-4 md:px-6 py-2 md:py-3 font-medium`}>SEO</li>
              <li onClick={handleUiUx} className={` ${uiux ? 'bg-textGreen text-black font-bold': 'bg-transparent text-textLight'} border-b-2 md:border-b-0  border-textGreen hover:border-l-2 text-sm cursor-pointer duration-300 px-4 md:px-6 py-2 md:py-3 font-medium`}>UI/UX Design</li>
               <li onClick={handleGithub} className={` ${github ? 'bg-textGreen text-black font-bold': 'bg-transparent text-textLight' } border-b-2 md:border-b-0  border-textGreen hover:border-l-2 text-sm cursor-pointer duration-300 px-4 md:px-6 py-2 md:py-3 font-medium`}>Git/Github</li>
                <li onClick={handleGenAI} className={` ${genai ? 'bg-textGreen text-black font-bold':'bg-transparent text-textLight'} border-b-2 md:border-b-0  border-textGreen  hover:border-l-2 text-sm cursor-pointer duration-300 px-4 md:px-6 py-2 md:py-3 font-medium`}>Generative AI</li>
                 <li onClick={handlestandards} className={`${standards ? 'bg-textGreen text-black font-bold': 'bg-transparent text-textLight'} border-b-2 md:border-b-0  border-textGreen  hover:border-l-2 text-sm cursor-pointer duration-300 px-4 md:px-6 py-2 md:py-3 font-medium`}>W3C Best Practices</li>
          </ul>
          {accessibility && <Accessibility/>}
          {seo && <Seo/>} 
          {uiux && <UserInterface/>}
          {github && <Github/>}
          {genai && <GenAI/>}
          {standards && <Standards/>}
        </div>
    </section>
  )
}

export default Experience