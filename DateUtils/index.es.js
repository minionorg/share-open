var v = Object.defineProperty;
var I = (e, t, r) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var h = (e, t, r) => (I(e, typeof t != "symbol" ? t + "" : t, r), r);
function g(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function w(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${g(e)}]`;
  };
}
function f(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${g(e)}]`;
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
h(u, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function l(e, t) {
  if (u.isString(e) === null)
    return !1;
  const n = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, a = /^[-+]?[0-9]+$/, o = t || {}, i = Object.prototype.hasOwnProperty, d = (Object.prototype.hasOwnProperty.call(o, "zeroes") && !o.zeroes ? n : a).test(e), c = parseInt(e, 10);
  return d && (!i.call(o, "min") || c >= o.min) && (!i.call(o, "max") || c <= o.max) && (!i.call(o, "lt") || c < o.lt) && (!i.call(o, "gt") || c > o.gt);
}
function y(e, t) {
  if (!f("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!l(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setDate(r.getDate() + (f("Number")(t) ? t : +t)), r;
}
function D(e, t) {
  if (!f("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!l(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setHours(r.getHours() + (f("Number")(t) ? t : +t)), r;
}
function S(e, t) {
  if (!f("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!l(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setMinutes(r.getMinutes() + (f("Number")(t) ? t : +t)), r;
}
function $(e, t) {
  if (!f("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!l(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setMonth(r.getMonth() + (f("Number")(t) ? t : +t)), r;
}
function M(e, t) {
  if (!f("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!l(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setSeconds(r.getSeconds() + (f("Number")(t) ? t : +t)), r;
}
function T(e, t) {
  if (!f("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!l(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const r = new Date(e.getTime());
  return r.setFullYear(r.getFullYear() + (f("Number")(t) ? t : +t)), r;
}
function Y(e, t) {
  if (!f("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  const r = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  }, { years: n, months: a, days: o, hours: i, mins: s, secs: d } = {
    ...r,
    ...t
  };
  if (!l(n + "") || !l(a + "") || !l(o + "") || !l(i + "") || !l(s + "") || !l(d + ""))
    throw new SyntaxError("Invalid time values");
  let c = new Date(e.getTime());
  return c = T(c, n), c = $(c, a), c = y(c, o), c = D(c, i), c = S(c, s), c = M(c, d), c;
}
function p(e) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    e
  );
}
function A(e, t) {
  const r = [], n = Math.min(e.length, t.length);
  for (let a = 0; a < n; a++)
    r.push([e[a], t[a]]);
  return r;
}
function m(e, t) {
  if (t = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...t
  }, f("String")(e) && p(t.format)) {
    const r = t.delimiters.find((i) => t.format.indexOf(i) !== -1), n = t.strictMode ? r : t.delimiters.find((i) => e.indexOf(i) !== -1), a = A(e.split(n), t.format.toLowerCase().split(r)), o = {};
    for (const [i, s] of a) {
      if (i.length !== s.length)
        return !1;
      o[s.charAt(0)] = i;
    }
    return new Date(`${o.m}/${o.d}/${o.y}`).getDate() === +o.d;
  }
  return t.strictMode ? !1 : f("Date")(e);
}
function C(e, t) {
  const r = [], n = Math.min(e.length, t.length);
  for (let a = 0; a < n; a++)
    r.push([e[a], t[a]]);
  return r;
}
function P(e, t, r) {
  const n = t.delimiters.find((s) => t.format.indexOf(s) !== -1), a = t.strictMode ? n : t.delimiters.find((s) => e.indexOf(s) !== -1), o = C(e.split(a), t.format.toLowerCase().split(n)), i = {};
  for (const [s, d] of o) {
    if (s.length !== d.length)
      throw new SyntaxError(`${t.format} format is error`);
    i[d.charAt(0)] = s;
  }
  return r.format.replace(/(y{4}|y{2})/gi, i.y).replace(/(m{1,2})/gi, i.m).replace(/(d{1,2})/gi, i.d);
}
function j(e, t) {
  const r = e.getFullYear();
  return t.format.replace(/(y{4}|y{2})/gi, r + "").replace(/(m{1,2})/gi, (a) => a.length === 1 ? String(e.getMonth() + 1) : String(e.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (a) => a.length === 1 ? String(e.getDate()) : String(e.getDate()).padStart(2, "0"));
}
function E(e) {
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
    if (f("String")(t))
      return P(t, r, e);
    if (f("Date")(t))
      return j(t, e);
  };
}
function N(e, t, r) {
  const n = r || {
    start: void 0,
    finish: void 0
  };
  if (!m(e, n.start) || !m(t, n.finish))
    throw new SyntaxError("Invalid date values");
  const a = E({
    format: "YYYY/MM/DD"
  }), o = 24 * 60 * 60 * 1e3, i = new Date(a(e, n.start)), s = new Date(a(t, n.finish)), d = Math.abs(s.getTime() - i.getTime());
  return Math.ceil(d / o);
}
function x(e) {
  return new Date(e.getFullYear(), 2, 0).getDate() === 29;
}
function b(e) {
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
      return x(e) ? 29 : 28;
    default:
      return 30;
  }
}
function H(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function U(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
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
function L(e, t) {
  if (!f("String")(e))
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
  return O[t.mode][n ? "hasSecond" : "default"].test(e);
}
const V = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function F(e, t, r) {
  let n;
  for (const a in t)
    if (["12", "24"].includes(a)) {
      const o = F(e, t[a], a);
      o && (n = o);
    } else if (t[a].test(e))
      return {
        mode: r,
        format: a,
        matches: e.match(t[a])
      };
  return n;
}
function W(e) {
  if (!u.isTimeFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid format`);
  if (![24, 12].includes(e.mode))
    throw new SyntaxError(`${e.mode} is not valid mode`);
  return function(t) {
    const r = F(t, V, void 0);
    if (!r)
      throw new SyntaxError(`${t} is not valid time`);
    const n = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (r.mode === "12") {
      const [o, i, s, d] = [...r.matches].splice(1, 4);
      n.h = o, n.m = i, n.s = s, n.b = d, e.mode === 24 && d === "P" && (n.h = +o + 12 + "");
    } else if (r.mode === "24") {
      const [o, i, s] = [...r.matches].splice(1, 3);
      n.h = o, n.m = i, n.s = s;
    }
    if (e.mode === 12 && !n.b) {
      const o = +n.h;
      o > 12 ? (n.h = o - 12 + "", n.b = "P") : n.b = "A";
    }
    let a = e.format.replace(/(h{1,2})/gi, n.h).replace(/(m{1,2})/gi, n.m).replace(n.s ? /(s{1,2})/gi : /:(s{1,2})/gi, n.s ? n.s : "");
    return e.mode === 12 && n.b && (a += ` ${n.b}M`), a;
  };
}
function _(e) {
  const t = new Date(e.getTime()), r = t.getUTCFullYear(), n = String(t.getUTCMonth() + 1).padStart(2, "0"), a = String(t.getUTCDate()).padStart(2, "0"), o = String(t.getUTCHours()).padStart(2, "0"), i = String(t.getUTCMinutes()).padStart(2, "0"), s = String(t.getUTCSeconds()).padStart(2, "0"), d = String((t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5)).padStart(3, "0");
  return `${r}-${n}-${a}T${o}:${i}:${s}.${d}Z`;
}
const B = {
  addDays: y,
  addHours: D,
  addMinutes: S,
  addMonths: $,
  addSecs: M,
  addTime: Y,
  addYears: T,
  dateFormatHoc: E,
  getDatePeriod: N,
  getDaysInMonth: b,
  getFirstDateInMonth: H,
  getLastDateInMonth: U,
  isDate: m,
  isLeapYear: x,
  isTime: L,
  timeFormatHoc: W,
  toISOString: _
};
export {
  y as addDays,
  D as addHours,
  S as addMinutes,
  $ as addMonths,
  M as addSecs,
  Y as addTime,
  T as addYears,
  E as dateFormatHoc,
  B as default,
  N as getDatePeriod,
  b as getDaysInMonth,
  H as getFirstDateInMonth,
  U as getLastDateInMonth,
  m as isDate,
  x as isLeapYear,
  L as isTime,
  W as timeFormatHoc,
  _ as toISOString
};
