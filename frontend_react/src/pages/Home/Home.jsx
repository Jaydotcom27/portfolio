import React from 'react'
import { CTA, Statistics, About } from '../../components';
import { Timeline } from '../../container';

const Home = () => {
  return (
    <div className='body'>   
      <CTA />
      <Statistics />
      <About />
      <Timeline />
    </div>
  )
}

export default Home