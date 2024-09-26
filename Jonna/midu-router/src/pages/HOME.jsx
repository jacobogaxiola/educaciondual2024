import { navigate } from "../Link"

export default function HomePage () {
    return (
      <>
        <h1>Home</h1>
        <p>Esta es una pagina de ejemplo paa crear un React Router desde cero</p>
        <button onClick={() => navigate('/about')}>ir sobre nosotros</button>
      </>
    )
  }