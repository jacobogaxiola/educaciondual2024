
import { Buscador } from "./Buscador";
import { GridGift } from "./GridGift";
import { useSearchGif } from "./useSearchGifs";

function App() {
const {valorInput,onChange,onSubmit,gifs, estaCargando} = useSearchGif()

  return (
    <div className="App">
      
      <Buscador
         valorInput={valorInput}
         onChange={onChange}
         onSubmit={onSubmit}
       />

       {
        estaCargando ? 
        (<h2>Cargando...</h2>):
        ( 
        <GridGift
          gifs={gifs}
        />
        )
       }

     
    </div>

  

  )
}

export default App
