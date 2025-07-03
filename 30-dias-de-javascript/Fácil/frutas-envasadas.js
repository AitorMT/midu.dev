function frutaEmpacadaCorrectamente(entrada, salida) {
  for (let i = 0; i < salida.length; i++) {
    if (salida[i] !== entrada[entrada.length - 1 - i]) {
      return false;
    }
  }
  return true
}
