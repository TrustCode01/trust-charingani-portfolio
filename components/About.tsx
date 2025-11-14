import SectionTitle from '@/components/SectionTitle'
import {AiFillThunderbolt} from 'react-icons/ai'
import Image from 'next/image';
import  {profileImg} from '@/public/assets/index'
interface props{
   title: string;
   titleNo: string;
}
const About = () => {
  return (
    <section 
    id='about'
     className='w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 flex flex-col gap-6 sm:gap-8'>
        <SectionTitle titleNo ='01' title='About Me'/>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
            <div className='w-full lg:w-2/3 text-sm sm:text-base text-textDark font-medium flex flex-col gap-4 sm:gap-6'>
            <p>
            I'm Trust, a junior web developer based in Harare, Zimbabwe, passionate about building meaningful digital experiences for individuals,businesses and organisations. I specialize in crafting responsive, accessible interfaces using HTML, CSS, and Tailwind CSS, and bring ideas to life with React.js and Next.js. Whether it's a school enrollment platform or a church mission app, I thrive on creating reliable, user-centered solutions that empower others. With a methodical approach and a heart for impact, I'm always learning, building, and collaborating—one component at a time.</p>
            <p>Here are some of the technologies that i have been working with recently:</p>
            <ul className="w-full max-w-[450px] font-titleFont grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4 text-sm">
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>HTML</span></li>
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>CSS</span></li>
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>Tailwindcss</span></li>
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>Bootstrap</span></li>
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>Javascript</span></li>
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>React Js</span></li>
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>Next Js</span></li>
              <li className='flex items-center gap-2'><AiFillThunderbolt className='text-textGreen w-4 h-4'/><span>React Native</span></li>
            </ul>
            </div>
            <div className='w-full lg:w-1/3 h-[300px] sm:h-[350px] md:h-[400px] relative group mx-auto lg:mx-0 max-w-[400px] lg:max-w-none'>
              <div className='absolute w-full h-full -left-3 sm:-left-4 -top-3 sm:-top-4 rounded-lg'>
                  <div className='w-full h-full relative z-20 flex pl-3 sm:pl-4 lg:pl-0'>
                    <Image className='rounded-lg h-full w-full object-cover' src={profileImg} alt="profileImg"/>
                     <div className="hidden lg:inline-block absolute w-full h-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                    <div className="hidden lg:inline-flex absolute top-4 left-4 z-[-3] w-full h-full border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About