import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    correo: '',
    numerotel: '',
    empresa: '',
    pais: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        'https://script.google.com/a/macros/cecytesinaloa.edu.mx/s/AKfycbzxKb89aKwvsk8PCwUR4m9IMvrR27WR49P0zKbSph0D0sPgdpgOCaLAvWsMF5v_4hTFUQ/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer HRKU-657a1ea9-6c7f-4934-a661-02904d4185c5'  // Añadir API Key aquí
          },
          body: JSON.stringify(formData),
        }
      );
      
      if (response.ok) {
        const result = await response.json();
        console.log('Respuesta de la API:', result);
        alert('Datos enviados correctamente');
      } else {
        alert('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar los datos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="numerotel"
          value={formData.numerotel}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Empresa:</label>
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>País:</label>
        <input
          type="text"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contacto;

