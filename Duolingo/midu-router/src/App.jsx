import './App.css'
import HomePage from './pages/Home.jsx'
import NosotrosPage from './pages/Nosotros.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import GaelPage from './pages/Estudiantes/Gael.jsx'
import KevinPage from './pages/Estudiantes/Kevin.jsx'
import EdilenePage from './pages/Estudiantes/Edilene.jsx'
import JanersyPage from './pages/Estudiantes/Janersy.jsx'
import ManuelPage from './pages/Estudiantes/Manuel.jsx'
import JonnaPage from './pages/Estudiantes/Jonna.jsx'
import EdgarPage from './pages/Estudiantes/Edgar.jsx'
import Rafael from './pages/Estudiantes/Rafael.jsx'
import { Router } from './router.jsx'
import RafaelPage from './pages/Estudiantes/Rafael.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/Edgar',
    Component: EdgarPage
  },
  {
    path: '/Jonna',
    Component: JonnaPage
  },
  {
    path: '/Gael',
    Component: GaelPage
  },
  {
    path: '/Kevin',
    Component: KevinPage
  },
  {
    path: '/Edilene',
    Component: EdilenePage
  },
  {
    path: '/Janersy',
    Component: JanersyPage
  },
  {
    path: '/Manuel',
    Component: ManuelPage
  },
  {
    path: '/Rafael',
    Component: RafaelPage
  },
  {
    path: '/Nosotros',
    Component: NosotrosPage
  },
  {
    path: '/search/:query',
    Component: SearchPage 
  }
]

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App