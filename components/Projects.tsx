import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'
import {gradient} from '@/public/assets/index'

const Projects = () => {
  return (
    <section id='projects' className='w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 flex flex-col gap-6 sm:gap-8'>
         <SectionTitle titleNo ='03' title='Some of my projects'/>

         <article className="w-full flex flex-col items-center justify-center gap-28 mt-18">
          <div className='flex flex-col xl:flex-row gap-6'>
            <a className='w-full xl:w-1/2 h-auto group' href="#" target='_blank'>
            <div className="">
              <Image src={gradient} className="w-full h-full object-contain" alt='project image'/>
            </div>
            </a>
             <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
             <p className="font-titleFont text-textGreen text-sm tracking-wide">featured project</p> 
             <h3 className="">Gradient Generator App</h3>
             <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
             An app to help developers get gradients effortlessly for their day to day design. <br />
              <span className="text-textGreen">Technologies used</span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React Js</li>
                <li>Javascript</li>
                <li>Tailwindcss</li>
                <li>Netlify Deployment</li>
              </ul>
             
          </div>
          </div>
         
         </article>

          <article className="w-full flex flex-col items-center justify-center gap-28 mt-18">
          <div className='flex flex-col xl:flex-row gap-6'>
            <a className='w-full xl:w-1/2 h-auto group' href="#" target='_blank'>
            <div className="">
              <Image src={gradient} className="w-full h-full object-contain" alt='project image'/>
            </div>
            </a>
             <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
             <p className="font-titleFont text-textGreen text-sm tracking-wide">featured project</p> 
             <h3 className="">Gradient Generator App</h3>
             <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
             An app to help developers get gradients effortlessly for their day to day design. <br />
              <span className="text-textGreen">Technologies used</span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React Js</li>
                <li>Javascript</li>
                <li>Tailwindcss</li>
                <li>Netlify Deployment</li>
              </ul>
             
          </div>
          </div>
         
         </article>
          <article className="w-full flex flex-col items-center justify-center gap-28 mt-18">
          <div className='flex flex-col xl:flex-row gap-6'>
            <a className='w-full xl:w-1/2 h-auto group' href="#" target='_blank'>
            <div className="">
              <Image src={gradient} className="w-full h-full object-contain" alt='project image'/>
            </div>
            </a>
             <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
             <p className="font-titleFont text-textGreen text-sm tracking-wide">featured project</p> 
             <h3 className="">Gradient Generator App</h3>
             <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
             An app to help developers get gradients effortlessly for their day to day design. <br />
              <span className="text-textGreen">Technologies used</span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React Js</li>
                <li>Javascript</li>
                <li>Tailwindcss</li>
                <li>Netlify Deployment</li>
              </ul>
             
          </div>
          </div>
         
         </article>
          <article className="w-full flex flex-col items-center justify-center gap-28 mt-18">
          <div className='flex flex-col xl:flex-row gap-6'>
            <a className='w-full xl:w-1/2 h-auto group' href="#" target='_blank'>
            <div className="">
              <Image src={gradient} className="w-full h-full object-contain" alt='project image'/>
            </div>
            </a>
             <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
             <p className="font-titleFont text-textGreen text-sm tracking-wide">featured project</p> 
             <h3 className="">Gradient Generator App</h3>
             <p className="bg-[#112240] text-left text-sm md:text-base p-2 md:p-6 rounded-md">
             An app to help developers get gradients effortlessly for their day to day design. <br />
              <span className="text-textGreen">Technologies used</span>
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>React Js</li>
                <li>Javascript</li>
                <li>Tailwindcss</li>
                <li>Netlify Deployment</li>
              </ul>
             
          </div>
          </div>
         
         </article>
         <article className="">
          <div></div>
          <div></div>
         </article>
         <article className="">
          <div></div>
          <div></div>
         </article>
         <article className="">
          <div></div>
          <div></div>
         </article>
    </section>
  )
}

export default Projects