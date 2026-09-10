function crearPromesa(exito, valor) {
    return new Promise((resolve, reject) => {
        if (exito) {
            resolve(valor);
        } else {
            reject(valor);
        }
    })
}