/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log('questo è l' + 'ordine originale: ' + pets)

for (let i = 0; i < pets.length; i++) {
  const element = pets[i]
  console.log(element)
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const pets1 = ['dog', 'cat', 'hamster', 'redfish']
let order = pets1.sort()
console.log(order)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const pets3 = ['dog', 'cat', 'hamster', 'redfish']
let reverseOrder = pets3.reverse()
console.log(reverseOrder)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets4 = ['dog', 'cat', 'hamster', 'redfish']
let firstIndex = pets4.shift()
pets4.push(firstIndex)
console.log(pets4)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach((car) => {
  car.licensePlate = 'dd426ta'
})
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newObj = {
  brand: 'Audi',
  model: 'A6',
  color: 'black',
  trims: ['life', 'style', 'r-line'],
}
cars.push(newObj)
console.log(cars)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice(2, 1)
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[cars[i].trims.length - 1])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log('Fizz')
  } else {
    console.log('Buzz')
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0
while (i < numericArray.length) {
  const value = numericArray[i] //valore aggiornato
  console.log(value)
  if (value === 32) {
    break
  }
  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const newcharactersArray = []
for (let i = 0; i < charactersArray.length; i++) {
  const element = charactersArray[i]

  switch (element) {
    case 'a':
      newcharactersArray.push(1)
      break
    case 'b':
      newcharactersArray.push(2)
      break
    case 'c':
      newcharactersArray.push(3)
      break
    case 'd':
      newcharactersArray.push(4)
      break
    case 'e':
      newcharactersArray.push(5)
      break
    case 'f':
      newcharactersArray.push(6)
      break
    case 'g':
      newcharactersArray.push(7)
      break
    case 'h':
      newcharactersArray.push(8)
      break
    case 'i':
      newcharactersArray.push(9)
      break
    case 'l':
      newcharactersArray.push(10)
      break
    case 'm':
      newcharactersArray.push(11)
      break
    case 'n':
      newcharactersArray.push(12)
      break
    case 'o':
      newcharactersArray.push(13)
      break
    case 'p':
      newcharactersArray.push(14)
      break
    case 'q':
      newcharactersArray.push(15)
      break
    case 'r':
      newcharactersArray.push(16)
      break
    case 's':
      newcharactersArray.push(17)
      break
    case 't':
      newcharactersArray.push(18)
      break
    case 'u':
      newcharactersArray.push(19)
      break
    case 'v':
      newcharactersArray.push(20)
    case 'z':
      newcharactersArray.push(21)

    default:
      break
  }
}

console.log(newcharactersArray)
