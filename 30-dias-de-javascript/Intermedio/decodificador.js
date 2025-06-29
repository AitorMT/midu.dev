function decodificaMensaje(m) {
  const s = [];
  for (const c of m)
    if (c == "]") {
      let t = "",
        n = "";
      while (s.at(-1) != "[") t = s.pop() + t;
      s.pop();
      while (/\d/.test(s.at(-1))) n = s.pop() + n;
      s.push(...t.repeat(n));
    } else s.push(c);
  return s.join("");
}
