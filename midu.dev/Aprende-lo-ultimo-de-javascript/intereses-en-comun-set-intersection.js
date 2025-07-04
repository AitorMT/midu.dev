function findCommonInterests(personA, personB) {
  const setA = new Set(personA);
  const setB = new Set(personB);
  const intersection = setA.intersection(setB);
  return Array.from(intersection);
}