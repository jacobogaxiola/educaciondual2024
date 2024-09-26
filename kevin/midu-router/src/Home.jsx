import { navigate } from "../link.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es un pagina para crear un React-Router desde cero</p>
      <button onClick={() => navigate("/about")}>Ir sobre nosotros</button>
    </>
  );
}