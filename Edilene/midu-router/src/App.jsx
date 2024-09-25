import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts.js'
import HomePage from './pages/home.jsx'
import AboutPage from './pages/about.jsx'


function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange )

      return () =>{
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange )
    }
  },  [])

  return(
     <main>
      {currentPath === '/' && <HomePage /> }
      {currentPath === '/about' && <AboutPage />}
     </main>
  )
}

export default App
