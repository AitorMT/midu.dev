function findTheKiller(whisper: string, suspects: string[]) {
  const isExact = whisper.endsWith("$");

  const raw = isExact ? whisper.slice(0, -1) : whisper;
  const escaped = raw.replace(/[-/\\^$+?.()|[\]{}]/g, "\\$&");
  const pattern = escaped.replace(/~/g, ".");

  const regex = new RegExp(`^${pattern}${isExact ? "$" : ""}`, "i");

  const result = suspects.filter((name) => regex.test(name));
  return result.length ? result.join(",") : "";
}
