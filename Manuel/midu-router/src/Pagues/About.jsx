import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: 'juan 👍.'
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'juan jjjnnm.'
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
        <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmamarre-estudios-espanol.fandom.com%2Fes%2Fwiki%2FJuan&psig=AOvVaw05vjvy_3iE_tE5OPN16lxv&ust=1727479565332000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKCKioHh4YgDFQAAAAAdAAAAABAE' alt='juan 👍' />
        <p>{i18n.description}</p>
      </div>
      <Link target='_blank' to='/'>{i18n.button}</Link>
    </>
  )
}