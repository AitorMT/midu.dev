function compact<T>(valores: Array<T | null | undefined>): T[] {
  return valores.filter((p) => p!=null)
}