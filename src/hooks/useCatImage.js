import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/`;
//custom hook (use adelante)
// no puede estar en un if, whiele, siempre debe ser llamada en el cuerpo del componente
export function useCatImage({fact}){
    const [image, setImage] = useState()
    // #Para recuperar la iamgen cada vez que tenemos una cita nueva
    useEffect(()=>{
        if(!fact){
            return
        }
        // 3 primeras palabras
        const firstThreeWords = fact.split(' ',3).join(' ') 
        console.log(firstThreeWords)
        fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const { _id } = response
                setImage(`${CAT_PREFIX_IMAGE_URL}/${_id}/says/${firstThreeWords}?size=50&color=white`)
        })
    },[fact])
    return {image}
}