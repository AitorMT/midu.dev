function freezeShallow<T extends object>(valor: T): Readonly<T> {
  return Object.freeze(valor);
}