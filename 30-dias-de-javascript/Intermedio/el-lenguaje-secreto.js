function palabraMasFuerte(palabras) {
  const abecedario = "abcdefghijklmnopqrstuvwxyz";
  let palabraMasFuerte = {};
  let palabraFuerte = "";

  for (const palabra of palabras) {
    let suma = 0;

    for (const letra of palabra) {
      suma += abecedario.indexOf(letra) + 1;
    }
    palabraMasFuerte[palabra] = suma;
  }

  for (const [palabra, suma] of Object.entries(palabraMasFuerte)) {
    if (suma === Math.max(...Object.values(palabraMasFuerte))) {
      palabraFuerte = palabra;
    }
  }

  return palabraFuerte;
}
