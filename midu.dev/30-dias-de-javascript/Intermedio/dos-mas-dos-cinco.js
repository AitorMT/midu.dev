function combinacionesSuma(numeros, objetivo) {
  const resultado = [];
  const unicos = [...new Set(numeros)].sort((a, b) => a - b);

  function backtrack(combinacion, suma, indice) {
    if (suma === objetivo) {
      resultado.push([...combinacion]);
      return;
    }
    if (suma > objetivo) return;

    for (let i = indice; i < unicos.length; i++) {
      combinacion.push(unicos[i]);
      backtrack(combinacion, suma + unicos[i], i);
      combinacion.pop();
    }
  }

  backtrack([], 0, 0);
  return resultado;
}
