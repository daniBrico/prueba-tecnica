const d = document

const isRequiredSumPossible = (numbers, requiredSum) => {
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

const setMessageInSpanResult = (message) => {
  const $spanResult = d.getElementById('result')
  $spanResult.textContent = message
}

const showResult = (requiredSum, result) => {
  const message = `El número ${requiredSum}, ${
    result
      ? 'puede formarse como la suma de dos elementos del arreglo.'
      : 'no puede formarse como la suma de dos elementos del arreglo.'
  }`

  setMessageInSpanResult(message)
}

const getData = () => {
  const $arrayInput = d.getElementById('arrayNumbers')

  const arrayNumbers = $arrayInput.value.split(',').map(Number)
  const requiredSum = Number(d.getElementById('requiredSum').value)

  return { arrayNumbers, requiredSum }
}

const main = () => {
  const $form = d.getElementById('form')
  $form.addEventListener('submit', (event) => {
    event.preventDefault()

    const { arrayNumbers, requiredSum } = getData()

    if (arrayNumbers.length === 0) {
      setMessageInSpanResult('Arreglo vacio.')
      return
    }

    if (arrayNumbers.length === 1) {
      setMessageInSpanResult('No hay ni un solo par!')
      return
    }

    const result = isRequiredSumPossible(arrayNumbers, requiredSum)

    showResult(requiredSum, result)
  })
}

main()
