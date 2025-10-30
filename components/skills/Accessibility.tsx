import {motion} from 'framer-motion'
import {AiFillThunderbolt} from 'react-icons/ai'
const Accessibility = () => {
  return (
    <motion.article>
        <header className=''>
             <h3 className="flex gap-1 font-medium text-xl font-titleFont">Web Accessibility Guide lines</h3>
             <p className="text-sm mt-1 font-medium text-textDark">Making websites accessible by people with disabilities</p>
        </header>
        <p className="">I have mastered a lot in terms of building Accessible Rich Internet Applications through the understanding of the following concerpts </p>
        <ul className='mt-4 list-none'>
         <li className="flex gap-4 py-4 items-center text-textDark">
               <span><AiFillThunderbolt className="text-textGreen" /></span>
              <p>Mastered essentials of web accessibility to cater for people with disabilities</p>
            </li>

             <li className=' flex gap-4 py-4 text-textDark'>
             <span><AiFillThunderbolt className="text-textGreen" /></span> 
              <p>Form Accessibility: Associating labels with inputs, using fieldset and legend for grouped inputs, and providing clear error messages and instructions.</p>
            </li>

             <li className='flex gap-4 py-4 text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
              <p>ARIA (Accessible Rich Internet Applications) Attributes: Applying ARIA roles and properties (like aria-label, aria-hidden, role="button") to enhance accessibility in dynamic components.</p>
            </li>
             
             <li className='flex gap-4 py-4 text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
              <p>Responsive & Scalable Design: Building layouts that adapt to different devices and zoom levels without breaking usability or readability.</p>
            </li>

            <li className='flex gap-4 py-4 text-textDark'>
                <span><AiFillThunderbolt className="text-textGreen" /></span>
              <p>Testing with Assistive Technologies: Using tools like screen readers (e.g., NVDA, VoiceOver) and accessibility checkers (like Lighthouse or axe DevTools) to evaluate and improve accessibility.</p>
            </li>
        </ul>
    </motion.article>
  )
}

export default Accessibility