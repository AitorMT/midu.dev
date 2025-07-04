function primerosEstudiantes(estudiantes) {
    const iterador = estudiantes.values();
    return [iterador.next(), iterador.next()]
        .filter(item => !item.done)
        .map(item => item.value);
}