import { Link } from "../../Link";
export default function JonnaPage() {
  return (
    <div>
      <h2>Nombre: Jonna</h2>
      <img className="imagenT" src="../data/jon.jpg" alt="Jonna" />

      <p>Edad: 17</p>
      <p>Género: Masculino</p>

      <h3>Personaje Favorito:</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z-8MNjwJ94G5Xz6xzfueP8fO-Q80DJdGxA&s" alt="Personaje Favorito" />

      <p>Carrera: Programación</p>
      <p>Hobbie: Jugar videojuegos </p>
      <p>Número de Teléfono: 697-729-7858</p>
      <p>Deporte Favorito: volleyball </p>
      <p>Color Favorito: Azul, Rojo y Blanco</p>
      
      <h3>Canción Favorita:</h3>
      <iframe
       width="560"
        height="315"
         src="https://www.youtube.com/embed/2X9ZQEdgjZs"
         title="Yo Fui El Chore"
         frameborder="0"
           allowfullscreen>

           </iframe>
           <p>
           <Link to='/'>Ir a Inicio</Link>
           </p>
    </div>
  );
}