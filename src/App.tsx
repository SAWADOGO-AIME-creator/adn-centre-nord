import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App