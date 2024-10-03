import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';
import Gael  from './pages/Gael';
import Nosotros  from './pages/Nosotros';
import Manuel  from './pages/Manuel';

function App() {
  return (
    <Router>
      <div>
        <h1>Educacion Dual</h1>
        <Navbar />

        <Routes>
          <Route path="/Nosotros" element={<Edilene />} />
          <Route path="/Edilene" element={<Edilene />} />
          <Route path="/Janersy" element={<Janersy />} />
          <Route path="/Gael" element={<Gael />} />
          <Route path="/Manuel" element={<Manuel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
