
import type { Pokemon } from '../Types/Pokemon'
import { Card } from './Card'
import './grid.css'


export const Grid = ({pokemonList} : {pokemonList: Pokemon[]}) => {
  return (
    <>
    <ul className='grid'>
      {pokemonList.map(pokemon => 
        <Card key={pokemon.id} pokemon={pokemon}/>
      )}
    </ul>
    </>
  )
}
