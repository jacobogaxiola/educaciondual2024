import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'


function App() {
const [currentPath, setCurrentPath] = useState(window.location.pathname)  

useEffect(() => {
const onLocationChange = () => {
  setCurrentPath(window.location.pathname)
}
 
window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
window.addEventListener(EVENTS.POPSTATE, onLocationChange);

return () => {
  window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
  window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
}
}, [])

  return (
<main>
{currentPath === '/' && < HomePage/>}
{currentPath === '/about' && < AboutPage/>}
</main>
  )
}

export default App