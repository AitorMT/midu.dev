function wrapResult<F extends (arg: any) => any>(
  fn: F,
  arg: Parameters<F>[0]
): { ok: true; value: ReturnType<F> } {
  return { ok: true, value: fn(arg) }
}