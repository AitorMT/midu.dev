function caminosMasCortosConRestricciones(
  ciudades,
  carreteras,
  limiteRecursos,
  ciudadInicio,
  ciudadDestino
) {
  const adj = {};

  for (const { ciudad1, ciudad2, costo } of carreteras) {
    adj[ciudad1] = adj[ciudad1] || [];
    adj[ciudad2] = adj[ciudad2] || [];
    adj[ciudad1].push({
      to: ciudad2,
      costo,
    });
    adj[ciudad2].push({
      to: ciudad1,
      costo,
    });
  }

  const dist = {};
  const prev = {};

  for (const { id } of ciudades) {
    dist[id] = Infinity;
  }
  dist[ciudadInicio] = 0;

  const sinVisitar = new Set(ciudades.map((c) => c.id));

  while (sinVisitar.size > 0) {
    let u = null;

    for (const v of sinVisitar) {
      if (u === null || dist[v] < dist[u]) {
        u = v;
      }
    }
    if (u === null || dist[u] === Infinity) break;
    sinVisitar.delete(u);

    for (const { to: v, costo } of adj[u] || []) {
      const alt = dist[u] + costo;

      if (alt < dist[v] && alt <= limiteRecursos) {
        dist[v] = alt;
        prev[v] = u;
      }
    }
  }

  if (
    dist[ciudadDestino] === Infinity ||
    dist[ciudadDestino] > limiteRecursos
  ) {
    return [];
  }

  const ruta = [];
  let paso = ciudadDestino;

  while (paso !== undefined) {
    ruta.push(paso);
    if (paso === ciudadInicio) break;
    paso = prev[paso];
  }
  ruta.reverse();

  return [ruta];
}
