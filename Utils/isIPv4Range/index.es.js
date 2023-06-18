var h = Object.defineProperty;
var y = (e, t, n) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var o = (e, t, n) => (y(e, typeof t != "symbol" ? t + "" : t, n), n);
function c(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function l(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(e)}]`;
  };
}
function p(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(e)}]`;
  };
}
const a = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", $ = `(${a}[.]){3}${a}`, d = new RegExp(`^${$}$`);
function w(e) {
  return i.isString(e) === null ? !1 : d.test(e);
}
function E(e, t, n = !1) {
  if (e !== null && t !== null) {
    const r = t.length;
    return r > e.length ? !1 : S(e, n, 0, t, 0, r);
  } else
    return e === t;
}
function S(e, t, n, r, f, g) {
  t && (e = e.toLowerCase(), r = r.toLowerCase());
  const m = n + g;
  let s = 0;
  for (let u = n; u < m; u++) {
    if (e.charAt(u) !== r.charAt(f + s))
      return !1;
    s++;
  }
  return !0;
}
l("Function");
l("Object");
class i {
  constructor() {
  }
  static notNull(t, n) {
    if (t === null)
      throw new SyntaxError(n || "The value must not be empty");
  }
  static notEmpty(t, n) {
    if (t.length === 0)
      throw new SyntaxError(n || "The String must not be empty");
  }
  static errMsg(t) {
    return function(n) {
      return `${t}: ${n}`;
    };
  }
  static isString(t) {
    if (t === null)
      return null;
    if (p("string")(t))
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
o(i, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const b = /^\d{1,3}$/;
function T(e) {
  if (i.isString(e) === null)
    return !1;
  const n = e.split("/");
  return n.length !== 2 || !b.test(n[1]) || n[1].length > 1 && E(n[1], "0") || !w(n[0]) ? !1 : Number(n[1]) <= 32 && Number(n[1]) >= 0;
}
export {
  T as default
};
