function findPlanConflicts(planA, planB) {
    const setA = new Set(planA);
    const setB = new Set(planB);

    const diferenciaSimetrica = setA.symmetricDifference(setB);
    return Array.from(diferenciaSimetrica);
}
