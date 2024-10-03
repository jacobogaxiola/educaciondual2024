import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';
import Jonna  from './pages/Jonna';

function App() {
  return (
    <Router>
      <div>
        <h1>Integrantes del Equipo</h1>
        <Navbar />

        <Routes>
          <Route path="/Edilene" element={<Edilene />} />
          <Route path="/Janersy" element={<Janersy />} />
          <Route path="/Jonna" element={<Jonna />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


