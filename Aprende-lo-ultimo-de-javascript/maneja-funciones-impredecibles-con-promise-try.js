async function executeSafely(tasks) {
    const promises = tasks.map(task => Promise.try(task));

    const results = await Promise.allSettled(promises);

    return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
}