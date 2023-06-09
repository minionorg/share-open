function r(...n) {
  if (n === null)
    return !1;
  for (const t of n)
    if (t === null)
      return !1;
  return !0;
}
function f(n, t, l) {
  if (r(n, t, l)) {
    const e = n.indexOf(t);
    if (e !== -1) {
      const u = n.indexOf(l, e + t.length);
      if (u !== -1)
        return n.substring(e + t.length, u);
    }
    return null;
  } else
    return null;
}
export {
  f as default
};
