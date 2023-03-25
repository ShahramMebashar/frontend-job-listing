import { useState } from 'react'
import Header from './components/Header'
import JobList from './components/JobList'
function App() {

  return (
    <div className="app">
      <Header/>
      <JobList/>
    </div>
  )
}

export default App
