import React, { useState, useEffect } from 'react'
import { Item } from '../../components'
import { BsFilterRight } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { client } from '../../client'
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

const [ items, setItems ] = useState([])

const [ filteredItems, setFilteredItems ] = useState([])

useEffect(() => {
  const query = '*[_type == "items" && !(_id in path("drafts.**"))] | order(type desc)';
  client.fetch(query).then((data) => setItems(data))

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
              key={option.filter}
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
              key = {item._id}
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