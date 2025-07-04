function hasAllFavoriteSongs(playlist, favorites) {
    const setA = new Set(playlist);
    const setB = new Set(favorites);

    return setA.isSupersetOf(setB);
}