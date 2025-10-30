import {motion} from 'framer-motion'
import {AiFillThunderbolt} from 'react-icons/ai'

const UI = () => {
  return (
    <motion.section>
        <header>
            <h3>User Interface and User Experience Design</h3>
            <p>Building enganging user interfaces that responsive</p>
        </header>
        <p className="">I design clean, responsive, and accessible user interfaces that prioritize clarity and usability. My process blends user research, intuitive workflows, and multi-language support to create inclusive experiences. With tools like Tailwind CSS and Figma, I prototype and iterate based on feedback to deliver designs that are both functional and engaging. I am mastering a lot in terms of building responsive, accessible and user enganging interfaces for the web through understanding the following concerpts:</p>
        <ul className='mt-4 list-none'>
         <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4> User-Centered Design Thinking</h4>
              <p> Empathizing with users, defining their needs, ideating solutions, prototyping designs, and testing for usability to create intuitive interfaces. </p>
              <p>Gained skills in conducting user research, creating personas, and mapping user journeys to inform design decisions.</p>
              </div>
            </li>
            <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4> Responsive and Accessible Interfaces</h4>
              <p>Expertise in crafting clean, responsive layouts using HTML, CSS, and Tailwind CSS that adapt seamlessly across devices..</p>
              <p>Committed to accessibility standards (WCAG), ensuring inclusive experiences for users with diverse needs.</p>
              </div>
            </li>
             <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4> Intuitive Interaction and Workflow Design</h4>
              <p>Experienced in designing intuitive navigation flows, micro-interactions, and feedback mechanisms that enhance usability.</p>
              <p>Able to simplify complex tasks into clear, actionable steps for users, improving task completion rates and satisfaction.</p>
              </div>
            </li>
            <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4> Multi-Language and Localization Support</h4>
              <p>Skilled in designing interfaces that support internationalization and localization, enabling global reach and cultural relevance.</p>
              <p>Familiar with layout adjustments, language toggles, and content adaptation for multilingual audiences.</p>
              </div>
            </li>
            <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4>Prototyping and Usability Testing</h4>
              <p>	Proficient in using tools like Figma, Adobe XD, or Framer to create interactive prototypes for stakeholder feedback and user testing.</p>
              <p>Capable of analyzing usability test results to iterate designs and improve user experience metrics.</p>
              </div>
            </li>
            </ul>
    </motion.section>
  )
}

export default UI