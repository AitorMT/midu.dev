function organizarEstanteria(libros, posiciones) {
    const librosOrganizados = new Array(libros.length);

    libros
        .forEach((libro, i) => {
            librosOrganizados[posiciones[i]] = libro;
        })



    return librosOrganizados.filter((libro) => libro !== undefined);;
}