import './style.css'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
//import { pokemonsito } from './bases/03-clases.ts'
//import { setupCounter } from './counter.ts'
//import { pokemonIds } from './bases/02-objects.ts'
//import { charmander } from './bases/04-injection.ts'
import { charmander } from './bases/06-decorators2'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>hello Vite ${charmander.name}</h1></br>
    <h1>hello Vite ${charmander.id}</h1></br>

  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


//<a href="https://vitejs.dev" target="_blank">
//<img src="${viteLogo}" class="logo" alt="Vite logo" />
//</a>
//<a href="https://www.typescriptlang.org/" target="_blank">
//<img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//</a>
//<h1>Vite + TypeScript</h1>
//<div class="card">
//<button id="counter" type="button"></button>
//</div>
//<p class="read-the-docs">
//Click on the Vite and TypeScript logos to learn more
//</p>