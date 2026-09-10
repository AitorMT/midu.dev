async function withFallback(task, fallback) {
    try {
        const response = await task();
        return response;
    } catch (e) {
        return fallback;
    }
}