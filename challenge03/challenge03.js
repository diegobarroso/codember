import fetch from 'node-fetch'

const response = await fetch('https://codember.dev/colors.txt')
const colorsArray = await response.json()


const getZebraColors = (colorsArray) => {

  let maxZebraColors = [colorsArray[0], colorsArray[1]]
  let maxLights = 2
  let zebraColors = [colorsArray[0], colorsArray[1]]
  let totalLights = 2
  let i = 2

  while (i < colorsArray.length) {

    if (zebraColors[0] === colorsArray[i] && zebraColors[1] === colorsArray[i+1]) {
      totalLights += 2
      i+=2
      
    } else {
      if (totalLights >= maxLights) {
        maxLights = totalLights
        maxZebraColors = [...zebraColors]
      }
      zebraColors = [colorsArray[i-1], colorsArray[i]]
      totalLights = 2
      i += 1
    }
  
  }
  if (totalLights >= maxLights) {
    maxLights = totalLights
    maxZebraColors = [...zebraColors]
  }

  return [maxLights, maxZebraColors[1]]
}

const [maxLights, maxZebraColors] = getZebraColors(colorsArray)

console.log(`${maxLights}@${maxZebraColors}`)