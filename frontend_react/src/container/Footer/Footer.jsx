import React from 'react'
import './Footer.scss'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div id='Footer'>
        <span className='logo'>JM.</span>
        <div className='socials'>
          <AiOutlineInstagram />
          <AiOutlineLinkedin />
          <AiOutlineGithub />
          <AiOutlineMail />
        </div>
        <span className='link'>TLDR</span>
    </div>
  )
}

export default Footer