function omit<T extends object, K extends keyof T>(
  objeto: T,
  claves: K[]
): Omit<T, K> {
  const clavesOmitir = new Set(claves)

  return Object.fromEntries(
    Object.entries(objeto).filter(([clave]) => !clavesOmitir.has(clave as K))
  ) as Omit<T, K>
}