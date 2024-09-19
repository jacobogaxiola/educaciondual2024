import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants ={
    inicial: {
        opacity: 0, scale: 0
    },
    animate: ({ index })=> ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: index*.1
    }
 } ) 
}
    
export const Gif = ({ gif, index  }) =>{

    const ref = useRef(null)
    const estaVisto = useInView(ref, {
        once: true
    })

    return (
        <motion.img
            ref={ref}
            initial="inicial"
            animate={estaVisto ? "animate" : ""}
            variants={variants}
            custom={{ index }}
            whileHover={{
                scale: 1.1,
            }}
            className="gif"
            src={gif.images.original.url}
            alt={gif.title}
        />
    )
}