var c = Object.defineProperty;
var a = (r, t, e) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var u = (r, t, e) => (a(r, typeof t != "symbol" ? t + "" : t, e), e);
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
class n {
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
u(n, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function y(r, t) {
  const e = n.isString(r), s = n.isString(t);
  return e === s;
}
export {
  y as default
};
