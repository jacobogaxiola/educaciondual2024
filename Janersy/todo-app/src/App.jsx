import { useState } from 'react'
import { Title } from './components/Title/Title'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-800 min-h-screen h-full text-gray-200 flex items-center justify-center py-20 px-5">
        <div className="container flex flex-col max-w-xl">
          <Title  />
        </div>

      </div>
 
    </>
  )
}

export default App
