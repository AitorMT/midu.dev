function canJoinMatch(playerSkills, requiredSkills) {
    const setA = new Set(playerSkills);
    const setB = new Set(requiredSkills);

    return setA.isSubsetOf(setB);
}
