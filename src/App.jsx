import { useState } from 'react'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main'
import Work from './Components/Work'
import Projects from './Components/Projects'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
function App() {
  return (
   <div>
    <Sidenav/>
    <Main/>
    <Work/>
    <Projects/>
    <Skill/>
    <Contact/>
   </div>
        
  )
}

export default App
