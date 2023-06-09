const u = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, l = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${u(t)}]`;
  };
};
l("Function");
l("Object");
const c = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${u(t)}]`;
  };
};
function d(t) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    t
  );
}
function s(t, e) {
  const i = [], f = Math.min(t.length, e.length);
  for (let r = 0; r < f; r++)
    i.push([t[r], e[r]]);
  return i;
}
function m(t, e = { format: "YYYY/MM/DD", delimiters: ["/", "-"], strictMode: !1 }) {
  if (e = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...e
  }, c("String")(t) && d(e.format)) {
    const i = e.delimiters.find((n) => e.format.indexOf(n) !== -1), f = e.strictMode ? i : e.delimiters.find((n) => t.indexOf(n) !== -1), r = s(t.split(f), e.format.toLowerCase().split(i)), o = {};
    for (const [n, a] of r) {
      if (n.length !== a.length)
        return !1;
      o[a.charAt(0)] = n;
    }
    return new Date(`${o.m}/${o.d}/${o.y}`).getDate() === +o.d;
  }
  return e.strictMode ? !1 : c("Date")(t);
}
export {
  m as default
};
