import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts";

//custom hook (use adelante)
export function useCatFact() {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    //#Recuperar la cita al cargar la pagina
    useEffect(refreshFact, [])
    return {fact, refreshFact }
}