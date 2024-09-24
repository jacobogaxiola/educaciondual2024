import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";

function App() {
//Estado
const { valorInput, onChange,onSubmit, gifs, estaCargando } = useSearchGifs()

  //JSX
  return (
    <div className="App">

    <Buscador
    valorInput={valorInput}
    onChange={onChange}
    onSubmit={onSubmit}
    />
{
  estaCargando ?
  (<h2>Cargando...</h2>) :
  (
      <GridGifs
        gifs={gifs}
      />
  )
}
    </div>
  )
}

export default App;
