import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Header from './components/Header.tsx'
import Blogs from './pages/Blogs.tsx'
import Tutorials from './pages/Tutorials.tsx'
import Units from './pages/Units.tsx'
import Resources from './pages/Resources.tsx'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/units" element={<Units />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      
    </div>
  )
}

export default App