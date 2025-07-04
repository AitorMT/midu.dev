async function obtenerProducto(id, callback) {
    try {
        await callback()
    } catch (errorOriginal) {
        return {
            error: `Hubo un error al obtener el producto de ID ${id}`,
            cause: errorOriginal
        }
    }
}