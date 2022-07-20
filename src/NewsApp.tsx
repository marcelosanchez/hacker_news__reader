import React, { useState } from 'react';
import { Header } from './components/base/Header'
import { LibraryFilter } from './components/news/LibraryFilter'
import { MainFilter } from './components/news/MainFilter'
import { FavList } from './components/news/FavList'

import './styles/base/main.css'

const ALL_TAB_VALUE = "all";
const FABS_TAB_VALUE = "fabs"

function App() {

  const tabs = [
    {label : "All", value: ALL_TAB_VALUE },
    {label : "My Faves", value: FABS_TAB_VALUE },
  ]

  const [selectedTab, setSelectedTab] = useState(ALL_TAB_VALUE)

  return (
      <div className="App">
        <Header/>
        <MainFilter tabs={tabs} setTab={setSelectedTab}/>
        { (selectedTab == ALL_TAB_VALUE ?
          <LibraryFilter/>
          : <FavList/>
        )}
        
        
      </div>
  )
}

export default App
