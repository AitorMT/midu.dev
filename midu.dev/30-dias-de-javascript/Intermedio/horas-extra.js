function calcularHorasExtra(anio, feriados) {
    let contador = 0;

    for (const fecha of feriados) {
        const [mesStr, diaStr] = fecha.split("/");
        const mes = parseInt(mesStr, 10) - 1;
        const dia = parseInt(diaStr, 10);
        const d = new Date(anio, mes, dia);
        const diaSemana = d.getDay();

        if (diaSemana >= 1 && diaSemana <= 5) {
            contador++;
        }
    }

    return contador * 2;
}