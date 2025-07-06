function escapePyramidHead(room: string[][]): number {
  const rows = room.length;
  if (rows === 0) return -1;
  const cols = room[0].length;

  let startPos: { row: number; col: number } | undefined;
  for (let r = 0; r < rows; r++) {
    const c = room[r].indexOf("▲");
    if (c !== -1) {
      startPos = { row: r, col: c };
      break;
    }
  }

  if (!startPos) {
    return -1;
  }

  const queue: { row: number; col: number; steps: number }[] = [
    { ...startPos, steps: 0 },
  ];
  const visited = new Set<string>([`${startPos.row},${startPos.col}`]);

  const directions = [
    [-1, 0], // Arriba
    [1, 0], // Abajo
    [0, -1], // Izquierda
    [0, 1], // Derecha
  ];

  let head = 0;
  while (head < queue.length) {
    const { row, col, steps } = queue[head++];

    if (room[row][col] === "T") {
      return steps;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
        continue;
      }
      if (room[newRow][newCol] === "#") {
        continue;
      }

      const posKey = `${newRow},${newCol}`;
      if (visited.has(posKey)) {
        continue;
      }

      visited.add(posKey);
      queue.push({ row: newRow, col: newCol, steps: steps + 1 });
    }
  }

  return -1;
}
