import {Gif} from "./Gif"

export const GridGift  = ({ gifs }) =>{
    return(
        <div className="gid-gifs">
             {
                gifs.map((gif, index)=>(
                    <Gif key ={gif.id} gif={gif} index={index}/>
                ))
             }
        </div>
    )
}