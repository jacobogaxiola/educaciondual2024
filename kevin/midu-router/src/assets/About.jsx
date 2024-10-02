import { navigate } from "../link.jsx";

export default function AboutPage() {
  return (
    <>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J_G1LDa6kN2D3UYjHJ2Up97vKVko55bTsg&s"
          alt="El espiderman epico"
        />
        <h1>About</h1>
        <p>¡Hola!me llamo Spider-man y estoy creando un clon de React-Router</p>
        <button onClick={() => navigate("/")}>Ir a la home</button>
      </div>
    </>
  );
}