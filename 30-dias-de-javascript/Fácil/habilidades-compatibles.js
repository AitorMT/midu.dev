function candidatosCompatibles(oferta, candidatos) {
    oferta = oferta.map((skill) => skill.toLowerCase());
    const candidatosValidos = [];
    const cantidadSkillsNecesarias = Math.floor(oferta.length * 0.7);

    candidatos.forEach((candidato) => {
        const skillsCompatibles = candidato.skills.filter((skill) =>
            oferta.includes(skill.toLowerCase()),
        );

        if (skillsCompatibles.length >= cantidadSkillsNecesarias) {
            candidatosValidos.push(candidato.id);
        }
    });

    return candidatosValidos.sort();
}
