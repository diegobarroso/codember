import fetch from 'node-fetch'

const response = await fetch('https://codember.dev/mecenas.json')
const mecenas = await response.json()

let mecenasIndex = Array.from(Array(mecenas.length).keys())

while (mecenasIndex.length > 1) {
  let oddLength = (mecenasIndex.length %2 === 1)
  mecenasIndex = mecenasIndex.filter((_n, i) => i%2===0)
  if (oddLength && mecenasIndex.length>1) mecenasIndex.shift()
}
console.log(`${mecenas[mecenasIndex[0]]}-${mecenasIndex[0]}`);
