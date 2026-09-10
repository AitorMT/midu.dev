function callWith<F extends (...args: any[]) => any>(
    fn: F,
    args: Parameters<F>
): ReturnType<F> {
    return fn(...args);
}