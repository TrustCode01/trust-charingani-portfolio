import React from 'react'
import ArchaiveCard from './ArchaiveCard'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Archaive = () => {
  const [showMore, setShowMore] = useState(false)
   const handleShowMore =()=>(
      setShowMore(true)
   )
  return (
    <section className='w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 flex flex-col gap-6 sm:gap-8'>
        <h2 className='text-titleFont text-2xl font-bold text-center'>Some noteworthy Projects</h2>
        <p className="text-sm font-titleFont text-center">View the projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 lgl:px-10">
        <ArchaiveCard 
          github='#'
          link="https://www.shippingchampions.com"
          title="Shipping Champions"
          des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
          ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
          <ArchaiveCard 
          github='#'
          link="https://www.shippingchampions.com"
          title="Shipping Champions"
          des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
          ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
          <ArchaiveCard 
          github='#'
          link="https://www.shippingchampions.com"
          title="Shipping Champions"
          des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
          ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
          <ArchaiveCard 
          github='#'
          link="https://www.shippingchampions.com"
          title="Shipping Champions"
          des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
          ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
          <ArchaiveCard 
          github='#'
          link="https://www.shippingchampions.com"
          title="Shipping Champions"
          des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
          ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
          <ArchaiveCard 
          github='#'
          link="https://www.shippingchampions.com"
          title="Shipping Champions"
          des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
          ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
          {
            showMore ?(
              <>
                 <motion.div
                 initial={{opacity:0, y:-50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:0.6,delay:0}}>
                <ArchaiveCard 
                  github='#'
                  link="https://www.shippingchampions.com"
                  title="Shipping Champions"
                  des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
                  ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
                  </motion.div>
                  <motion.div
                  initial={{opacity:0, y:-50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:0.6,delay:0.3}}>
                  <ArchaiveCard 
                  github='#'
                  link="https://www.shippingchampions.com"
                  title="Shipping Champions"
                  des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
                  ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
                  </motion.div>
                  <motion.div
                  initial={{opacity:0, y:-50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:0.6,delay:0.9}}>
                  <ArchaiveCard 
                  github='#'
                  link="https://www.shippingchampions.com"
                  title="Shipping Champions"
                  des="A website for shipping company made with pure HTML 5 CSS3 and JavaScript. It has a clean minimal design and a better ranking." 
                  ListItem = {["HTML 5", "CSS3", "JavaScript" ]}  />
                  </motion.div>

              </>
            ): <>
            </>
          }

          
        </div>
        <div className="mt-12 flex items-center justify-center">
        {showMore?
         (<button onClick={()=> setShowMore(false)} className="w-36 h-12 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-hoverColor duration-300">Show Less</button>):
         ( <button onClick={()=> setShowMore(true)} className="w-36 h-12 rounded-md text-textGreen text-[16px] border border-textGreen hover:bg-hoverColor duration-300">Show More</button>)

        }
       </div>
        
    </section>
  )
}

export default Archaive