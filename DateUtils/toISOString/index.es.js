function S(e) {
  const t = new Date(e.getTime()), n = t.getUTCFullYear(), s = String(t.getUTCMonth() + 1).padStart(2, "0"), a = String(t.getUTCDate()).padStart(2, "0"), r = String(t.getUTCHours()).padStart(2, "0"), o = String(t.getUTCMinutes()).padStart(2, "0"), g = String(t.getUTCSeconds()).padStart(2, "0"), i = String((t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5)).padStart(3, "0");
  return `${n}-${s}-${a}T${r}:${o}:${g}.${i}Z`;
}
export {
  S as default
};
