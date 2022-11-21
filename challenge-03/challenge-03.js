const fs = require("fs")
const colors = fs.readFileSync('./colors.txt');
const colorsArr = eval(colors.toString());

function colorsCount(colors) {
 let maxColor = ""
 let maxCount = 1
 
 let colorAnterior = ""
 let colorAnteriorP = colors[0]
 let colorCount = 0
 colors.forEach( (colorActual) => {
   if(colorActual !== colorAnteriorP || colorActual === colorAnterior) {
     colorCount = 1
   }
   
   colorActual === colorAnterior ? colorCount = 1 : colorCount++
   colorAnteriorP = colorAnterior
   colorAnterior = colorActual
   if (colorCount >= maxCount) {
     maxColor = colorAnterior
     maxCount = colorCount
   }
 })
  
  return {
    maxColor,
    maxCount
  }
}

console.log(colorsCount(['red', 'blue', 'red', 'blue', 'green'])); // -> 4, blue
console.log(colorsCount(['green', 'red', 'blue', 'gray'])); // -> 2, gray
console.log(colorsCount(['blue', 'blue', 'blue', 'blue'])); // -> 1, blue
console.log(colorsCount(['red', 'green', 'red', 'green', 'red', 'green'])); // -> 6, green
console.log(colorsCount(['blue', 'red', 'blue', 'red', 'gray'])); // -> 4, red
console.log(colorsCount(['red', 'red', 'blue', 'red', 'red', 'red', 'green'])); // -> 3, red
console.log(colorsCount(['red', 'blue', 'red', 'green', 'red', 'green',
'red', 'green'])); // -> 6, green

console.log(colorsCount(colorsArr))
