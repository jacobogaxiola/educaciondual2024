import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EdgarPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
    return (
      <div>
        <h2>Nombre: Edgar</h2>
        <img className="imagenE" src="../data/edg.jpg" alt="Edgar" />
        <p>Edad: 17</p>
        <p>Género: Masculino</p>
        <h3>Personaje Favorito:</h3>
        <img
          src="https://render.fineartamerica.com/images/rendered/medium/framed-print/images/artworkimages/medium/1/spiderman-paul-meijering.jpg?imgWI=36&imgHI=36&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
          alt="Personaje Favorito"
        />
        <p>Carrera: Programación</p>
        <p>Hobbie: Tocar Piano, dibujar</p>
        <p>Número de Teléfono: 697-113-1564</p>
        <p>Deporte Favorito: Basketball</p>
        <p>Color Favorito: Azul</p>
  
        <h3>Canción Favorita:</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xIQrC4CerB8"
          title="C418"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
              <p>
      {/* Botón para volver al inicio */}
      <button onClick={handleGoHome}>Volver al inicio</button>
      </p>
      </div>
    );
  }
  
