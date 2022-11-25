const fs = require("fs")
const users = fs.readFileSync("./users.txt").toString()
const arrayUsers = users.split("\n\n")

const validateUsers = (users) => {
  let validUsers = []

  users.forEach( (e) => {
    if(!e.includes("usr:")) return
    if(!e.includes("eme:")) return
    if(!e.includes("psw:")) return
    if(!e.includes("age:")) return
    if(!e.includes("loc:")) return
    if(!e.includes("fll:")) return
  
    validUsers.push(e)
  })
  let lastUser = validUsers[validUsers.length - 1]
  let lastUsername = lastUser.slice((lastUser.indexOf("usr:") + 5), lastUser.indexOf(" "))
  
  return `${validUsers.length}@${lastUsername}`
}

validateUsers(arrayUsers)


