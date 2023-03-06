import { React, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import './Experience.scss'

const Experience = ({ title, subtitle, content, images}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();    
  
  useEffect(() => {
      if (inView) {
          animation.start({
              x: 0,
              transition: {
                  type: 'spring', duration: 2, bounce: 0.1
              }
          });
      }
    }, [inView, animation])

  return (
    <div ref={ref}>
      <motion.div id='Experience' animate = {animation} initial = {{ x: '-100vw' }}>
        <div className='timeline-dot'>
          <div className='timeline-dot__inner'></div>
        </div>
        <div className='d-flex inner-container'>
          <div className='header'>
            <span className='title'>{title} | </span><span className='subtitle'>{subtitle}</span>
          </div>
          <span className='content'>{content}</span>
          <div className='d-flex image-container'>
            {images?.map((image) => (
              <img className='image' src={image} alt='portfolio' key={image}></img>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience