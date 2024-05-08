import './App.css'
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import { Otro } from './components/Otro';

export function App(){
    const {fact, refreshFact} = useCatFact()
    const {image} = useCatImage({fact})
    

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image extracted from ${fact}`}/>}

            <Otro/>
        </main>
    )
}