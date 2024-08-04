import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon{
    public id:number;
    public name:string;

    get imageUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`
    }
    constructor(id:number, name:string){
        this.id = id
        this.name = name
    }

    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]>{

        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves)
        return data.moves;
    }
}

export const pokemonsito = new Pokemon(1,'Charmander')
console.log(pokemonsito.name)

console.log(await pokemonsito.getMoves())