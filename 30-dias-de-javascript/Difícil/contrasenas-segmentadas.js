function reconstruirContrasena(segmentos, restricciones) {
    const n = segmentos.length;
    const graph = new Map();
    const inDegree = new Map();

    for (const seg of segmentos) {
        graph.set(seg, []);
        inDegree.set(seg, 0);
    }

    for (const [a, b] of restricciones) {
        if (!graph.has(a) || !graph.has(b)) {
            return [];
        }
        graph.get(a)
            .push(b);
        inDegree.set(b, inDegree.get(b) + 1);
    }

    const result = [];
    const order = [];
    const visited = new Set();

    function backtrack() {
        if (order.length === n) {
            result.push(order.join(""));

            return;
        }

        const disponibles = [];

        for (const seg of segmentos) {
            if (!visited.has(seg) && inDegree.get(seg) === 0) {
                disponibles.push(seg);
            }
        }
        disponibles.sort();

        for (const seg of disponibles) {
            visited.add(seg);
            order.push(seg);
            for (const hijo of graph.get(seg)) {
                inDegree.set(hijo, inDegree.get(hijo) - 1);
            }

            backtrack();

            for (const hijo of graph.get(seg)) {
                inDegree.set(hijo, inDegree.get(hijo) + 1);
            }
            order.pop();
            visited.delete(seg);
        }
    }

    backtrack();

    return result.sort();
}