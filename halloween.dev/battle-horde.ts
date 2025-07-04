function battleHorde(zombies: string, humans: string) {
  let ventaja = 0;

  for (let i = 0; i < zombies.length; i++) {
    ventaja += +zombies[i] - +humans[i];
  }

  if (ventaja === 0) {
    return "x";
  }

  const victorias = Math.abs(ventaja);
  const sufijo = ventaja > 0 ? "z" : "h";

  return victorias + sufijo;
}
