import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div id='About'>
        <span className='header'>Hey, my name is <span className='highlight'>Jeremy Martínez</span></span>
        <span className='about'>
            I’m a software engineer based in New York City with <span className='highlight'>senior management</span> and <span className='highlight'>multimedia specialist</span> skills. I’ve done full-stack development with JavaScript and .NET frameworks. 
            I enjoy answering questions, storytelling and creating in general. Currently pursuing a master’s degree in <span className='highlight'>Data Science</span> with interests in <span className='highlight'>Machine Learning</span>, <span className='highlight'>Computer Vision</span> and <span className='highlight'>Stable Diffusion.</span>.  
        </span>
    </div>
  )
}

export default About