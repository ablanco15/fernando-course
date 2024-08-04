export const pokemonIds = [1,20,30,34,66]

pokemonIds.push(+'1')



interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasur: Pokemon = {
    id:1,
    name: 'Bulbasor'
}

export const charmander: Pokemon ={
    id: 2,
    name: 'Charmander',
    age: 25
}

export const pokemons:Pokemon[] = []

pokemons.push(charmander,bulbasur)