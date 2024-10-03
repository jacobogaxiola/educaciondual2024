import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Edilene  from './pages/Edilene';
import Janersy  from './pages/Janersy';
<<<<<<< HEAD
import Jonna  from './pages/Jonna';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import Edgar from "./pages/Edgar";
=======
import Jonna  from './pages/Jonna';
>>>>>>> d10e755bf9c0b2ca0dbcb623635066a074386690
=======
>>>>>>> 3ade7af5cec76c86ec653d7a98fc4c7555059b80
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
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Edilene" element={<Edilene />} />
          <Route path="/Janersy" element={<Janersy />} />
<<<<<<< HEAD
          <Route path="/Jonna" element={<Jonna />} />
          <Route path="/kevin" element={<Kevin />} />
=======
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
>>>>>>> 3ade7af5cec76c86ec653d7a98fc4c7555059b80
          <Route path="/Gael" element={<Gael />} />
          <Route path="/Manuel" element={<Manuel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;