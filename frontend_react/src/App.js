import React from 'react'
import { Header, Footer } from './container'
import { CTA, Statistics, About } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='body'>
        <CTA />
        <Statistics />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App