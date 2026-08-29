function actualizar<T extends Record<string, unknown>>(
  original: T,
  cambios: Partial<T>
): T {
  return {...original, ...cambios};
}