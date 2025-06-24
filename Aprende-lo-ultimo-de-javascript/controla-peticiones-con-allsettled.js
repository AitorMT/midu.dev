async function getFetchResults(tasks) {
    const promises = tasks.map((task) => task());
    const results = await Promise.allSettled(promises);
    return results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
}
