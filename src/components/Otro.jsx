import { useCatImage } from "../hooks/useCatImage"

export function Otro() {
    
    const {image} = useCatImage({fact: 'Random fact'}) 

    return (
        <>
            {image && <img src={image} alt=""/>}
        </>
    )
}