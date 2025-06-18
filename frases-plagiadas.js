function detectarPlagio(base, frasesEstudiante) {
    const normalizar = frase =>
      frase
        .trim()
        .replace(/^[¡¿]+/, '')
        .replace(/[\.\!\?]+$/g, '')
        .toLowerCase();
  
    const baseNormalizada = new Set(base.map(normalizar));
  
    return frasesEstudiante.filter(frase =>
      baseNormalizada.has(normalizar(frase))
    );
  }
  