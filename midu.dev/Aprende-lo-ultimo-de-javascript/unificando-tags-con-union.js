function mergeProductTags(oldTags, newTags) {
    const setA = new Set(oldTags);
    const setB = new Set(newTags);

    const union = setA.union(setB);

    return Array.from(union);
}