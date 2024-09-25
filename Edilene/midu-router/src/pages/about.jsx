import { navigate } from '../App.jsx'

export default function AboutPage () { 
    return (
      <>
       <h1>About</h1>
       <div>
        <img src='https://media-qro1-2.cdn.whatsapp.net/v/t61.24694-24/456617758_1048678
        996856899_2813556701513730068_n.jpg?ccb=11-4&oh=01_Q5AaIHoX-tkxTq3eg7rq5
        XT0pqqdeno188VpFG8DVzaN3qhi&oe=67019571&_nc_sid=5e03e0&_nc_cat=110' alt='Foto' />
       <p>Hola me llamo Edi y estoy creando un clon de React Router</p>
       </div>
       <button onClick={() => navigate('/')}>Ir a la home</button>
      </>
    )
  }