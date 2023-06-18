var a = Object.defineProperty;
var s = (r, t, n) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var e = (r, t, n) => (s(r, typeof t != "symbol" ? t + "" : t, n), n);
function i(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function o(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${i(r)}]`;
  };
}
function f(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${i(r)}]`;
  };
}
o("Function");
o("Object");
class c {
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
    if (f("string")(t))
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
e(c, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function u(r) {
  const t = c.isString(r);
  return t === null || t.length === 0;
}
function y(r, t) {
  return u(r) || u(t) ? r : t.concat(r).concat(t);
}
export {
  y as default
};
