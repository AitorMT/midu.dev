function countMelodySequences(birdNotes) {
    let count = 0;

    for (let i = 0; i < birdNotes.length; i++) {
        let seen = new Set();
        let min = birdNotes[i];
        let max = birdNotes[i];

        for (let j = i; j < birdNotes.length; j++) {
            const note = birdNotes[j];

            if (seen.has(note)) break;

            seen.add(note);
            min = Math.min(min, note);
            max = Math.max(max, note);

            const length = j - i + 1;

            if (length >= 2 && length === max - min + 1) {
                count++;
            }
        }
    }

    return count;
}