var p = Object.defineProperty;
var f = (r, t, n) => t in r ? p(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var u = (r, t, n) => (f(r, typeof t != "symbol" ? t + "" : t, n), n);
const c = function(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}, s = function(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(r)}]`;
  };
};
s("Function");
s("Object");
const y = function(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(r)}]`;
  };
};
class a {
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
u(a, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function h(r, t) {
  const n = a.isString(r);
  if ([null, "", ".", ",", "-", "+"].includes(n))
    return !1;
  const l = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"), e = t || {}, o = Object.prototype.hasOwnProperty, i = parseFloat(n.replace(",", "."));
  return l.test(r) && (!o.call(e, "min") || i >= e.min) && (!o.call(e, "max") || i <= e.max) && (!o.call(e, "lt") || i < e.lt) && (!o.call(e, "gt") || i > e.gt);
}
export {
  h as default
};
