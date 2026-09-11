async function settleAll(tasks) {
  const results = await Promise.allSettled(tasks.map(task => task()))

  const fulfilled = []
  const rejected = []

  for (const result of results) {
    if (result.status === 'fulfilled') {
      fulfilled.push(result.value)
    } else {
      rejected.push(result.reason)
    }
  }

  return { fulfilled, rejected}
}