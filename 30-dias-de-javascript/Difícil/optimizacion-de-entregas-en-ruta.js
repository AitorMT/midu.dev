function tiemposDeEntrega(n, conexiones, inicio) {
  const grafo = Array.from(
    {
      length: n,
    },
    () => []
  );

  for (const [desde, hasta, tiempo] of conexiones) {
    grafo[desde].push([hasta, tiempo]);
  }

  const distancias = Array(n).fill(Infinity);

  distancias[inicio] = 0;

  const cola = [[0, inicio]];

  while (cola.length > 0) {
    cola.sort((a, b) => a[0] - b[0]);
    const [tiempoActual, nodoActual] = cola.shift();

    for (const [vecino, tiempoVecino] of grafo[nodoActual]) {
      const nuevoTiempo = tiempoActual + tiempoVecino;

      if (nuevoTiempo < distancias[vecino]) {
        distancias[vecino] = nuevoTiempo;
        cola.push([nuevoTiempo, vecino]);
      }
    }
  }

  return distancias.map((t) => (t === Infinity ? -1 : t));
}
