/*
1. El objetivo principal es realizar el desarrollo en el menor tiempo posible sin importar otros factores,
como el tiempo de ejecución, o la falta de recursos, dejé la resolución que primero se me ocurrió y que cumplía
con el requerimiento. Si existiera alguna librería que me pueda facilitar el trabajo,
la usaría aunque está sea más "pesada" en cuestiones de recursos o eficiencia.

Elegí esta implementación porque prioriza la rapidez de desarrollo y mantenibilidad, aunque tenga "peor" rendimiento
en memoria/CPU.

En estos casos trataría de priorizar la velocidad y la claridad (que el código sea legible y directo).

Este código tiene una complejidad computacional de O(n^2) (exponencial). Si tuvieramos mundo
 */
const isRequiredSumPossible = (
  numbers: number[],
  requiredSum: number
): boolean => {
  // Primer recorrido del arreglo
  for (let i = 0; i < numbers.length; i++) {
    // Sumo el elemento actual a cada uno de los demás (pero no consigo mismo), y en cada suma,
    // comparo si es igual a la suma requerida. Si es así, retorna verdadero
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue

      const add = numbers[i] + numbers[j]

      // Si alguna de las sumas entre dos elementos del arreglo cumple con la suma requerida cortamos el recorrido
      if (add !== requiredSum) continue

      return true
    }
  }

  return false
}

const main = (): void => {
  const numbers = [1, 4, 2, 1]
  const requiredSum = 4

  if (numbers.length === 0) {
    console.log('Array vacio')
    return
  }

  if (numbers.length === 1) {
    console.log('No hay ni un solo par!')
    return
  }

  let result = isRequiredSumPossible(numbers, requiredSum)

  console.log('🚀 ~ main ~ result: ', result)
}

main()
