function createMagicPotion(
  potions: number[],
  target: number
): [number, number] | undefined {
  const seen = new Map<number, number>();

  for (const [i, value] of potions.entries()) {
    const prevIndex = seen.get(target - value);
    if (prevIndex !== undefined) {
      return [prevIndex, i];
    }
    seen.set(value, i);
  }
}
