function maxEnergia(frutas) {
    let incluido = 0;
    let excluido = 0;

    for (let energia of frutas) {
        let nuevoIncluido = excluido + energia;
        let nuevoExcluido = Math.max(incluido, excluido);

        incluido = nuevoIncluido;
        excluido = nuevoExcluido;
    }

    return Math.max(incluido, excluido);
}