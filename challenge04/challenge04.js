let posiblesPasswords = []

for (let i = 11155; i <= 55999; i++) {
  let numberToString = i.toString()
  if (numberToString.includes('55') && 
      numberToString ===  numberToString.split('')
                          .sort()
                          .join('')) posiblesPasswords.push(numberToString)
}

console.log(`${posiblesPasswords.length}-${posiblesPasswords[55]}`);