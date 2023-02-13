import React from 'react'
import './CTA.scss'

function CTA() {
  return (
    <div id='CTA'>
        <span className='span'>This website contains</span>
        <span className='data'>1,263 kilobytes of data</span>
        <span className='span span-limiter'>in the form of dynamically fetched text which only goal is to tell <span className='highlight'>you</span> about <span className='highlight'>me</span>.</span>
    </div>
  )
}

export default CTA