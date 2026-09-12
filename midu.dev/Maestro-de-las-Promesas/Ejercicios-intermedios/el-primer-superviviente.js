async function firstSuccess(tasks) {
    try {
        return await Promise.any(tasks.map(task => task()))
    } catch {
        return "Todo falló"
    }
}