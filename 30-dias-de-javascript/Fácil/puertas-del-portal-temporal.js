function portalFueraDeFase(portales) {
  const string = portales.split("");

  const obj = {};

  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === 1) {
      return i;
    }
  }

  return -1;
}
