function u(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function l(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${u(t)}]`;
  };
}
function c(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${u(t)}]`;
  };
}
l("Function");
l("Object");
function d(t) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    t
  );
}
function m(t, e) {
  const i = [], a = Math.min(t.length, e.length);
  for (let r = 0; r < a; r++)
    i.push([t[r], e[r]]);
  return i;
}
function s(t, e) {
  if (e = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...e
  }, c("String")(t) && d(e.format)) {
    const i = e.delimiters.find((n) => e.format.indexOf(n) !== -1), a = e.strictMode ? i : e.delimiters.find((n) => t.indexOf(n) !== -1), r = m(t.split(a), e.format.toLowerCase().split(i)), f = {};
    for (const [n, o] of r) {
      if (n.length !== o.length)
        return !1;
      f[o.charAt(0)] = n;
    }
    return new Date(`${f.m}/${f.d}/${f.y}`).getDate() === +f.d;
  }
  return e.strictMode ? !1 : c("Date")(t);
}
export {
  s as default
};
