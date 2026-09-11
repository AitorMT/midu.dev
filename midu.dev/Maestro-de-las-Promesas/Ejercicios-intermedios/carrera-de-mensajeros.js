async function raceTasks(tasks) {
    return Promise.race(tasks.map(task => task()))
}
