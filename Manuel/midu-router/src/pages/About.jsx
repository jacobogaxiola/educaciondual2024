import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: '¡Hola! Me llamo Miguel Ángel y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'Hi! My name is Miguel Ángel and I am creating a clone of React Router.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://ih1.redbubble.net/image.1884152177.8586/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' alt='Foto de midudev' />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
