import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';
<<<<<<< HEAD
import Gael  from './pages/Gael';
=======
import Manuel  from './pages/Manuel';
>>>>>>> 878d896f574af0941179af27d06a67e88767963b

function App() {
  return (
    <Router>
      <div>
        <h1>Integrantes del Equipo</h1>
        <Navbar />

        <Routes>
          <Route path="/Edilene" element={<Edilene />} />
          <Route path="/Janersy" element={<Janersy />} />
<<<<<<< HEAD
          <Route path="/Gael" element={<Gael />} />
=======
          <Route path="/Manuel" element={<Manuel />} />
>>>>>>> 878d896f574af0941179af27d06a67e88767963b
        </Routes>
      </div>
    </Router>
  );
}

export default App;


