# Prueba técnica

El lenguaje utilizado fue TypeScript con Node (v22.18).

El ejercicio 1 está hecho en código. El mismo

Para ejecutar el código:

- posicionado en la carpeta raíz, utiliar el comando `node ./src/prueba-tecnica.ts`.
- Si desea visualizarlo en codesandox.io: https://codesandbox.io/p/sandbox/prueba-tecnica-8twjkc

## Ejercicio 1

Como el objetivo principal de este punto es realizar el desarrollo en el menor tiempo posible sin importar otros factores, como el tiempo de ejecución o la falta de recursos, dejé la solución que primero se me ocurrió que cumplía con el requerimiento.

Elegí esta implementación porque prioriza la rapidez de desarrollo y mantenibilidad, aunque tenga "peor" rendimiento
en memoria/CPU, ya que el algoritmo es simplemente fuerza bruta.

Este código tiene una complejidad computacional de O(n^2). No escalaría muy bien frente arreglo excesivamente demasiado grande.

Asumo para esta estrategía que la entrada no superará una cantidad exagerada de elementos, ya que este código podría ejecutarse tanto del lado del servidor como del cliente.

## Ejercicio 2

Para este punto decidí no hacer ninguna implementación, sino analizar la situación y proponer posibles soluciones dependiendo del contexto.

En este caso, los recursos son un bien preciado y el tiempo de ejecución sí importa, pero el tiempo de desarrollo no interfiere; es un poco más amplio.

Es difícil encontrar puntos a optimizar en este código, ya que la eficiencia del mismo depende pura y exclusivamente de la cantidad de elementos del arreglo y de qué tan grande son los números a evaluar.

Si se está ejecutando del lado del cliente, pensaría una estrategía para trabajar desde el servidor, donde quizás los recursos son mejores. Por otra parte, si también son limitados en el lado del servidor, buscaría la forma de optimizar el proceso, ya que el cuello de botella en este caso se encuentra en el algoritmo en sí.

Algunas posibles soluciones a este problema sería aprovechar asincronía, concurrencia y cualquier opción de optimización, como estructuras de datos más eficientes que las tradicionales, memoización, evitar operaciones repetidas, WebAssembly, etc. También sería posible limitar el tamaño de la entrada. Siempre evaluando una solución matenible, donde el costo beneficio sea el mejor para los resultados obtenidos.
