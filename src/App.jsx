import { useEffect, useState } from "react"
import './App.css'

const CAT_ENPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/cat/`;
export function App(){
    const [fact, setFact] = useState()
    const [image, setImage] = useState()
    const [factError, setFactError] = useState()

    //efectos en una responsabilidad
    //#Recuperar la cita al cargar la pagina
    useEffect(() => {
        // Con await
        // async function getRandomFact(){
        //     const res = await fetch(CAT_ENPOINT_RANDOM_FACT)
        //     const data = await res.json()
        //     setFact(data.fact)
        // }

        // getRandomFact()

        // Sin await
        fetch(CAT_ENPOINT_RANDOM_FACT)
            .then(res =>{ 
                if(!res.ok){
                    setFactError('No se ha podido recuperar la cita')
                }
                return res.json()
            })
            .then(data => {
                const { fact } = data
                setFact(fact)                    
            })  
    }, [])
    // sin nada siempre y hace loop infinito
    // [] es para que solo se ejecute una vez
    // [fat] solo cuando se cambia(actualiza) la variable

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

    return (
        <main>
            <h1>App de Gatitos</h1>
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image extracted from ${fact}`}/>}
        </main>
    )
}