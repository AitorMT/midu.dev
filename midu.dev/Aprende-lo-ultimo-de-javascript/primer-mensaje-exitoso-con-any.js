async function getFirstSuccess(tasks) {
    try {
        const promises = tasks.map(task => task());

        const result = await Promise.any(promises);
        return result;
    } catch (error) {
        return "All promises were rejected";
    }
}