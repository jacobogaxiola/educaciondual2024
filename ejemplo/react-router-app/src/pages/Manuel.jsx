import React from 'react';


function Janersy() {
  return (
    <div>
      <h2>Nombre: Janersy</h2>
      <img className="imagenJ" src="../data/jan.jpg" alt="Janersy" />

      <p>Edad: 16</p>
      <p>Género: Femenino</p>

      <h3>Personaje Favorito:</h3>
      <img src="https://colombiacheck.s3.us-east-2.amazonaws.com/colcheck/s3fs-public/2020-06/4620-falso-jordi-medico.png?VersionId=unRL0nyaay0Roks3s7.LTH7B6w.rGeBg" alt="Personaje Favorito" />

      <p>Carrera: Programacion</p>
      <p>Hobbie:Cantar,tocar guitarra,ir al gym </p>
      <p>Número de Teléfono: 697-109-4669</p>
      <p>Deporte Favorito: volleyball </p>
      <p>Color Favorito: negro y rojo</p>
      <h3>Canción Favorita:</h3>
      <iframe 
        width="560" 
        height="315" 
        src="https://youtu.be/YQEt5MIJaIQ" 
        title="Sangolotiadito" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default Janersy;
