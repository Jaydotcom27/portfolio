import React from 'react';
import { Header, Footer } from './container';
import { Home, TLDR } from './pages';
import { Route, Routes } from 'react-router-dom'

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <div>
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/tldr' element={ <TLDR /> } />
          </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
