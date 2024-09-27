import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { title} from '../components/title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-800 min-h-screen h-full text-white-100 flex intens-center justify-center py-20 px-5'>
        <div className='container flex flex-col max-w-xl'>
          <title/>
        </div>
      </div>
    </>
  )
}

export default App
