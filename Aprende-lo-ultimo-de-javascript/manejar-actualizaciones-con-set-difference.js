function getOutdatedFeatures(oldFeatures, newFeatures) {
    const setA = new Set(oldFeatures);
    const setB = new Set(newFeatures)

    const difference = setA.difference(setB);
    return Array.from(difference);
}