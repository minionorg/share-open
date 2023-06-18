var p = Object.defineProperty;
var f = (r, t, e) => t in r ? p(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var u = (r, t, e) => (f(r, typeof t != "symbol" ? t + "" : t, e), e);
function a(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function c(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${a(r)}]`;
  };
}
function y(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${a(r)}]`;
  };
}
c("Function");
c("Object");
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
    if (y("string")(t))
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
function h(r, t) {
  const e = s.isString(r);
  if ([null, "", ".", ",", "-", "+"].includes(e))
    return !1;
  const l = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"), n = t || {}, i = Object.prototype.hasOwnProperty, o = parseFloat(e.replace(",", "."));
  return l.test(r) && (!i.call(n, "min") || o >= n.min) && (!i.call(n, "max") || o <= n.max) && (!i.call(n, "lt") || o < n.lt) && (!i.call(n, "gt") || o > n.gt);
}
export {
  h as default
};
