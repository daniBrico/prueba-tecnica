# Prueba técnica

El lenguaje utilizado fue JavaScript con Node (v22.18).

Decidí no hacer una interfaz grafica ni nada demasiado excesivo, porque no lo creí necesario, solo agregar la lógica para la resolución del problema.

Para ejecutar el código, posicionado en la carpeta raíz, utiliar el código `node ./src/prueba-tecnica.js`.

## Ejercicio 1

Como el objetivo principal de este punto es realizar el desarrollo en el menor tiempo posible sin importar otros factores, como el tiempo de ejecución o la falta de recursos, dejé la solución que primero se me ocurrió que cumplía con el requerimiento.

Elegí esta implementación porque prioriza la rapidez de desarrollo y mantenibilidad, aunque tenga "peor" rendimiento
en memoria/CPU, ya que el algoritmo simplemente es fuerza bruta.

Este código tiene una complejidad computacional de O(n^2). No escalaría muy bien frente arreglo excesivamente demasiado grande.

Asumo para esta estrategía que la entrada no superará una cantidad exagerada de elementos, ya que este código podría ejecutarse tanto del lado del servidor como del cliente.

## Ejercicio 2

En este caso, los recursos son un bien preciado y el tiempo de ejecución sí importa, pero el tiempo de desarrollo no interfiere; es un poco más amplio.

Es difícil encontrar puntos a optimizar en este código, ya que la eficiencia del mismo depende pura y exclusivamente de la cantidad de elementos del arreglo y de qué tan grande son los números a evaluar.

Si se está ejecutando del lado del cliente, pensaría una estrategía para trabajar desde el servidor, donde quizás los recursos son mejores. Por otra parte, si también son limitados en el lado del servidor, buscaría la forma de optimizar el proceso, ya que cuello de botella en este caso se encuentra en el algoritmo en sí.

Aprovechar asincronía, concurrencia y cualquier opción de optimización, como estructuras de datos más eficientes que las tradicionales, memoización, evitar operaciones repetidas, WebAssembly, etc. También sería importante limitar el tamaño del a entrada. Siempre evaluando una solución matenible, donde el costo beneficio sea el mejor para los resultados obtenidos.
