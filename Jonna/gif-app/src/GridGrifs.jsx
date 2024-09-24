import { Gif } from "./Gif"

export const GridGrifs = ({ gifs }) => {
    return (
        <div className="grid-grifs">
            {
                gifs.map((gif,index)=>(
                    <Gif key={gif.id} gif={gif} index={index} />
                ))
            }
        </div>
    )
}