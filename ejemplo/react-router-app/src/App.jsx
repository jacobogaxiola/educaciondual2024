import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';
<<<<<<< HEAD
<<<<<<< HEAD
import Edgar from "./pages/Edgar";
=======
import Jonna  from './pages/Jonna';
>>>>>>> d10e755bf9c0b2ca0dbcb623635066a074386690
=======
import Kevin  from './pages/Kevin';
import Gael  from './pages/Gael';
import Nosotros  from './pages/Nosotros';
import Manuel  from './pages/Manuel';
>>>>>>> 98a50bdf0792c7033382ea4712b79ed57c8dc954

function App() {
  return (
    <Router>
      <div>
        <h1>Educacion Dual</h1>
        <Navbar />

        <Routes>
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Edilene" element={<Edilene />} />
          <Route path="/Janersy" element={<Janersy />} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/Edgar" element={<Edgar />} />
=======
          <Route path="/Kevin" element={<Kevin />} />
=======
<<<<<<< HEAD
          <Route path="/Jonna" element={<Jonna />} />
>>>>>>> d10e755bf9c0b2ca0dbcb623635066a074386690
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          <Route path="/kevin" element={<Kevin />} />
          
>>>>>>> 45431e49fe0dae47e80da226b5bfd793e68a52a9
>>>>>>> 0498125ace474e749aa28bcf879512f9737fdef2
>>>>>>> 19d50a8397ffca82862fd8282e6160565c50529a
          <Route path="/Gael" element={<Gael />} />
          <Route path="/Manuel" element={<Manuel />} />
>>>>>>> 98a50bdf0792c7033382ea4712b79ed57c8dc954
        </Routes>
      </div>
    </Router>
  );
}

export default App;
