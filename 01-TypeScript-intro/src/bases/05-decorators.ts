class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`No Quierooo!!!`);
    }

    speak() {
        console.log(`No Quierooo Hablar!!!`);
    }
}


const MyDecorator = ()=>{
    return (target:Function )=> {
        return NewPokemon
    }
}

@MyDecorator()
export class Pokemon{
    
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

}

export const charmander = new Pokemon(1,'Charmander')

charmander.scream()

charmander.speak()