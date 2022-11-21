const fs = require("fs")
const message = fs.readFileSync("./encrypted.txt").toString()

const ASCII_min = 32
const ASCII_max = 122

let characters = []
let letraActual = ""
let messageSuccess = []

for (letra of message) {
  if(letra === " ") {
    characters.push(letra)
    continue
  }
  
  letraActual += letra
  if (letraActual >= ASCII_min && letraActual <= ASCII_max) {
    characters.push(letraActual)
    letraActual = ""
  }
}

characters.forEach( letra => {
  letra === " " 
  	? letra = " "
  	: letra = String.fromCharCode(letra)
  
  messageSuccess.push(letra)
})

console.log(messageSuccess.join(""))
