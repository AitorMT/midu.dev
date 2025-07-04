function shortestSafeJump(unsafeNodes) {
    if (unsafeNodes.length === 0) return 1;

    const spikes = unsafeNodes;
    const maxSpike = Math.max(...spikes);

    for (let jump = 1; jump <= maxSpike + 1; jump++) {
        let safe = true;

        for (const pos of spikes) {
            if (pos % jump === 0) {
                safe = false;
                break;
            }
        }
        if (safe) return jump;
    }

    return maxSpike + 1;
}