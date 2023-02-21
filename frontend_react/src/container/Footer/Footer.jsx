import React from 'react'
import './Footer.scss'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div id='Footer'>
        <Link to='/'><span className='logo'>JM.</span></Link>
        <div className='socials'>
          <Link to='https://www.instagram.com/unjeremy/' target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></Link>
          <Link to='https://www.linkedin.com/in/jeremy-martinez-757423161/' target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></Link>
          <Link to='https://github.com/Jaydotcom27' target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></Link>
          <a href="mailto:jaymartinezsw@gmail.com"><AiOutlineMail /></a>
        </div>
        <Link to='tldr'><span className='link'>TLDR</span></Link>
    </div>
  )
}

export default Footer