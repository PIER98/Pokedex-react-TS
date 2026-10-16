import type { Pokemon } from '../Types/Pokemon'
import  {PokemonTypeColor} from "../Types/PokemonTypeColor"
import "./card.css"

export const Card = ({pokemon}: {pokemon: Pokemon}) => {
const mapBackgroundColor = (typeName: string): string => {
  for (let i = 0; i < PokemonTypeColor.length; i++) {
    if (PokemonTypeColor[i][0] === typeName) {
      return PokemonTypeColor[i][1]
    }
  }
  return '#A8A878'
}

const mapTypes = (pokemon: Pokemon): string => {
  return pokemon.types.map((t) => t.type.name).join('/')
}

  return (
    <div className='card' style={ {backgroundColor :mapBackgroundColor(pokemon.types[0].type.name)} }>
      <div className='card-box'>
          {pokemon.sprites?.front_default && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        <h1>{pokemon.name}</h1>
        <label>{mapTypes(pokemon)}</label>
      </div>
    </div>
  )
}
