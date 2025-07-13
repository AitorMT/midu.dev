function createFrame(names: string[]): string {
  if (names.length === 0) {
    return "";
  }

  const maxLength = Math.max(...names.map((name) => name.length));

  const frameWidth = maxLength + 4;

  const border = "*".repeat(frameWidth);

  const lines: string[] = [border];

  for (const name of names) {
    const padding = " ".repeat(maxLength - name.length);
    lines.push(`* ${name}${padding} *`);
  }

  lines.push(border);

  return lines.join("\n");
}
