import { Link } from '../components/Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>Esto NO esta bien !!</h1>
        <img src='https://media.tenor.com/Hgi6GaTBr6sAAAAM/kitty-stop.gif' alt='Gif del perro de This is Fine quemándose vivo' />
      </div>
      <Link to='/'>Volver a la Casa</Link>
    </>
  )
}
