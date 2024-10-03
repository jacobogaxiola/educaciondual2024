import React from 'react';


function Nosotros() {
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

export default Nosotros;
