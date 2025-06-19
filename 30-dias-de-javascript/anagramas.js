function esAnagrama(primeraPalabra, segundaPalabra) {
  return primeraPalabra.toLowerCase()
    .split("")
    .sort()
    .join("") === segundaPalabra.toLowerCase()
    .split("")
    .sort()
    .join("")
}