import React from 'react'
import { FaPaintBrush, FaCog, FaDatabase, FaSearch } from 'react-icons/fa'
import './Pill.scss'

const Pill = ({ type }) => {
  return (
    <div id='Pill'>
        { type === 'Creative' && 
            <span className='item__pill creative'>
                <span className='pill__title'>{type}</span>
                <FaPaintBrush />
            </span>
        }
        { type === 'Engineering' && 
            <span className='item__pill engineering'>
                <span className='pill__title'>{type}</span>
                <FaCog />
            </span>
        }
        { type === 'Research' && 
            <span className='item__pill research'>
                <span className='pill__title'>{type}</span>
                <FaSearch />
            </span>
        }       
        { type === 'Data' && 
            <span className='item__pill data'>
                <span className='pill__title'>{type}</span>
                <FaDatabase />
            </span>
        }
    </div>
  )
}

export default Pill