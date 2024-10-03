import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';

function App() {
  return (
    <Router>
      <div>
        <h1>Integrantes del Equipo</h1>
        <Navbar />

        <Routes>
          <Route path="/Edilene" element={<Edilene />} />
          <Route path="/Janersy" element={<Janersy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


