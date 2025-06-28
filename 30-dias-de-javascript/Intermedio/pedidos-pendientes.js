function getPedidosPendientes(pedidos) {
  return pedidos
    .filter((p) => p.estado === "pendiente" || p.estado === "retrasado")
    .sort((a, b) => a.prioridad - b.prioridad || a.id.localeCompare(b.id))
    .map((p) => p.id);
}
