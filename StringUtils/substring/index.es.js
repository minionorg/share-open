var a = Object.defineProperty;
var l = (r, t, n) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var i = (r, t, n) => (l(r, typeof t != "symbol" ? t + "" : t, n), n);
function o(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function c(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(r)}]`;
  };
}
function s(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(r)}]`;
  };
}
s("Function");
s("Object");
class f {
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
i(f, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function y(r) {
  const t = f.isString(r);
  return t === null ? 0 : t.length;
}
function p(r, t = 0, n = 0) {
  if (r === null)
    return r;
  const u = c("Number");
  if (!u(t) || !u(n))
    throw new TypeError("The start or end paramter type is number");
  const e = y(r);
  return n < 0 && (n = e + n), t < 0 && (t = e + t), n > e && (n = e), t > n ? "" : (t < 0 && (t = 0), n < 0 && (n = 0), r.substring(t, n));
}
export {
  p as default
};
