import React from 'react'
import { FaPaintBrush } from 'react-icons/fa'
import './Item.scss'

const Item = () => {
  return (
    <div id='Item'>
      <div className='item__inner'>
        <div className='item__header'>
          <div className='item__header-pair'>
            <span className='item__title'>Portfolio Item Title</span>
            <span className='item__pill'>
              <span className='pill__title'>Creative</span>
              <FaPaintBrush />
            </span>
          </div>
          <span className='item__subtitle'>Portfolio Item SubTitle</span>
        </div>
        <div className='item__body'>
          <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, blanditiis sapiente similique officia nam nemo sit facere voluptatum aliquam repellendus iste nostrum consequuntur explicabo, officiis assumenda placeat, culpa esse fugit! </span>
        </div>
        <div className='item__skills'>
          
        </div>
      </div>
    </div>
  )
}

export default Item