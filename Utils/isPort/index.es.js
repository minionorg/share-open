var y = Object.defineProperty;
var m = (r, t, e) => t in r ? y(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var u = (r, t, e) => (m(r, typeof t != "symbol" ? t + "" : t, e), e);
function s(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function c(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${s(r)}]`;
  };
}
function g(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${s(r)}]`;
  };
}
c("Function");
c("Object");
class a {
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
    if (g("string")(t))
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
  if (a.isString(r) === null)
    return !1;
  const l = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, f = /^[-+]?[0-9]+$/, n = t || {}, o = Object.prototype.hasOwnProperty, p = (Object.prototype.hasOwnProperty.call(n, "zeroes") && !n.zeroes ? l : f).test(r), i = parseInt(r, 10);
  return p && (!o.call(n, "min") || i >= n.min) && (!o.call(n, "max") || i <= n.max) && (!o.call(n, "lt") || i < n.lt) && (!o.call(n, "gt") || i > n.gt);
}
function E(r) {
  return h(r, { min: 0, max: 65535 });
}
export {
  E as default
};
