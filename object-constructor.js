
let oggettoCar = {
  marca: "Toyota",
  modello: "Yaris",
  prezzo: 3000,
  anno: 2005
} // Oggetto che ha le quattro proprietà che ci interessano per rappresentare un'auto.

console.log(oggettoCar)


/* Vogliamo rappresentare delle auto nel nostro programma.
Ogni auto ha una marca, un modello, un prezzo, un anno di immatricolazione.
*/
function Car(marca, modello, prezzo, anno) {
  // Dal momento che uso this, la funzione sta creando un oggetto.
  // Non serve il return perché la andrò a chiamare con "new".
  this.marca = marca
  this.modello = modello
  this.prezzo = prezzo
  this.anno = anno
}

let catalogo = [ // Array di auto, che rappresenta il mio catalogo
  new Car("Toyota", "Yaris", 3000, 2005), // Questa è una istanza di Car
  new Car("Fiat", "Punto", 10000, 2020), // Questa è una istanza di Car
  new Car("Ford", "Mustang", 30000, 2015), // Questa è una istanza di Car
  new Car("Mercedes-Benz", "Classe A", 30000)
]

// Tutte le volte che ho una classe di oggetti/un costruttore di oggetti
// di un certo tipo, è come se fosse uno stampino per creare tanti oggetti
// con la stessa forma.
// Ogni oggetto creato con lo stampino, cioè con il costruttore,
// si dice che è una istanza. Quando uso la parola chiave new,
// cioè quando creo un nuovo oggetto appartenente al tipo/alla classe Car,
// si dice che sto istanziando un nuovo oggetto Car.
console.log(catalogo)

console.log("\nPosso anche aggiungere proprietà a una istanza di Car:")
let jeep = new Car("Jeep", "Wrangler", 20000, 2018)
console.log(jeep)

jeep.colore = "Nero"
console.log(jeep)
