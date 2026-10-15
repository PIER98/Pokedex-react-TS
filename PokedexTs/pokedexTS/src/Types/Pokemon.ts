export interface Pokemon {
   id: number,
   name: string,
   height: number,
   is_default: true,
   order: number,
   weight: number,
   abilities: Ability,
   sprites: Sprites,
   types: Type[]
}

interface Ability {
    name: string
}

interface Sprites {
  front_default: string | null
  front_shiny: string | null
  back_default: string | null
  back_shiny: string | null
}

interface Type {
    type: RawType
}

interface RawType {
    name: string,
    url: string
}
