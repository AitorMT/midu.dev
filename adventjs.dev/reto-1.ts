/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts: number[]) {
  const giftsUnicos = new Set<number>(gifts);
  return Array.from(giftsUnicos).sort((a, b) => a - b);
}
