function planificarTareasDependientes(tareas) {
  const n = tareas.length;
  const idToIdx = new Map();

  tareas.forEach((t, i) => idToIdx.set(t.id, i));

  const adj = Array.from(
    {
      length: n,
    },
    () => []
  );
  const indegree = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (const depId of tareas[i].dependencias) {
      const j = idToIdx.get(depId);

      if (j === undefined) {
        throw new Error(`Dependencia inexistente: ${depId}`);
      }
      adj[j].push(i);
      indegree[i]++;
    }
  }

  (function detectaCiclo() {
    const q = [];
    const indeg = indegree.slice();

    indeg.forEach((d, i) => {
      if (d === 0) q.push(i);
    });
    let visitados = 0;

    for (let head = 0; head < q.length; head++) {
      const u = q[head];

      visitados++;
      for (const v of adj[u]) {
        if (--indeg[v] === 0) q.push(v);
      }
    }
    if (visitados !== n) {
      return [];
    }
  })();

  const resultados = [];
  const path = [];
  const ids = tareas.map((t) => t.id);

  const disponibles = [];

  indegree.forEach((d, i) => {
    if (d === 0) disponibles.push(i);
  });

  function bt(disp) {
    if (path.length === n) {
      resultados.push(path.map((i) => ids[i]));

      return;
    }

    for (let k = 0; k < disp.length; k++) {
      const u = disp[k];
      const nextDisp =
        disp.length === 1 ? [] : disp.slice(0, k).concat(disp.slice(k + 1));

      path.push(u);
      const anadidos = [];

      for (const v of adj[u]) {
        indegree[v]--;
        if (indegree[v] === 0) {
          nextDisp.push(v);
          anadidos.push(v);
        }
      }

      bt(nextDisp);

      for (const v of adj[u]) {
        indegree[v]++;
      }
      path.pop();
    }
  }

  bt(disponibles);

  return resultados;
}
