import {motion} from 'framer-motion'
import {AiFillThunderbolt} from 'react-icons/ai'

const Seo = () => {
  return (
    <motion.section className='text-white'>
       <h3 className='font-bold text-2xl'>Search Engine Optimization</h3>
       <p className='text-md font-bold pb-4'>Building Websites that rank higher on search results</p>
         <p className=''>Thorough continuous learning i have managed to grasp a lot of skill and strategic thinking to make my websites and web App rank higher on search results and these include the following:</p> 
         <ul>
           <li className=' flex gap-2 py-4 items-center'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4 className='text-xl font-bold py-2'>Keyword Research & Analysis</h4>
              <p>Utilizing tools like Google Keyword Planner, SEMrush, and Ahrefs to identify high-traffic keywords relevant to the target audience and industry.</p>
              <p>Using tools like Google Keyword Planner, Ahrefs, or SEMrush to identify high-value keywords.</p>
              <p>Using tools like Google PageSpeed Insights and GTmetrix to improve website loading times.
</p>
              </div>
            </li>
            <li className="flex gap-2 py-4 items-center">
              <span className=""><AiFillThunderbolt className='text-textGreen'/></span>
              <div>
                <h4 className='text-xl font-bold py-2'>Content Strategy</h4>
                <p>
                  Content Creation & Optimization: Writing SEO-friendly blog posts, landing pages, and product descriptions.
                  - Content Gap Analysis: Identifying missing topics and opportunities for new content.
                  - Link Building Strategies: Outreach, guest posting, and backlink analysis.
                  - Local SEO: Optimizing Google Business Profile, local citations, and geo-targeted keywords.

                </p>
              </div>
            </li>
            <li className="flex gap-2 py-4 items-center">
              <span className=""><AiFillThunderbolt className='text-textGreen'/></span>
              <div>
                <h4 className='text-xl font-bold py-2'> Testing & Adaptation</h4>
                <p>
                  - A/B Testing for SEO: Experimenting with titles, meta descriptions, and content formats.
                  - Algorithm Update Adaptation: Staying current with Google’s changes and adjusting strategies accordingly.

                </p>
              </div>
            </li>
            
          </ul>      
    </motion.section>
  )
}

export default Seo