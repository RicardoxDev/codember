const users = 
      `us:"pheralb" eme:"idjas@gmail.com" num:"012813804"

us:"pheralb" eme:"idjas@gmail.com" num:"012813804"

us:"pheralb" eme:"idjas@gmail.com" num:"012813804"

us:"pheralb" eme:"idjas@gmail.com" num:"012813804"

us:"pheralb" eme:"idjas@gmail.com" num:"012813804"

us:"pheralb" eme:"idjas@gmail.com" num:"012813804"

us:"pheralb" ee:"idjas@gmail.com" num:"012813804"

us:"pheralb" eme:"idjas@gmail.com" n:"012813804"

us:"pheralb" eme:"idjas@gmail.com"

"pheralb" eme:"idjas@gmail.com" num:"012813804"`

const arrayUsers = users.split("\n")
let arrayValid = []

arrayUsers.forEach( (e) => {
  if(!e.includes("us:")) return
  if(!e.includes("eme:")) return
  if(!e.includes("num:")) return
  
  arrayValid.push(e)
})

console.log(arrayValid)
console.log(arrayValid.length)
console.log(arrayValid[arrayValid.length - 1])
