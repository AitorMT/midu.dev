function getMaxConcurrentEvents(eventos) {
  const tiempos = [];

  for (const { inicio, fin } of eventos) {
    tiempos.push([inicio, 1]);
    tiempos.push([fin, -1]);
  }

  tiempos.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let concurrentes = 0;
  let max = 0;

  for (const [, cambio] of tiempos) {
    concurrentes += cambio;
    max = Math.max(max, concurrentes);
  }

  return max;
}
