import { useState } from 'react'

export const useSearchGifs = () => {

  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);
  const [estaCargando, setEstaCargando] =useState(false);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };
  const getGifs = async (query) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=TPa4AWUh6a6SLFkFIiWE8wU7Y1Fk0eWi&q=${query}`;
    setEstaCargando(false);
    await new Promise(resolve=>{
      setTimeout(()=>{
         resolve(true)
      },1000)
    })
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  };

  const onSubmit = async (evento) => {
    evento.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };
  return {
    onSubmit,
    onChange,
    valorInput,
    gifs,
    estaCargando

  }
}