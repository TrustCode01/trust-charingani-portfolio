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
     className='max-w-containerSmall mx-auto py-10 lgl:py-12 flex flex-col gap-8'>
        <SectionTitle titleNo ='01' title='About Me'/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'><p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quasi itaque totam id animi deserunt, voluptate omnis mollitia iure fugiat doloremque ipsam vero nobis impedit aliquid sapiente perspiciatis rem aliquam quo eos repellat sunt, voluptas corporis? Architecto necessitatibus fuga dolore maiores amet culpa cum voluptatum, officiis reiciendis debitis mollitia officia vel impedit, saepe sint laborum, molestias temporibus illum. Quos optio molestiae doloribus? Neque earum, accusamus quidem ducimus nisi odio autem repudiandae incidunt praesentium repellendus illo officiis. Quae eos in fugiat officia sequi minus illo ex! Deleniti quasi rem esse consequatur sint ipsam, quae odit dolores deserunt corporis laudantium nulla ipsa.</p>
            <p>Here are some of the technologies that i have been working with recently:</p>
            <ul className="max-w-[450px] font-titleFont grid grid-cols-2 gap-2 text-sm">
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span>HTML</span></li>
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span></span>CSS</li>
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span></span>Tailwindcss</li>
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span></span>Bootstrap</li>
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span></span>Javascript</li>
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span></span>React Js</li>
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span></span>Next Js</li>
              <li className='flex items-center  gap-2'><AiFillThunderbolt className='text-textGreen'/><span></span>React Native</li>
            </ul>
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group'>
              <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                  <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                    <Image className='rounded-lg h-full  object-cover' src={profileImg} alt="profileImg"/>
                     <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                    <div className="hidden lgl:inline-flex absolute top-4 left-4 z-[-3] w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default About