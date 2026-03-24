// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from "./components/Header"
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
        <Header />
        <main>
          <Hero/>
          <Portfolio/>
          <Skills/>
          <Timeline/>
          <Blog/>
          <Contact/>
        </main>
        <Footer />
    </div>
  )
}

export default App