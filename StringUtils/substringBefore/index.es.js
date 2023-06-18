var l = Object.defineProperty;
var f = (e, t, n) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t, n) => (f(e, typeof t != "symbol" ? t + "" : t, n), n);
function o(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function s(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(e)}]`;
  };
}
function a(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(e)}]`;
  };
}
s("Function");
s("Object");
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
    if (a("string")(t))
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
i(c, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function u(e) {
  const t = c.isString(e);
  return t === null || t.length === 0;
}
function m(e, t = null) {
  if (u(e))
    return e;
  if (typeof t == "number")
    if (t >= 32 && t < 127) {
      const n = String.fromCharCode(t), r = e.indexOf(n);
      return r == -1 ? e : e.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (u(t))
      return "";
    if (typeof t == "string") {
      const n = e.indexOf(t);
      return n == -1 ? e : e.substring(0, n);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
export {
  m as default
};
