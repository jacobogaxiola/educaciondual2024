import { navigate } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src='https://pbs.twimg.com/media/CEP0387UUAMETB5.jpg'
          alt="Foto de sorento"/>.
        <p>¡Hola! me llamo jonna y estoy creando un clon  de React Router.</p>
        </div>
        <button onClick={() => navigate('/')}>ir a la home</button>
      </>
    )
  }