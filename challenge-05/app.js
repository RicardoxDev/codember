let mecenas = [
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez",
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez",
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez"
]

const mecenasWar = (mecens) => {
  let arrMecens = []
  for(let i = 0; i < mecens.length; i++) {
    if(i % 2 === 0) arrMecens.push([mecens[i], i])
    if(i === mecens.length - 1 && i % 2 === 0) arrMecens.shift()
  }
  
  if(arrMecens.length > 1)  {
    arrMecens = mecenasWar(arrMecens)
  }
  
  arrMecens = arrMecens.flat()
  arrMecens.length = 2
  return arrMecens
}

mecenasWar(mecenas)
