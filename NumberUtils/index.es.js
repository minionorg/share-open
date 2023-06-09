var m = Object.defineProperty;
var g = (e, t, n) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var u = (e, t, n) => (g(e, typeof t != "symbol" ? t + "" : t, n), n);
const l = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, p = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${l(e)}]`;
  };
};
function h(e, t) {
  if (a.isString(e) === null)
    return !1;
  const c = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, o = /^[-+]?[0-9]+$/, r = t || {}, s = Object.prototype.hasOwnProperty, y = (Object.prototype.hasOwnProperty.call(r, "zeroes") && !r.zeroes ? c : o).test(e), i = parseInt(e, 10);
  return y && (!s.call(r, "min") || i >= r.min) && (!s.call(r, "max") || i <= r.max) && (!s.call(r, "lt") || i < r.lt) && (!s.call(r, "gt") || i > r.gt);
}
p("Function");
p("Object");
const w = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${l(e)}]`;
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
    if (w("string")(t))
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
function x(e, t) {
  const n = a.isString(e);
  if ([null, "", ".", ",", "-", "+"].includes(n))
    return !1;
  const c = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"), o = t || {}, r = Object.prototype.hasOwnProperty, s = parseFloat(n.replace(",", "."));
  return c.test(e) && (!r.call(o, "min") || s >= o.min) && (!r.call(o, "max") || s <= o.max) && (!r.call(o, "lt") || s < o.lt) && (!r.call(o, "gt") || s > o.gt);
}
const O = {
  isFloat: x,
  isInteger: h
};
export {
  O as default,
  x as isFloat,
  h as isInteger
};
