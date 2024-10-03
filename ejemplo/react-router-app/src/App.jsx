import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Nosotros  from './pages/Nosotros';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
