async function retry(task, times) {
    for (let i = 0; i < times; i++) {
        try {
            return await task()
        } catch (error) {
            if (i === times - 1) throw error
        }
    }
}