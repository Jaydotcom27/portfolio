import React, { useState, useEffect } from 'react'
import { Item } from '../../components'
import { BsFilterRight } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
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
  if (filter.filter === activeFilter) {
    clearFilters();
  }
};

const clearFilters = () => {
  setActiveFilter('');
}

const [ items ] = useState([
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript'],
    url: 'https://react-icons.github.io/react-icons'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript'],
    url: 'https://react-icons.github.io/react-icons'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Data',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript'],
    url: 'https://react-icons.github.io/react-icons'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Creative',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript'],
    url: 'https://react-icons.github.io/react-icons'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Research',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript'],
    url: 'https://react-icons.github.io/react-icons'
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    type: 'Engineering',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    skills: ['Adobe XD', 'Blender', 'Research', 'Javascript'],
    url: 'https://react-icons.github.io/react-icons'
  },
])

const [ filteredItems, setFilteredItems ] = useState([])

useEffect(() => {
  setFilteredItems(items);
  if (activeFilter) {
    const filter = activeFilter.toLowerCase();
    const filtered = items.filter(item => item.type.toLowerCase() === filter);
    setFilteredItems(filtered)
  }
}, [activeFilter, items])

  return (
    <div id='Portfolio'>
        <span className='filters-container'>
          <BsFilterRight className='text'/>
          <span className='text'>Show me</span>
          { filterOptions.map((option) => (
            <span 
              className={activeFilter === option.filter ? 'filter-active' : 'filter'} 
              onClick={() => handleFilterClick(option)}>{option.filter}</span>
          ))}
          <span className='text'>things</span>
          { activeFilter &&
            <IoMdClose 
              onClick={() => clearFilters()}
              className='filter delete-filters'
            />
          }
        </span>
        <div className='items-container'>
          { filteredItems.length === 0 &&
            <div id='About'>
              <span className='header'>There is <span className='highlight'>nothing</span> to see here 😔 </span>
              <span className='about'>
                If this category is present on the site regardless of being empty, it means that I'm currently working on <span className='highlight'>amazing projects</span> related to it, expect great stuff soon!
              </span>
            </div>
          }
          { filteredItems.map((item) => (
            <Item
              key = {item.title}
              title = {item.title}
              subtitle = {item.subtitle}
              type = {item.type}
              content = {item.content}
              skills = {item.skills}
              url = {item.url}
              isPortfolioItem={true}
            ></Item>
          ))}
        </div>
    </div>
  )
}

export default Portfolio