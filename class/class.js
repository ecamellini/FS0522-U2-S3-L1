
class Car {

  constructor(marca, modello, prezzo) {
    // Il constructor è LA funzione che viene chiamata in automatico
    // quando viene creata un'istanza di questa classe Car.
    // Quando chiamo la classe con la parola chiave new.
    // Esempio: new Car()

    // Il costruttore ha la possibilità di decidere come sarà fatta
    // l'istanza dell'oggetto Car che stiamo creando.
    // Per assegnare dei valori alle proprietà dell'oggetto che sto creando uso this.
    // Cioè dico, questa istanza di Car avrà queste caratteristiche.

    // Questa (this) istanza di Car avrà una proprietà con chiave/nome "brand",
    // il cui valore sarà il contenuto dell parametro chiamato marca
    this.brand = marca
    this.model = modello
    this.price = prezzo
  }

  // Questo è un metodo della classe Car, cioè una funzione
  // che però sta all'interno della classe, di tutte le sue istanze.
  createCarDiv() {
    let carDiv = document.createElement('div') // Create element crea un tag, ma non lo attacca al document da nessuna parte
    carDiv.classList.add('car') // Questa classe è una classe CSS, non c'entra nulla con la classe Car di JS
    carDiv.innerText = this.brand
    return carDiv
  }
}

let car1 = new Car("Toyota", "Yaris", 5000)
let car2 = new Car("Mercedes", "Classe A", 30000)

console.log(car1)
console.log(car2)

// Avrò, per esempio, una lista di cars che leggo dal database.
// Non so ancora come...
// let cars = leggiCarsDaDatabase()

// Però alla fine, in JS, mi troverò con in mano un array di oggetti
// di tipo car
let cars = [
  new Car("Toyota", "Yaris", 5000),
  new Car("Mercedes", "Classe A", 5000),
  new Car("Toyota", "Yaris", 5000),
  new Car("Fiat", "Punto", 5000)
]


for (let car of cars) { // Per ogni oggetto car nel mio array di cars
  let carsList = document.getElementById("cars-list")
  let carDiv = car.createCarDiv() // Car è anche capace di creare un suo div
  carsList.appendChild(carDiv)
}
