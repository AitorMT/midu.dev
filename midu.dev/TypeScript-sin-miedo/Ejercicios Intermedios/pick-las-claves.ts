function pick<T extends Record<string, unknown>, K extends keyof T>(
    objeto: T,
    claves: K[]
): Pick<T, K> {
    const resultado = {} as Pick<T, K>

    for (const clave of claves) {
        resultado[clave] = objeto[clave]
    }

    return resultado
}