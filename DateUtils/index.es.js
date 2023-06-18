var $ = Object.defineProperty;
var M = (e, t, r) => t in e ? $(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var g = (e, t, r) => (M(e, typeof t != "symbol" ? t + "" : t, r), r);
function h(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function w(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${h(e)}]`;
  };
}
function s(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${h(e)}]`;
  };
}
w("Function");
w("Object");
class u {
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
g(u, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function d(e, t) {
  if (u.isString(e) === null)
    return !1;
  const n = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, o = /^[-+]?[0-9]+$/, a = t || {}, i = Object.prototype.hasOwnProperty, f = (Object.prototype.hasOwnProperty.call(a, "zeroes") && !a.zeroes ? n : o).test(e), l = parseInt(e, 10);
  return f && (!i.call(a, "min") || l >= a.min) && (!i.call(a, "max") || l <= a.max) && (!i.call(a, "lt") || l < a.lt) && (!i.call(a, "gt") || l > a.gt);
}
function T(e, t) {
  if (!s("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!d(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setDate(r.getDate() + (s("Number")(t) ? t : +t)), r;
}
function x(e, t) {
  if (!s("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!d(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setHours(r.getHours() + (s("Number")(t) ? t : +t)), r;
}
function E(e, t) {
  if (!s("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!d(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setMinutes(r.getMinutes() + (s("Number")(t) ? t : +t)), r;
}
function F(e, t) {
  if (!s("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!d(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setSeconds(r.getSeconds() + (s("Number")(t) ? t : +t)), r;
}
function Y(e, t = 0, r = 0, n = 0, o = 0) {
  if (!s("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!d(t + "") || !d(r + "") || !d(n + "") || !d(o + ""))
    throw new SyntaxError("Invalid time values");
  const a = new Date(e.getTime());
  return a.setDate(a.getDate() + (s("Number")(t) ? t : +t)), a.setHours(a.getHours() + (s("Number")(r) ? r : +r)), a.setMinutes(a.getMinutes() + (s("Number")(n) ? n : +n)), a.setSeconds(a.getSeconds() + (s("Number")(o) ? o : +o)), a;
}
function b(e) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    e
  );
}
function v(e, t) {
  const r = [], n = Math.min(e.length, t.length);
  for (let o = 0; o < n; o++)
    r.push([e[o], t[o]]);
  return r;
}
function m(e, t) {
  if (t = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...t
  }, s("String")(e) && b(t.format)) {
    const r = t.delimiters.find((i) => t.format.indexOf(i) !== -1), n = t.strictMode ? r : t.delimiters.find((i) => e.indexOf(i) !== -1), o = v(e.split(n), t.format.toLowerCase().split(r)), a = {};
    for (const [i, c] of o) {
      if (i.length !== c.length)
        return !1;
      a[c.charAt(0)] = i;
    }
    return new Date(`${a.m}/${a.d}/${a.y}`).getDate() === +a.d;
  }
  return t.strictMode ? !1 : s("Date")(e);
}
function I(e, t) {
  const r = [], n = Math.min(e.length, t.length);
  for (let o = 0; o < n; o++)
    r.push([e[o], t[o]]);
  return r;
}
function A(e, t, r) {
  const n = t.delimiters.find((c) => t.format.indexOf(c) !== -1), o = t.strictMode ? n : t.delimiters.find((c) => e.indexOf(c) !== -1), a = I(e.split(o), t.format.toLowerCase().split(n)), i = {};
  for (const [c, f] of a) {
    if (c.length !== f.length)
      throw new SyntaxError(`${t.format} format is error`);
    i[f.charAt(0)] = c;
  }
  return r.format.replace(/(y{4}|y{2})/gi, i.y).replace(/(m{1,2})/gi, i.m).replace(/(d{1,2})/gi, i.d);
}
function p(e, t) {
  const r = e.getFullYear();
  return t.format.replace(/(y{4}|y{2})/gi, r + "").replace(/(m{1,2})/gi, (o) => o.length === 1 ? String(e.getMonth() + 1) : String(e.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (o) => o.length === 1 ? String(e.getDate()) : String(e.getDate()).padStart(2, "0"));
}
function D(e) {
  if (!u.isValidDateFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid date format`);
  return function(t, r) {
    if (r = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1,
      ...r
    }, !m(t, r))
      throw new SyntaxError(`${t} is not valid date`);
    if (s("String")(t))
      return A(t, r, e);
    if (s("Date")(t))
      return p(t, e);
  };
}
function C(e, t, r) {
  const n = r || {
    start: void 0,
    finish: void 0
  };
  if (!m(e, n.start) || !m(t, n.finish))
    throw new SyntaxError("Invalid date values");
  const o = D({
    format: "YYYY/MM/DD"
  }), a = 24 * 60 * 60 * 1e3, i = new Date(o(e, n.start)), c = new Date(o(t, n.finish)), f = Math.abs(c.getTime() - i.getTime());
  return Math.ceil(f / a);
}
function S(e) {
  return new Date(e.getFullYear(), 2, 0).getDate() === 29;
}
function N(e) {
  switch (e.getMonth()) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return S(e) ? 29 : 28;
    default:
      return 30;
  }
}
function P(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function H(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
const j = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function U(e, t) {
  if (!s("String")(e))
    return !1;
  if (t = {
    format: "HH:MM:SS",
    mode: 24,
    ...t
  }, !u.isTimeFormat(t.format))
    throw new SyntaxError(`${t.format} is not valid format`);
  if (![24, 12].includes(t.mode))
    throw new SyntaxError(`${t.mode} is not valid mode`);
  const r = t.format.match(/s/ig), n = r && r.length > 0;
  return j[t.mode][n ? "hasSecond" : "default"].test(e);
}
const O = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function y(e, t, r) {
  let n;
  for (const o in t)
    if (["12", "24"].includes(o)) {
      const a = y(e, t[o], o);
      a && (n = a);
    } else if (t[o].test(e))
      return {
        mode: r,
        format: o,
        matches: e.match(t[o])
      };
  return n;
}
function L(e) {
  if (!u.isTimeFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid format`);
  if (![24, 12].includes(e.mode))
    throw new SyntaxError(`${e.mode} is not valid mode`);
  return function(t) {
    const r = y(t, O, void 0);
    if (!r)
      throw new SyntaxError(`${t} is not valid time`);
    const n = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (r.mode === "12") {
      const [a, i, c, f] = [...r.matches].splice(1, 4);
      n.h = a, n.m = i, n.s = c, n.b = f, e.mode === 24 && f === "P" && (n.h = +a + 12 + "");
    } else if (r.mode === "24") {
      const [a, i, c] = [...r.matches].splice(1, 3);
      n.h = a, n.m = i, n.s = c;
    }
    if (e.mode === 12 && !n.b) {
      const a = +n.h;
      a > 12 ? (n.h = a - 12 + "", n.b = "P") : n.b = "A";
    }
    let o = e.format.replace(/(h{1,2})/gi, n.h).replace(/(m{1,2})/gi, n.m).replace(n.s ? /(s{1,2})/gi : /:(s{1,2})/gi, n.s ? n.s : "");
    return e.mode === 12 && n.b && (o += ` ${n.b}M`), o;
  };
}
function V(e) {
  const t = new Date(e.getTime()), r = t.getUTCFullYear(), n = String(t.getUTCMonth() + 1).padStart(2, "0"), o = String(t.getUTCDate()).padStart(2, "0"), a = String(t.getUTCHours()).padStart(2, "0"), i = String(t.getUTCMinutes()).padStart(2, "0"), c = String(t.getUTCSeconds()).padStart(2, "0"), f = String((t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5)).padStart(3, "0");
  return `${r}-${n}-${o}T${a}:${i}:${c}.${f}Z`;
}
const _ = {
  addDays: T,
  addHours: x,
  addMinutes: E,
  addSecs: F,
  addTime: Y,
  dateFormatHoc: D,
  getDatePeriod: C,
  getDaysInMonth: N,
  getFirstDateInMonth: P,
  getLastDateInMonth: H,
  isDate: m,
  isLeapYear: S,
  isTime: U,
  timeFormatHoc: L,
  toISOString: V
};
export {
  T as addDays,
  x as addHours,
  E as addMinutes,
  F as addSecs,
  Y as addTime,
  D as dateFormatHoc,
  _ as default,
  C as getDatePeriod,
  N as getDaysInMonth,
  P as getFirstDateInMonth,
  H as getLastDateInMonth,
  m as isDate,
  S as isLeapYear,
  U as isTime,
  L as timeFormatHoc,
  V as toISOString
};
