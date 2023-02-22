import React, { useState } from 'react'
import { Item } from '../../components'
import './Portfolio.scss'

const Portfolio = () => {
  const [ items ] = useState([{
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript']
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript']
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript']
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript']
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript']
  },
])

  return (
    <div id='Portfolio'>
        <div className='items-container'>
          { items.map((item) => (
            <Item
              key = {item.title}
              title = {item.title}
              subtitle = {item.subtitle}
              type = {item.type}
              content = {item.content}
              skills = {item.skills}
            ></Item>
          ))}
        </div>
    </div>
  )
}

export default Portfolio