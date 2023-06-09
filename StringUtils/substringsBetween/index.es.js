var m = Object.defineProperty;
var E = (n, t, e) => t in n ? m(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var a = (n, t, e) => (E(n, typeof t != "symbol" ? t + "" : t, e), e);
const y = function(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}, p = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${y(n)}]`;
  };
};
p("Function");
p("Object");
const b = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${y(n)}]`;
  };
};
class g {
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
    if (b("string")(t))
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
a(g, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function f(n) {
  const t = g.isString(n);
  return t === null || t.length === 0;
}
function S(n, t, e) {
  if (n === null || f(t) || f(e))
    return null;
  const o = n.length;
  if (o === 0)
    return [];
  {
    const s = e.length, h = t.length, u = [];
    let r;
    for (let i = 0; i < o - s; i = r + s) {
      const c = n.indexOf(t, i);
      if (c < 0)
        break;
      const l = c + h;
      if (r = n.indexOf(e, l), r < 0)
        break;
      u.push(n.substring(l, r));
    }
    return u.length === 0 ? null : u;
  }
}
export {
  S as default
};
