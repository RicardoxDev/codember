const message = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"

const ASCII_A = 32
const ASCII_Z = 122

let characters = []
let letraActual = ""
let messageSuccess = []

for (letra of message) {
  if(letra === " ") {
    characters.push(letra)
    continue
  }
  
  letraActual += letra
  if (letraActual >= ASCII_A && letraActual <= ASCII_Z) {
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

// Versión esteroides

const mensaje = "82105999711410011168101118"

const decodificarASCII = (mensaje) => {
  const ASCII_A = 65
	const ASCII_z = 122
  
  let ASCII_Chars = []
  let currentChar = ""
  for(letter of mensaje) {
    currentChar += letter
    
    if((currentChar >= ASCII_A && currentChar <= ASCII_z) || currentChar == " ") {
      ASCII_Chars.push(currentChar)
      currentChar = ""
    }
  }
  return ASCII_Chars
    .map( letter => letter === " " 
         ? " " 
         : String.fromCharCode(letter)).join("")
}

decodificarASCII(mensaje)

