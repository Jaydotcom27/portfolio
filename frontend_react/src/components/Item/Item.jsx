import { React } from 'react'
import { Pill } from '../../components'
import './Item.scss'

const Item = ({ title, subtitle, type, content, skills, url }) => {
  return (
    <div id='Item'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className='item__inner'>
          <div className='item__header'>
            <div className='item__header-pair'>
              <span className='item__title'>{title}</span>
              <Pill type = {type} />
            </div>
            <span className='item__subtitle'>{subtitle}</span>
          </div>
          <div className='item__body'>
            <span>{content}</span>
          </div>
          <div className='item__skills'>
            {skills.map((skill) => (
              <div>
                <div>{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}

export default Item