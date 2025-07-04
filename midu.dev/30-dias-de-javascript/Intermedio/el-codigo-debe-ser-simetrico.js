function esPal(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
}

function esSimetricoParaVegetta(nombre) {
  let l = 0;
  let r = nombre.length - 1;

  while (l < r) {
    if (nombre[l] === nombre[r]) {
      l++;
      r--;
    } else {
      return esPal(nombre, l + 1, r) || esPal(nombre, l, r - 1);
    }
  }

  return true;
}
