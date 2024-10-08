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
import RafaelPage from './pages/Estudiantes/Rafael.jsx'
import { Router } from './router.jsx'
import Contacto from './Contacto.jsx'

const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Rafael',
    Component: RafaelPage
  },
  {
    path: '/Edgar',
    element: <EdgarPage />,
  },
  {
    path: '/Jonna',
    element: <JonnaPage />,
  },
  {
    path: '/Gael',
    element: <GaelPage />,
  },
  {
    path: '/Kevin',
    element: <KevinPage />,
  },
  {
    path: '/Edilene',
    element: <EdilenePage />,
  },
  {
    path: '/Janersy',
    element: <JanersyPage />,
  },
  {
    path: '/Manuel',
    element: <ManuelPage />,
  },
  {
    path: '/Nosotros',
    element: <NosotrosPage />,
  },
  {
    path: '/search/:query',
    element: <SearchPage />,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} />
      <Contacto />
    </main>
  )
}

export default App;
