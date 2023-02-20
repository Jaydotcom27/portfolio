import React from 'react'
import './Experience.scss'

const Experience = ({ title, subtitle, content, images}) => {
  return (
    <div id='Experience'>
      <span className='timeline-dot'></span>
      <div className='d-flex inner-container'>
        <div className='header'>
          <span className='title'>{title} | </span><span className='subtitle'>{subtitle}</span>
        </div>
        <span className='content'>{content}</span>
        <div className='d-flex image-container'>
          {images.map((image) => (
            <div className='image'>{image}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience