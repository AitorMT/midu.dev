async function fetchAll(tasks) {
    return Promise.all(tasks.map((task) => task()));
}