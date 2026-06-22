import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Header from './pages/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </div>
  )
}

export default App