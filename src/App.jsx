import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Exp from './components/Exp'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />  
        <About />
        <Exp />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App