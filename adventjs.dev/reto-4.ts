function createXmasTree(height: number, ornament: string): string {
  const tree = Array.from({ length: height }, (_, i) => {
    const ornaments = ornament.repeat(2 * i + 1);
    const padding = "_".repeat(height - 1 - i);
    return padding + ornaments + padding;
  });

  const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  tree.push(trunk, trunk);

  return tree.join("\n");
}
