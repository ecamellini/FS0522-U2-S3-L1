class Rettangolo {

  constructor(base, altezza) {
    if (typeof base === 'number' && typeof altezza === 'number') {
      // base instanceof Number è true solo se base è una istanza di Number, cioè è di tipo number
      this.base = base
      this.altezza = altezza
    } else {
      console.error("Errore: devi passare entrambi i parametri.")
    }
  }

  perimetro() {
    return (this.base + this.altezza) * 2
  }

  area() {
    return this.base * this.altezza
  }
}






let rettagolo1 = new Rettangolo(10, 2)

console.log(rettagolo1.perimetro())
console.log(rettagolo1.area())

// Questa riga di codice stamperà errorre
let rettagoloError = new Rettangolo("Pippo", "Pluto")
