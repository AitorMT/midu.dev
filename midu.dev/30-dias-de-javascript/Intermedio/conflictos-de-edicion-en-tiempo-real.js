function resolverConflictos(firstUserChanges, secondUserChanges) {
  let texto = '';

  for (const op of firstUserChanges) {
    if (op.op === 'insert') {
      texto = texto.slice(0, op.index) + op.text + texto.slice(op.index);
    } else if (op.op === 'delete' && op.index >= 0 && op.index < texto.length) {
      texto = texto.slice(0, op.index) + texto.slice(op.index + 1);
    }
  }

  for (const op of secondUserChanges) {
    if (op.op === 'insert' && op.index >= 0 && op.index <= texto.length) {
      texto = texto.slice(0, op.index) + op.text + texto.slice(op.index);
    } else if (op.op === 'delete' && op.index >= 0 && op.index < texto.length) {
      texto = texto.slice(0, op.index) + texto.slice(op.index + 1);
    }
  }

  return texto;
}