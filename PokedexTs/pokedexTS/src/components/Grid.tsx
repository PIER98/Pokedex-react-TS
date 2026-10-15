
import type { Pokemon } from '../Types/Pokemon'
import { Card } from './Card'


export const Grid = ({pokemonList} : {pokemonList: Pokemon[]}) => {
  return (
    <>
    <ul>
      {pokemonList.map(pokemon => 
        <Card key={pokemon.id} pokemon={pokemon}/>
      )}
    </ul>
    </>
  )
}
