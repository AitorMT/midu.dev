function participanteConMasVotos(votos) {
  const conteo = {};

  let maxVotos = 0;
  let ganador = "";

  for (const participante of votos) {
    conteo[participante] = (conteo[participante] || 0) + 1;

    if (conteo[participante] >= maxVotos) {
      ganador = participante;
      maxVotos = conteo[participante];
    }
  }

  return ganador;
}
