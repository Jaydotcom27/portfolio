import React, { useState } from 'react'
import { Item } from '../../components'
import { BsFilterRight } from 'react-icons/bs'
import './Portfolio.scss'

const Portfolio = () => {
  const [ activeFilter, setActiveFilter ] = useState('');

  const filterOptions = [
    { filter: 'creative' },
    { filter: 'engineering' },
    { filter: 'data' },
    { filter: 'research' },
  ];

const handleFilterClick = (filter) => {
  setActiveFilter(filter.filter);
  console.log(activeFilter)
};

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
        <span className='filters-container'>
          <BsFilterRight className='filter-active'/>
          <span className='filter-active'>Show me</span>
          { filterOptions.map((option) => (
            <span 
              className={activeFilter === option.filter ? 'filter-active' : 'filter'} 
              onClick={() => handleFilterClick(option)}>{option.filter}</span>
          ))}
          <span className='filter-active'>things</span>
        </span>
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