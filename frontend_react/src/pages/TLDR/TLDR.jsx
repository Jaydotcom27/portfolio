import React from 'react'
import { Item } from '../../components'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoIosDocument } from 'react-icons/io'
import './TLDR.scss'

const TLDR = () => {
  return (
    <div id='TLDR'>
      <span className='headliner'>I am currently looking for opportunities as a <span className='highlight'>Data Science Intern</span>. I Bring value through <span className='highlight'>creativity, curiosity, and drive.</span> My CV has all the details but as a <span className='highlight'>TLDR</span>, you can expect me to balance technical knowledge in the <span className='highlight'>Software Engineering and Data Science</span> fields with the creative nature of a <span className='highlight'>Multimedia Specialist and Artist</span> with senior experience in both industries.</span>
      <div className='items-container'>
        <Item
          key = 're'
          url = 'https://drive.google.com/file/d/1wTFAvXowzT-HHEisrOZ9Z5ATKtZoITJA/view?usp=share_link'
          icon={<IoIosDocument className='tldr-icon' />}
        ></Item>
        <Item
          key = 'li'
          url = 'https://www.linkedin.com/in/jeremy-martinez-757423161/'
          icon={<FaLinkedin className='tldr-icon' />}
        ></Item>
        <Item
          key = 'gh'
          url = 'https://github.com/Jaydotcom27'
          icon={<FaGithubSquare className='tldr-icon' />}
        ></Item>
        <Item
          key = 'mail'
          url = 'mailto:jaymartinezsw@gmail.com'
          icon={<MdEmail className='tldr-icon' />}
        ></Item>
      </div>
    </div>
  )
}

export default TLDR