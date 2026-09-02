function conDefaults<T extends Record<string, unknown>>(
    parcial: Partial<T>,
    defaults: T
): Required<T> {
    const resultado = { ...defaults }

    for (const clave in parcial) {
        if (parcial[clave] !== undefined) {
            resultado[clave] = parcial[clave]
        }
    }

    return resultado;
}