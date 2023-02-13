import React from 'react'
import './Header.scss'

export const Header = () => {
  return (
    <div id='header'>
      <div className='d-flex header-inner'>
        <span className='logo'>JM.</span>
        <div className='menu'> 
          <span className='link'>HOME</span>
          <span className='link'>PORTFOLIO</span>
        </div>
        <span className='link'>TLDR</span>
      </div>
    </div>
  )
}

export default Header
