const simbolos = new Map([
    ["☽", 1],
    ["☾", 5],
    ["♁", 10],
    ["⚕", 50],
    ["⚡", 100],
]);

function decodeSpell(spell) {
    let resultado = 0;

    for (let i = 0; i < spell.length; i++) {
        const simbolo = spell[i];
        const siguiente = spell[i + 1];

        if (!simbolos.has(simbolo)) return NaN;

        const valor = simbolos.get(simbolo);
        const siguienteValor = simbolos.get(siguiente) || 0;

        if (valor < siguienteValor) {
            resultado -= valor;
        } else {
            resultado += valor;
        }
    }

    return resultado;
}