var g = Object.defineProperty;
var h = (r, t, e) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var u = (r, t, e) => (h(r, typeof t != "symbol" ? t + "" : t, e), e);
function m(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function d(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${m(r)}]`;
  };
}
function l(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${m(r)}]`;
  };
}
class s {
  constructor() {
  }
  static notNull(t, e) {
    if (t === null)
      throw new SyntaxError(e || "The value must not be empty");
  }
  static notEmpty(t, e) {
    if (t.length === 0)
      throw new SyntaxError(e || "The String must not be empty");
  }
  static errMsg(t) {
    return function(e) {
      return `${t}: ${e}`;
    };
  }
  static isString(t) {
    if (t === null)
      return null;
    if (l("string")(t))
      return t;
    throw new TypeError("The parameter type is string");
  }
  static isValidDateFormat(t) {
    return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
      t
    );
  }
  static isTimeFormat(t) {
    return /(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t);
  }
}
u(s, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
d("Function");
d("Object");
function y(r) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    r
  );
}
function D(r, t) {
  const e = [], i = Math.min(r.length, t.length);
  for (let a = 0; a < i; a++)
    e.push([r[a], t[a]]);
  return e;
}
function S(r, t) {
  if (t = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...t
  }, l("String")(r) && y(t.format)) {
    const e = t.delimiters.find((n) => t.format.indexOf(n) !== -1), i = t.strictMode ? e : t.delimiters.find((n) => r.indexOf(n) !== -1), a = D(r.split(i), t.format.toLowerCase().split(e)), f = {};
    for (const [n, o] of a) {
      if (n.length !== o.length)
        return !1;
      f[o.charAt(0)] = n;
    }
    return new Date(`${f.m}/${f.d}/${f.y}`).getDate() === +f.d;
  }
  return t.strictMode ? !1 : l("Date")(r);
}
function w(r, t) {
  const e = [], i = Math.min(r.length, t.length);
  for (let a = 0; a < i; a++)
    e.push([r[a], t[a]]);
  return e;
}
function $(r, t, e) {
  const i = t.delimiters.find((o) => t.format.indexOf(o) !== -1), a = t.strictMode ? i : t.delimiters.find((o) => r.indexOf(o) !== -1), f = w(r.split(a), t.format.toLowerCase().split(i)), n = {};
  for (const [o, c] of f) {
    if (o.length !== c.length)
      throw new SyntaxError(`${t.format} format is error`);
    n[c.charAt(0)] = o;
  }
  return e.format.replace(/(y{4}|y{2})/gi, n.y).replace(/(m{1,2})/gi, n.m).replace(/(d{1,2})/gi, n.d);
}
function M(r, t) {
  const e = r.getFullYear();
  return t.format.replace(/(y{4}|y{2})/gi, e + "").replace(/(m{1,2})/gi, (a) => a.length === 1 ? String(r.getMonth() + 1) : String(r.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (a) => a.length === 1 ? String(r.getDate()) : String(r.getDate()).padStart(2, "0"));
}
function x(r) {
  if (!s.isValidDateFormat(r.format))
    throw new SyntaxError(`${r.format} is not valid date format`);
  return function(t, e) {
    if (e = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1,
      ...e
    }, !S(t, e))
      throw new SyntaxError(`${t} is not valid date`);
    if (l("String")(t))
      return $(t, e, r);
    if (l("Date")(t))
      return M(t, r);
  };
}
export {
  x as default
};
