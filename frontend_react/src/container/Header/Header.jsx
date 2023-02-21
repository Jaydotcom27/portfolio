import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div id='header'>
      <div className='d-flex header-inner'>
        <Link to='/'><span className='logo'>JM.</span></Link>
        <div className='menu'> 
          <Link to='/'><span className='link'>HOME</span></Link>
          <Link to='/portfolio'><span className='link'>PORTFOLIO</span></Link>
        </div>
        <Link to='/tldr'><span className='link'>TLDR</span></Link>
      </div>
    </div>
  )
}

export default Header
