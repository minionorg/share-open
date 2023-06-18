var y = Object.defineProperty;
var w = (e, t, n) => t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var l = (e, t, n) => (w(e, typeof t != "symbol" ? t + "" : t, n), n);
function f(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function p(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${f(e)}]`;
  };
}
function u(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${f(e)}]`;
  };
}
p("Function");
p("Object");
class m {
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
    if (u("string")(t))
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
l(m, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function s(e, t) {
  if (m.isString(e) === null)
    return !1;
  const o = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, i = /^[-+]?[0-9]+$/, r = t || {}, a = Object.prototype.hasOwnProperty, g = (Object.prototype.hasOwnProperty.call(r, "zeroes") && !r.zeroes ? o : i).test(e), c = parseInt(e, 10);
  return g && (!a.call(r, "min") || c >= r.min) && (!a.call(r, "max") || c <= r.max) && (!a.call(r, "lt") || c < r.lt) && (!a.call(r, "gt") || c > r.gt);
}
function b(e, t = 0, n = 0, o = 0, i = 0) {
  if (!u("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!s(t + "") || !s(n + "") || !s(o + "") || !s(i + ""))
    throw new SyntaxError("Invalid time values");
  const r = new Date(e.getTime());
  return r.setDate(r.getDate() + (u("Number")(t) ? t : +t)), r.setHours(r.getHours() + (u("Number")(n) ? n : +n)), r.setMinutes(r.getMinutes() + (u("Number")(o) ? o : +o)), r.setSeconds(r.getSeconds() + (u("Number")(i) ? i : +i)), r;
}
export {
  b as default
};
