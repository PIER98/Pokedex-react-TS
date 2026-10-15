import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import type { Pokemon } from './Types/Pokemon';
import { Grid } from './components/Grid';

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
      const results: { name: string; url: string }[] = result.results;
      const data: Pokemon[] = await Promise.all(
        results.map(async ({ url }) => {
          const detailResponse = await fetch(url);
          if (!detailResponse.ok) {
            throw new Error(`Response status ${detailResponse.status}`);
          }
          return detailResponse.json() as Promise<Pokemon>;
        })
      );
      setPokemonList(data);
    } catch (error) {
      console.error(error)
    }
  }
  getPokemonData()
}, [apiURL])

  return (
    <>
     <Header/>
     <h2 style={{textAlign: "center"}}> Pokemon List</h2>
     <Grid pokemonList={pokemonList} />
    </>
  )
}

export default App
