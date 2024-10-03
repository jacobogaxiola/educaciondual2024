import { Link } from '../Link.jsx'

export default function HomePage () {
    return (
      <>
        <h1>Educación Dual</h1>
        <p>Somos la ELITE de CECyTE</p>
      <img className="imagenN" src="../data/Nosotros.jpg" alt="Nosotros" />
        <p></p>
        <Link to='/Nosotros' >Ir a Estudiantes </Link>
      </>
    )
  }