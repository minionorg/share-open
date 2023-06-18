var h = Object.defineProperty;
var y = (e, t, r) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var u = (e, t, r) => (y(e, typeof t != "symbol" ? t + "" : t, r), r);
function d(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function m(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${d(e)}]`;
  };
}
function c(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${d(e)}]`;
  };
}
class g {
  constructor() {
  }
  static notNull(t, r) {
    if (t === null)
      throw new SyntaxError(r || "The value must not be empty");
  }
  static notEmpty(t, r) {
    if (t.length === 0)
      throw new SyntaxError(r || "The String must not be empty");
  }
  static errMsg(t) {
    return function(r) {
      return `${t}: ${r}`;
    };
  }
  static isString(t) {
    if (t === null)
      return null;
    if (c("string")(t))
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
u(g, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
m("Function");
m("Object");
function D(e) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    e
  );
}
function w(e, t) {
  const r = [], a = Math.min(e.length, t.length);
  for (let n = 0; n < a; n++)
    r.push([e[n], t[n]]);
  return r;
}
function s(e, t) {
  if (t = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...t
  }, c("String")(e) && D(t.format)) {
    const r = t.delimiters.find((i) => t.format.indexOf(i) !== -1), a = t.strictMode ? r : t.delimiters.find((i) => e.indexOf(i) !== -1), n = w(e.split(a), t.format.toLowerCase().split(r)), f = {};
    for (const [i, o] of n) {
      if (i.length !== o.length)
        return !1;
      f[o.charAt(0)] = i;
    }
    return new Date(`${f.m}/${f.d}/${f.y}`).getDate() === +f.d;
  }
  return t.strictMode ? !1 : c("Date")(e);
}
function S(e, t) {
  const r = [], a = Math.min(e.length, t.length);
  for (let n = 0; n < a; n++)
    r.push([e[n], t[n]]);
  return r;
}
function M(e, t, r) {
  const a = t.delimiters.find((o) => t.format.indexOf(o) !== -1), n = t.strictMode ? a : t.delimiters.find((o) => e.indexOf(o) !== -1), f = S(e.split(n), t.format.toLowerCase().split(a)), i = {};
  for (const [o, l] of f) {
    if (o.length !== l.length)
      throw new SyntaxError(`${t.format} format is error`);
    i[l.charAt(0)] = o;
  }
  return r.format.replace(/(y{4}|y{2})/gi, i.y).replace(/(m{1,2})/gi, i.m).replace(/(d{1,2})/gi, i.d);
}
function $(e, t) {
  const r = e.getFullYear();
  return t.format.replace(/(y{4}|y{2})/gi, r + "").replace(/(m{1,2})/gi, (n) => n.length === 1 ? String(e.getMonth() + 1) : String(e.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (n) => n.length === 1 ? String(e.getDate()) : String(e.getDate()).padStart(2, "0"));
}
function E(e) {
  if (!g.isValidDateFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid date format`);
  return function(t, r) {
    if (r = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1,
      ...r
    }, !s(t, r))
      throw new SyntaxError(`${t} is not valid date`);
    if (c("String")(t))
      return M(t, r, e);
    if (c("Date")(t))
      return $(t, e);
  };
}
function A(e, t, r) {
  const a = r || {
    start: void 0,
    finish: void 0
  };
  if (!s(e, a.start) || !s(t, a.finish))
    throw new SyntaxError("Invalid date values");
  const n = E({
    format: "YYYY/MM/DD"
  }), f = 24 * 60 * 60 * 1e3, i = new Date(n(e, a.start)), o = new Date(n(t, a.finish)), l = Math.abs(o.getTime() - i.getTime());
  return Math.ceil(l / f);
}
export {
  A as default
};
