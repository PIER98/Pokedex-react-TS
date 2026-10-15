import { useState, useEffect } from 'react'
import { Header } from './components/Header'

function App() {
  const apiURL = import.meta.env.VITE_API_URL
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  //Make the API CALL
 useEffect(() => {
  async function getPokemonData() {
    try {
      const response = await fetch(apiURL)
      if (!response.ok) {
        throw new Error(`Response status ${response.status}`)
      }
      const result = await response.json()
      const data: [Pokemon] = result.results;
      setPokemonList(data);
    } catch (error) {
      console.error(error)
    }
  }
  getPokemonData()
}, [])

  return (
    <>
     <Header/>
     <h2 style={{textAlign: "center"}}> Pokemon List</h2>
    </>
  )
}

export default App
