/*
2. Para el punto número dos, los recursos son un bien preciado y el tiempo de ejecución si importa, pero el tiempo de desarrollo es un poco más amplio.

Es difícil encontrar puntos a optimizar en este código ya que la eficiencia del mismo depende pura y exclusivamente de la cantidad de elementos por los que estuviera compuesto el arreglo.

Pensé por un momento en web assembly, pero el la demora en la comunicación superaría las ganancias en arreglos pequeños. Solo sería útil para una cantidad muy enorme de elementos. >1M, por ejemplo.

El cuello de botella en este caso se encuentra en el algoritmo en sí.

Solo cambie como se define j en el for interno, permitiendo quitar la validación para que no se tome en cuenta el mismo elemento.
 */
const isRequiredSumPossible = (
  numbers: number[],
  requiredSum: number
): boolean => {
  // Primer recorrido del arreglo
  for (let i = 0; i < numbers.length; i++) {
    // Sumo el elemento actual a cada uno de los demás (pero no consigo mismo, esto gracias a que j = i + 1), y en cada suma,
    for (let j = i + 1; j < numbers.length; j++) {
      const add = numbers[i] + numbers[j]

      // Si alguna de las sumas entre dos elementos del arreglo cumple con la suma requerida cortamos el recorrido
      if (add !== requiredSum) continue

      return true
    }
  }

  return false
}

const main = (): void => {
  const numbers = [1, 4, 2, 5]
  const requiredSum = 8

  if (numbers.length === 0) {
    console.log('Array vacio.')
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
