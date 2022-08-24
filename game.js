//CLASE POKEMON
class Pokemon {
  constructor(nombre, vida, ataque1, ataque2, poderataque1, poderataque2, img, id) {
    this.nombre = nombre
    this.vida = vida
    this.ataque1 = ataque1
    this.ataque2 = ataque2
    this.poderataque1 = poderataque1
    this.poderataque2 = poderataque2
    this.img = img
    this.id = id
  }
}

class User {
  constructor(username) {
    this.username = username

  }
}



const entrenador = document.getElementById("entrenador") // div del formulario
const idnombre = document.getElementById("idnombre") // formulario
const username = document.getElementById("name_field") // input
const user = new User(username) // nuevo objeto, el parametro es una variable equivalente al nombre del input

const jugadordatos = [] // array datos del usuario

// input name
// function saludoEntrenador() {
// //jugadordatos = JSON.parse(localStorage.getItem('user')) ?? [] // consulta el array

//   if(jugadordatos.lenght == 0) { // el array esta vacio? entonces muestra formulario
//     entrenador.innerHTML = `<form id="idnombre" class="inputname">
//     <label for="name_field">Ingrese nombre del Entrenador</label>
//     <input type="text" id="name_field" class="nes-input" required>
//     <button class="nes-btn is-success" type="submit">Guardar</button>
//   </form>`
//     idnombre.addEventListener('submit', (e) => { //y su evento submit
//       e.preventDefault()
//         user.username = document.getElementById("name_field").value // asigna a la variable del input al objeto
//         localStorage.setItem('user', JSON.stringify(user))
//         jugadordatos.push(user) // push array con el objeto
//         entrenador.innerHTML = "" //limpia el div
//         entrenador.innerHTML = `<p>Hola ${username}!</p>`}) // muestra el saludo
//   } else { // si el array tiene datos
//     username = JSON.parse(localStorage.getItem('user'))
//     entrenador.innerHTML = `<p>Hola ${username}!</p>`
// }}
// saludoEntrenador()

function saludoEntrenador() {
  //jugadordatos = JSON.parse(localStorage.getItem('user')) ?? [] // consulta el array
  
    if(jugadordatos.lenght == 0) { // el array esta vacio? entonces muestra formulario
      // si el array tiene datos
      username = JSON.parse(localStorage.getItem('user'))
      entrenador.innerHTML = `<p>Hola ${username}!</p>`
    } else { 
      
      entrenador.innerHTML = `<form id="idnombre" class="inputname">
      <label for="name_field">Ingrese nombre del Entrenador</label>
      <input type="text" id="name_field" class="nes-input" required>
      <button class="nes-btn is-success" type="submit">Guardar</button>
    </form>`
      idnombre.addEventListener('submit', (e) => { //y su evento submit
        e.preventDefault()
          user.username = document.getElementById("name_field").value // asigna a la variable del input al objeto
          localStorage.setItem('user', JSON.stringify(user))
          jugadordatos.push(user) // push array con el objeto
          entrenador.innerHTML = "" //limpia el div
          entrenador.innerHTML = `<p>Hola ${username}!</p>`}) // muestra el saludo
  }}
  saludoEntrenador()

// ataques y daños

const impactTrueno = 230
const rayo = 300
const lanzallamas = 230
const ascuas = 120
const pistoladeAgua = 210
const burbujas = 150
const latigazo = 200
const latigoCepa = 60

// GENERANDO POKEMONS

const pikachu = new Pokemon("Pikachu", 1350, "impact Trueno", "rayo", impactTrueno, rayo, "Pikachu.png", "pikachuId")
const charmander = new Pokemon("Charmander", 1260, "Lanzallamas", "Ascuas", lanzallamas, ascuas, "Charmander.png", "charmanderId")
const squirtle = new Pokemon("Squirtle", 1250, "Pistola de Agua", "Burbujas", pistoladeAgua, burbujas, "Squirtle.png", "squirtleId")
const bulbasaur = new Pokemon("Bulbasaur", 1210, "Latigazo", "Latigo Cepa", latigazo, latigoCepa, "Bulbasaur.png", "bulbasaurId")

// Array de Pokemons disponibles
const pokebolas = [pikachu, charmander, squirtle, bulbasaur]

//pokebolas[0].poderataque1 



// idnombre.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const username = document.getElementById("name_field").value

//     entrenador.innerHTML = ""
//     const user = new User(username)
//     jugadordatos.push(user)

//     if(localStorage.getItem('user')) { 
//     nombresaved = JSON.parse(localStorage.getItem('user')) 
//   } else {
//        localStorage.setItem('user', JSON.stringify(user))
//  }
//     // localStorage.setItem('user', JSON.stringify(user))
//     // const nombresaved = JSON.parse(localStorage.getItem('user')) 
//     entrenador.innerHTML = `<p>Hola ${username}!</p>`

// })


// cards elección de pokemon
const pokebolasEleccion = document.getElementById('PokebolasEleccion')

pokebolas.forEach(pokebolas => {
  pokebolasEleccion.innerHTML += `
        <div class="nes-container" id="${pokebolas.id}" style="width: 300px; border-radius: 10px; margin: 10px;">
            <div class="card-body"  >
                <h5 class="card-title">${pokebolas.nombre}</h5>
                <p class="card-text">Vida: ${pokebolas.vida}</p>
                <p class="card-text">Ataque 1: ${pokebolas.ataque1}</p>
                <p class="card-text">Ataque 2: ${pokebolas.ataque2}</p>
                <img src="${pokebolas.img}" width="100px" height="auto" style="margin: 15px;"/>
                <br>
                <button type="button" class="nes-btn is-primary"id="button-${pokebolas.id}">Yo te elijo!</button>
           </div> 
        </div>   
        `
})

// jugadores array vacío

const jugador1 = []
const jugadorPC = []

// selección
const buttonpikachu = document.getElementById("button-pikachuId")
const buttoncharmander = document.getElementById("button-charmanderId")
const buttonsquirtle = document.getElementById("button-squirtleId")
const buttonbulbasaur = document.getElementById("button-bulbasaurId")


buttonpikachu.addEventListener("click", () => {
  jugador1.push(pikachu)
})
buttoncharmander.addEventListener("click", () => {
  jugador1.push(charmander)
})
buttonsquirtle.addEventListener("click", () => {
  jugador1.push(squirtle)
})
buttonbulbasaur.addEventListener("click", () => {
  jugador1.push(bulbasaur)
})

//ELECCIÓN DEL PC

function eleccionPC() {
  pcElige = parseInt(Math.floor(Math.random() * pokebolas.length))
  switch (pcElige) {
    case (pcElige = 1):
      jugadorPC.push(pikachu)
      break
    case (pcElige = 2):
      jugadorPC.push(charmander)
      break
    case (pcElige = 3):
      jugadorPC.push(squirtle)
      break
    case (pcElige = 4):
      jugadorPC.push(bulbasaur)
      break
    default:
      eleccionPC()
  }
}
eleccionPC()

const pikachuId = document.getElementById("pikachuId")
const charmanderId = document.getElementById("charmanderId")
const squirtleId = document.getElementById("squirtleId")
const bulbasaurId = document.getElementById("bulbasaurId")

pikachuId.addEventListener("click", () => {
    pokebolasEleccion.innerHTML = `
    <img src="Pokeball.png" class="" width="100px" height="auto"/>
    <p>Pikachu atrapado!</p>`
  })
charmanderId.addEventListener("click", () => {
    pokebolasEleccion.innerHTML = `
    <img src="Pokeball.png" class="" width="100px" height="auto"/>
    <p>Charmander atrapado!</p>`
    })
squirtleId.addEventListener("click", () => {
  pokebolasEleccion.innerHTML = `
  <img src="Pokeball.png" class="" width="100px" height="auto"/>
  <p>Squirtle atrapado!</p>`
})
bulbasaurId.addEventListener("click", () => {
  bulbasaurId.innerHTML = `
  <img src="Pokeball.png" class="" width="100px" height="auto"/>
  <p>Bulbasaur atrapado!</p> `
  
})

// forEach
// `<progress class="nes-progress is-primary" value="${jugador1.tupokebola1.vida}" max="100"></progress>`
