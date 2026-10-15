import type { Pokemon } from '../Types/Pokemon'
import "./card.css"

export const Card = ({pokemon}: {pokemon: Pokemon}) => {
  return (
    <div>
        {pokemon.sprites?.front_default && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        <h1>{pokemon.name}</h1>
        <label>{pokemon.types[0].type.name}</label>
    </div>
  )
}
