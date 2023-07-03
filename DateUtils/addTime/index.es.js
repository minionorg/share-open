var d = Object.defineProperty;
var g = (e, t, r) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var f = (e, t, r) => (g(e, typeof t != "symbol" ? t + "" : t, r), r);
function y(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function h(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${y(e)}]`;
  };
}
function o(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${y(e)}]`;
  };
}
h("Function");
h("Object");
class p {
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
    if (o("string")(t))
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
f(p, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function a(e, t) {
  if (p.isString(e) === null)
    return !1;
  const c = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, u = /^[-+]?[0-9]+$/, i = t || {}, s = Object.prototype.hasOwnProperty, l = (Object.prototype.hasOwnProperty.call(i, "zeroes") && !i.zeroes ? c : u).test(e), n = parseInt(e, 10);
  return l && (!s.call(i, "min") || n >= i.min) && (!s.call(i, "max") || n <= i.max) && (!s.call(i, "lt") || n < i.lt) && (!s.call(i, "gt") || n > i.gt);
}
function D(e, t) {
  if (!o("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!a(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setFullYear(r.getFullYear() + (o("Number")(t) ? t : +t)), r;
}
function E(e, t) {
  if (!o("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!a(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setMonth(r.getMonth() + (o("Number")(t) ? t : +t)), r;
}
function T(e, t) {
  if (!o("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!a(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setDate(r.getDate() + (o("Number")(t) ? t : +t)), r;
}
function $(e, t) {
  if (!o("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!a(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setHours(r.getHours() + (o("Number")(t) ? t : +t)), r;
}
function m(e, t) {
  if (!o("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!a(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setMinutes(r.getMinutes() + (o("Number")(t) ? t : +t)), r;
}
function S(e, t) {
  if (!o("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!a(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setSeconds(r.getSeconds() + (o("Number")(t) ? t : +t)), r;
}
function x(e, t) {
  if (!o("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  const r = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  }, { years: c, months: u, days: i, hours: s, mins: w, secs: l } = {
    ...r,
    ...t
  };
  if (!a(c + "") || !a(u + "") || !a(i + "") || !a(s + "") || !a(w + "") || !a(l + ""))
    throw new SyntaxError("Invalid time values");
  let n = new Date(e.getTime());
  return n = D(n, c), n = E(n, u), n = T(n, i), n = $(n, s), n = m(n, w), n = S(n, l), n;
}
export {
  x as default
};
