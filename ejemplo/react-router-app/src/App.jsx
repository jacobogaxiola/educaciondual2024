import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';
import Jonna  from './pages/Jonna';
import Kevin  from './pages/Kevin';
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
<<<<<<< HEAD
          <Route path="/Jonna" element={<Jonna />} />
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          <Route path="/kevin" element={<Kevin />} />
          
>>>>>>> 45431e49fe0dae47e80da226b5bfd793e68a52a9
>>>>>>> 0498125ace474e749aa28bcf879512f9737fdef2
          <Route path="/Gael" element={<Gael />} />
          <Route path="/Manuel" element={<Manuel />} />
>>>>>>> 98a50bdf0792c7033382ea4712b79ed57c8dc954
        </Routes>
      </div>
    </Router>
  );
}

export default App;
