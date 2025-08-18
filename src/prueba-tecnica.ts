const isRequiredSumPossible = (
  numbers: number[],
  requiredSum: number
): boolean => {
  for (let i = 0; i < numbers.length; i++) {
    const currentElement = numbers[i]

    for (let j = i + 1; j < numbers.length; j++) {
      const elAux = numbers[j]
      // Realizo la suma entre el elemento actual (currentElement) y el elemento auxiliar, que se mueve por el mismo arreglo pero una posición por delante, para no comparar consigo mismo, ni en combinaciones repetidas hacía atrás.
      const add = currentElement + elAux

      // Si coincide con la suma requerida, retorno verdadero
      if (add !== requiredSum) continue

      return true
    }
  }

  return false
}

const main = (): void => {
  const numbers = [1, 4, 2, 1]
  const requiredSum = 6

  if (numbers.length === 0) {
    console.log('Array vacio')
    return
  }

  if (numbers.length === 1) {
    console.log('No hay ni un solo par!')
    return
  }

  let result = isRequiredSumPossible(numbers, requiredSum)

  const message = `El número ${requiredSum}, ${
    result
      ? 'puede formarse como la suma de dos elementos del arreglo.'
      : 'no puede formarse como la suma de dos elementos del arreglo.'
  }`

  console.log(message)
}

main()
