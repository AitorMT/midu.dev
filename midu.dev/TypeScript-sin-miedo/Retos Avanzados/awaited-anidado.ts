async function resolveDeep<T>(valor: T): Promise<Awaited<T>> {
    while (valor && typeof (valor as any).then === 'function') {
        valor = await valor
    }

    return valor as Awaited<T>
}

