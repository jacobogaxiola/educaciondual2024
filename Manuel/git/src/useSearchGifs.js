import { useState } from 'react'

export const useSearchGifs = () => {
    
        const [valorInput,setValorInput] = useState('');
        const [gifs, setGifs] = useState([]);
        const [estaCargando, setEstaCargando] = useState(false);
        
        
        const onChange = (evento) => {
          const valor = evento.target.value;
          setValorInput(valor);
        }
        const getGifs = async (query) => {
          const url=`https://api.giphy.com/v1/gifs/search?api_key=ZZ4CfPA6SDOudlsUdIIrlkNk0PHu8YEa&q=${query}`;
          setEstaCargando(true);
          const response = await fetch(url);
          const data = await response.json();
          setEstaCargando(false);
          return data.data;
        }
        
        const onSubmit = async (evento) => {
          evento.preventDefault();
          const gifs = await getGifs(valorInput);
          setGifs(gifs);
        } 


        return {
            onSubmit,
            onChange,
            valorInput,
            gifs,
            estaCargando,
        }
}