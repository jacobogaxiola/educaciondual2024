import { navigate } from '../App.jsx'

export default function HomePage () {
    return (
      <>
       <h1>Home</h1>
       <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
       <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
      </>
    )
  }