function usuariosSospechosos(transacciones) {
  const usuarios = transacciones.reduce((a, { userId, timestamp }) => {
    (a[userId] ??= []).push(timestamp);
    return a;
  }, {});

  return Object.entries(usuarios).flatMap(([userId, timestamps]) => {
    timestamps.sort((a, b) => a - b);
    return timestamps.some((_, i) => timestamps[i + 3] - timestamps[i] <= 60)
      ? [userId]
      : [];
  });
}
