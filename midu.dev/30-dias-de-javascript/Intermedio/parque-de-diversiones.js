function groupVisitors(energyLevels) {
  const groups = [];

  for (const energy of energyLevels) {
    let placed = false;

    for (const group of groups) {
      if (group[group.length - 1] < energy) {
        group.push(energy);
        placed = true;
        break;
      }
    }

    if (!placed) {
      groups.push([energy]);
    }
  }

  return groups.length;
}
