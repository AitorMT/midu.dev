function secuenciaDeNumeros(tinta, codigos) {
  let resultado = [];

  for (let i = 1; i <= codigos; i++) {
    if (!i.toString()
      .includes(tinta)) {
      continue;
    }
    resultado.push(i);
  }
  return resultado;
}