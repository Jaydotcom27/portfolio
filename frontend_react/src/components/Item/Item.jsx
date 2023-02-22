import { React } from 'react'
import { FaPaintBrush } from 'react-icons/fa'
import './Item.scss'

const Item = ({title, subtitle, type, content, skills}) => {
  return (
    <div id='Item'>
      <div className='item__inner'>
        <div className='item__header'>
          <div className='item__header-pair'>
            <span className='item__title'>{title}</span>
            <span className='item__pill'>
              <span className='pill__title'>{type}</span>
              <FaPaintBrush />
            </span>
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
    </div>
  )
}

export default Item