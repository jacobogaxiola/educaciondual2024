import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'AQUI TOIIII 🐾 ',
    button: 'DONDEEEE',
    description: 'Aqui toi🐾 .'
  },
  en: {
    title: 'About us  ',
    button: 'Go to home page',
    description: '💐Hi! My name is Cha Eun Woo .'
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
        <img src='https://www.upsocl.com/wp-content/uploads/2013/03/tumblr_mw0u9wmKXk1qcsenco1_400-1.gif' alt='holiiii soy Cha Eun Woo 🌸 ' />
        <p>{i18n.description}</p>
      </div>
      <Link target='_blank' to='/'>{i18n.button}</Link>
    </>
  )
}
