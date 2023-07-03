var g = Object.defineProperty;
var h = (e, t, r) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var u = (e, t, r) => (h(e, typeof t != "symbol" ? t + "" : t, r), r);
function a(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function c(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${a(e)}]`;
  };
}
function s(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${a(e)}]`;
  };
}
c("Function");
c("Object");
class l {
  constructor() {
  }
  static notNull(t, r) {
    if (t === null)
      throw new SyntaxError(r || "The value must not be empty");
  }
  static notEmpty(t, r) {
    if (t.length === 0)
      throw new SyntaxError(r || "The String must not be empty");
  }
  static errMsg(t) {
    return function(r) {
      return `${t}: ${r}`;
    };
  }
  static isString(t) {
    if (t === null)
      return null;
    if (s("string")(t))
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
u(l, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function m(e, t) {
  if (l.isString(e) === null)
    return !1;
  const f = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, p = /^[-+]?[0-9]+$/, n = t || {}, o = Object.prototype.hasOwnProperty, y = (Object.prototype.hasOwnProperty.call(n, "zeroes") && !n.zeroes ? f : p).test(e), i = parseInt(e, 10);
  return y && (!o.call(n, "min") || i >= n.min) && (!o.call(n, "max") || i <= n.max) && (!o.call(n, "lt") || i < n.lt) && (!o.call(n, "gt") || i > n.gt);
}
function $(e, t) {
  if (!s("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setMonth(r.getMonth() + (s("Number")(t) ? t : +t)), r;
}
export {
  $ as default
};
