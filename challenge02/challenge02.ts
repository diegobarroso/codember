import fetch from 'node-fetch'


const response = await fetch('https://codember.dev/encrypted.txt');
let message = await response.text();

const getASCIICodes =  (message: string): number[] => {
  
  const asciiToChar: number[] = []
  let charToAdd: number, charLength: number

  while (message.length>0) {
    let char = message[0]

    switch (char) {
      case ' ':
        charToAdd = 32
        charLength = 1
        break
      case '9':
        charToAdd = Number(message.substring(0,2))
        if (charToAdd < 97) throw new Error ('Error reading data')
        charLength = 2
        break
      case '1':
        charToAdd = Number(message.substring(0,3))
        if (charToAdd > 122 || charToAdd < 100) throw new Error ('Error reading data')
        charLength = 3
        break
      default:
        throw new Error ('Error reading data')
    }
    
    asciiToChar.push(charToAdd)
    message = message.substring(charLength)
  }
    return asciiToChar
}


const decodedText = getASCIICodes(message)
const solution = String.fromCharCode(...decodedText)
console.log(solution);

