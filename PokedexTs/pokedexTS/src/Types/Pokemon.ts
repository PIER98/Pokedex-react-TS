export interface Pokemon {
   id: number,
   name: string,
   height: number,
   is_default: true,
   order: number,
   weight: number,
   abilities: Ability,
}

interface Ability {
    name: string
}

