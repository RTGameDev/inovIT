import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Navigation from './Navigation'
import Home from './assets/pages/Home'
import WhyUs from './assets/pages/WhyUs'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/why_us' element={<WhyUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </>
  )
}
