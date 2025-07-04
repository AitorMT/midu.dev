function darCambio(amount) {
    const monedas = [1, 2, 5, 10, 20, 50];
    const resultado = [0, 0, 0, 0, 0, 0];
    let resto = amount;

    for (let i = monedas.length - 1; i >= 0; i--) {
        const c = monedas[i];
        resultado[i] = Math.floor(resto / c);
        resto %= c;
    }

    return resultado;
}