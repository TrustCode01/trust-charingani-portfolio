import React from 'react'
import { FiGithub,FiLinkedin,FiYoutube,FiFacebook,FiInstagram } from 'react-icons/fi'

const LeftSide = () => {
  return (
    <nav className='w-full h-full flex flex-col items-center justify-end gap-4'>
      <h3 className="text-xs w-1 h-1 overflow-hidden text-bodyColor">Social media navigation</h3>
      <ul className='flex flex-col items-center gap-4 p-4 justify-center'>
        <li  className='w-6 h-6  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiGithub className='hover:text-textGreen '/></a></li>
        <li className='w-6 h-6  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiLinkedin className='hover:text-textGreen '/></a></li>
        <li className='w-6 h-6  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiYoutube className='hover:text-textGreen '/></a></li>
        <li className='w-6 h-6  bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiFacebook className='hover:text-textGreen'/></a></li>
        <li className='w-6 h-6 bg-hoverColor rounded-full inline-flex items-center justify-center hover:textGreen cursor-pointer hover:translate-y-2 transition-all duration-300'><a href="" target="_blank"><FiInstagram className='hover:text-textGreen'/></a></li>
        <li className='w-1 h-20 bg-textDark'></li>
      </ul>
    </nav>
  )
}

export default LeftSide