const charOfNum = (num, idx) => {
  return Number(`${num}`[idx])
}

const recuperatePassword = () => {
  const minRange = 11098
  const maxRange = 98123
  
  let passwords = []
  let count = 0
  for(let i = minRange; i < maxRange; i++) {
    if(!(charOfNum(i, 4) >= charOfNum(i, 3))) continue
    if(!(charOfNum(i, 3) >= charOfNum(i, 2))) continue
    if(!(charOfNum(i, 2) >= charOfNum(i, 1))) continue
    if(!(charOfNum(i, 1) >= charOfNum(i, 0))) continue
    
    String(i).split("").forEach(num => { if(num == 5) count++ })
    
    if(count >= 2) passwords.push(i)
    count = 0
}

  return `submit ${passwords.length}-${passwords[55]}`
}

recuperatePassword()
