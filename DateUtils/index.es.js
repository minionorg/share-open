var S = Object.defineProperty;
var $ = (e, t, r) => t in e ? S(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var m = (e, t, r) => ($(e, typeof t != "symbol" ? t + "" : t, r), r);
const l = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, u = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${l(e)}]`;
  };
};
class d {
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
m(d, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
u("Function");
u("Object");
const f = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${l(e)}]`;
  };
};
function w(e) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    e
  );
}
function D(e, t) {
  const r = [], n = Math.min(e.length, t.length);
  for (let a = 0; a < n; a++)
    r.push([e[a], t[a]]);
  return r;
}
function h(e, t = { format: "YYYY/MM/DD", delimiters: ["/", "-"], strictMode: !1 }) {
  if (t = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...t
  }, f("String")(e) && w(t.format)) {
    const r = t.delimiters.find((i) => t.format.indexOf(i) !== -1), n = t.strictMode ? r : t.delimiters.find((i) => e.indexOf(i) !== -1), a = D(e.split(n), t.format.toLowerCase().split(r)), o = {};
    for (const [i, s] of a) {
      if (i.length !== s.length)
        return !1;
      o[s.charAt(0)] = i;
    }
    return new Date(`${o.m}/${o.d}/${o.y}`).getDate() === +o.d;
  }
  return t.strictMode ? !1 : f("Date")(e);
}
function M(e, t) {
  const r = [], n = Math.min(e.length, t.length);
  for (let a = 0; a < n; a++)
    r.push([e[a], t[a]]);
  return r;
}
function b(e, t, r) {
  const n = t.delimiters.find((s) => t.format.indexOf(s) !== -1), a = t.strictMode ? n : t.delimiters.find((s) => e.indexOf(s) !== -1), o = M(e.split(a), t.format.toLowerCase().split(n)), i = {};
  for (const [s, c] of o) {
    if (s.length !== c.length)
      throw new SyntaxError(`${t.format} format is error`);
    i[c.charAt(0)] = s;
  }
  return r.format.replace(/(y{4}|y{2})/gi, i.y).replace(/(m{1,2})/gi, i.m).replace(/(d{1,2})/gi, i.d);
}
function E(e, t) {
  const r = e.getFullYear();
  return t.format.replace(/(y{4}|y{2})/gi, r + "").replace(/(m{1,2})/gi, (a) => a.length === 1 ? String(e.getMonth() + 1) : String(e.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (a) => a.length === 1 ? String(e.getDate()) : String(e.getDate()).padStart(2, "0"));
}
function F(e) {
  if (!d.isValidDateFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid date format`);
  return function(t, r) {
    if (r = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1,
      ...r
    }, !h(t, r))
      throw new SyntaxError(`${t} is not valid date`);
    if (f("String")(t))
      return b(t, r, e);
    if (f("Date")(t))
      return E(t, e);
  };
}
const x = function(e, t) {
  return Math.abs(e * 1 - t * 1) / (24 * 60 * 60 * 1e3);
}, g = function(e) {
  return new Date(e.getFullYear(), 2, 0).getDate() === 29;
}, Y = function(e) {
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
      return g(e) ? 29 : 28;
    default:
      return 30;
  }
}, A = function(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}, T = function(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}, j = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function C(e, t) {
  if (!f("String")(e))
    return !1;
  if (t = {
    format: "HH:MM:SS",
    mode: 24,
    ...t
  }, !d.isTimeFormat(t.format))
    throw new SyntaxError(`${t.format} is not valid format`);
  if (![24, 12].includes(t.mode))
    throw new SyntaxError(`${t.mode} is not valid mode`);
  const r = t.format.match(/s/ig), n = r && r.length > 0;
  return j[t.mode][n ? "hasSecond" : "default"].test(e);
}
const P = {
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
  for (const a in t)
    if (["12", "24"].includes(a)) {
      const o = y(e, t[a], a);
      o && (n = o);
    } else if (t[a].test(e))
      return {
        mode: r,
        format: a,
        matches: e.match(t[a])
      };
  return n;
}
function H(e) {
  if (!d.isTimeFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid format`);
  if (![24, 12].includes(e.mode))
    throw new SyntaxError(`${e.mode} is not valid mode`);
  return function(t) {
    const r = y(t, P, void 0);
    if (!r)
      throw new SyntaxError(`${t} is not valid time`);
    const n = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (r.mode === "12") {
      const [o, i, s, c] = [...r.matches].splice(1, 4);
      n.h = o, n.m = i, n.s = s, n.b = c, e.mode === 24 && c === "P" && (n.h = +o + 12 + "");
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
const N = {
  dateFormatHoc: F,
  getDatePeriod: x,
  getDaysInMonth: Y,
  getFirstDateInMonth: A,
  getLastDateInMonth: T,
  isDate: h,
  isLeapYear: g,
  isTime: C,
  timeFormatHoc: H
};
export {
  F as dateFormatHoc,
  N as default,
  x as getDatePeriod,
  Y as getDaysInMonth,
  A as getFirstDateInMonth,
  T as getLastDateInMonth,
  h as isDate,
  g as isLeapYear,
  C as isTime,
  H as timeFormatHoc
};
