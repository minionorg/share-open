var l = Object.defineProperty;
var a = (n, t, e) => t in n ? l(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var i = (n, t, e) => (a(n, typeof t != "symbol" ? t + "" : t, e), e);
const o = function(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}, s = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(n)}]`;
  };
};
s("Function");
s("Object");
const f = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(n)}]`;
  };
};
class c {
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
i(c, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function u(n) {
  const t = c.isString(n);
  return t === null || t.length === 0;
}
function m(n, t = null) {
  if (u(n))
    return n;
  if (typeof t == "number")
    if (t >= 32 && t < 127) {
      const e = String.fromCharCode(t), r = n.lastIndexOf(e);
      return r === -1 ? n : n.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (u(t))
      return "";
    if (typeof t == "string") {
      const e = n.lastIndexOf(t);
      return e === -1 ? n : n.substring(0, e);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
export {
  m as default
};
