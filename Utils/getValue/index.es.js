function u(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function c(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${u(e)}]`;
  };
}
function l(e, t = ".") {
  if (!e)
    return !1;
  const i = e.trim().split(t);
  for (const n of i)
    if (!n || /\s/.test(n))
      return !1;
  return !0;
}
function y(e, t, i = void 0, n = ".") {
  if (!c("String")(t))
    throw new TypeError(`${t} is not string type`);
  if (!l(t, n))
    throw new Error(`Invalid: ${t}`);
  const f = t.trim().split(n);
  let r = e;
  for (const o of f)
    if (Array.isArray(r) && /^\d+$/.test(o)) {
      const s = parseInt(o, 10);
      if (s < r.length)
        r = r[s];
      else
        return i;
    } else if (typeof r == "object" && o in r)
      r = r[o];
    else
      return i;
  return r;
}
export {
  y as default
};
