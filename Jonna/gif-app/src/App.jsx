import { Buscador } from "./Buscador";
import { GridGrifs } from "./GridGrifs";
import { useSearchGifs } from "./useSearchGifs";

function App() {

  const { valorInput, onChange, onSubmit, gifs, estaCargando } = useSearchGifs()


  return (
    <div className="App">
      
      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}     
      />

      {
        estaCargando ? 
          (<h2>Cargando......</h2>) :
          (
            <GridGrifs 
              gifs={gifs}
            />
          )

      }
      
    </div>
  )
}

export default App