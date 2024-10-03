import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';
import Gael  from './pages/Gael';
=======
import Nosotros  from './pages/Nosotros';
>>>>>>> adb503470d603d316fb4025743e88b23ee818106
import Manuel  from './pages/Manuel';

function App() {
  return (
    <Router>
      <div>
        <h1>Educacion Dual</h1>
        <Navbar />

        <Routes>
          <Route path="/Edilene" element={<Edilene />} />
          <Route path="/Janersy" element={<Janersy />} />
<<<<<<< HEAD
          <Route path="/Gael" element={<Gael />} />
          <Route path="/Manuel" element={<Manuel />} />
=======
>>>>>>> adb503470d603d316fb4025743e88b23ee818106
        </Routes>
      </div>
    </Router>
  );
}

export default App;
