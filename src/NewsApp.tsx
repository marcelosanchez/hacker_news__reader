import React from 'react';
import { Header } from './components/base/Header'
import { LibraryFilter } from './components/news/LibraryFilter'
import { MainFilter } from './components/news/MainFilter'
import { NewsList } from './components/news/NewsList'

import './styles/base/main.css'


function App() {
  return (
      <div className="App">
        <Header/>
        <MainFilter/>
        <LibraryFilter/>
        
      </div>
  )
}

export default App
