function cuentaPasosUnicos(instrucciones) {
  let x = 0;
  let y = 0;
  const visitadas = new Set();
  visitadas.add(`${x},${y}`);

  for (const paso of instrucciones) {
    switch (paso) {
      case "U":
        y += 1;
        break;
      case "D":
        y -= 1;
        break;
      case "L":
        x -= 1;
        break;
      case "R":
        x += 1;
        break;
      default:
        continue;
    }
    visitadas.add(`${x},${y}`);
  }

  return visitadas.size;
}
