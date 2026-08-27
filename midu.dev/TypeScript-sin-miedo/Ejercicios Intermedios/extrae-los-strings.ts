function soloStrings(valores: Array<string | number | boolean>): string[] {
  return valores.filter((v) => typeof v === 'string');
}