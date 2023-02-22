import React from 'react'
import './Portfolio.scss'
import { Item } from '../../components'

const Portfolio = () => {
  return (
    <div id='Portfolio'>
        <div className='items-container'>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </div>
    </div>
  )
}

export default Portfolio