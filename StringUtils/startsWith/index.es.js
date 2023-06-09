function f(e, n, l = !1) {
  if (e !== null && n !== null) {
    const t = n.length;
    return t > e.length ? !1 : h(e, l, 0, n, 0, t);
  } else
    return e === n;
}
function h(e, n, l, t, u, r) {
  n && (e = e.toLowerCase(), t = t.toLowerCase());
  const c = l + r;
  let o = 0;
  for (let a = l; a < c; a++) {
    if (e.charAt(a) !== t.charAt(u + o))
      return !1;
    o++;
  }
  return !0;
}
export {
  f as default
};
