const posiblePasswords = []

for (let i = 11155; i <= 55999; i++) {
  let numberToString = i.toString()
  if (numberToString.includes('55') && 
      numberToString ===  numberToString.split('')
                          .sort()
                          .join('')) posiblePasswords.push(i)
}

console.log(`${posiblePasswords.length}-${posiblePasswords[55]}`);