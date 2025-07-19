import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Certification from './Components/Certifications/Certifications'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'




function App() {
  return (
    <div>

      <h1>My Portfolio</h1>
      
      <React.Fragment>
        <Routes>
          <Route path="/" element={Home}/>
          <Route path="/about" element={About} />
          <Route path="/projects" element={Projects} />
          <Route path="/certifications" element={Certification} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </React.Fragment>
      
    </div>
  )
}

export default App
