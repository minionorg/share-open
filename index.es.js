var K = Object.defineProperty;
var X = (t, e, n) => e in t ? K(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var w = (t, e, n) => (X(t, typeof e != "symbol" ? e + "" : e, n), n);
const x = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, g = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${x(t)}]`;
  };
};
function J(t, e, n) {
  if (!g("Array")(t))
    throw new TypeError("The list must be array");
  const r = [...t];
  if (n === void 0)
    r.push(e);
  else if (g("Number")(n))
    r.splice(n, 0, e);
  else
    throw new TypeError("The index must be number");
  return r;
}
function Q(t, ...e) {
  const n = g("Array");
  if (n(t)) {
    if (e.length === 0)
      return [...t];
    let r = [...t];
    for (const i of e) {
      if (!n(i))
        throw new SyntaxError(`The ${i} must be array in rest`);
      r = [...r, ...i];
    }
    return r;
  } else
    throw new SyntaxError("The ary must be array");
}
const T = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${x(t)}]`;
  };
}, k = function(t, e) {
  const n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), r = t.match(n);
  return r !== null ? r[2] : null;
}, W = "[\\u2700-\\u27BF]", tt = "[\\uE000-\\uF8FF]", et = "\\uD83C[\\uDC00-\\uDFFF]", nt = "\\uD83D[\\uDC00-\\uDFFF]", rt = "[\\u2011-\\u26FF]", it = "\\uD83E[\\uDD10-\\uDDFF]", st = function(t) {
  return RegExp(
    `(${W}|${tt}|${et}|${nt}|${rt}|${it})`,
    "g"
  ).test(t);
}, ot = function(t) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    t
  );
};
class c {
  constructor() {
  }
  static notNull(e, n) {
    if (e === null)
      throw new SyntaxError(n || "The value must not be empty");
  }
  static notEmpty(e, n) {
    if (e.length === 0)
      throw new SyntaxError(n || "The String must not be empty");
  }
  static errMsg(e) {
    return function(n) {
      return `${e}: ${n}`;
    };
  }
  static isString(e) {
    if (e === null)
      return null;
    if (g("string")(e))
      return e;
    throw new TypeError("The parameter type is string");
  }
  static isValidDateFormat(e) {
    return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
      e
    );
  }
  static isTimeFormat(e) {
    return /(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(e);
  }
}
w(c, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const P = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", m = `(${P}[.]){3}${P}`, ut = new RegExp(`^${m}$`);
function O(t) {
  return c.isString(t) === null ? !1 : ut.test(t);
}
function F(t, e, n = !1) {
  if (t !== null && e !== null) {
    const r = e.length;
    return r > t.length ? !1 : lt(t, n, 0, e, 0, r);
  } else
    return t === e;
}
function lt(t, e, n, r, i, s) {
  e && (t = t.toLowerCase(), r = r.toLowerCase());
  const o = n + s;
  let u = 0;
  for (let a = n; a < o; a++) {
    if (t.charAt(a) !== r.charAt(i + u))
      return !1;
    u++;
  }
  return !0;
}
const ct = /^\d{1,3}$/;
function ft(t) {
  if (c.isString(t) === null)
    return !1;
  const n = t.split("/");
  return n.length !== 2 || !ct.test(n[1]) || n[1].length > 1 && F(n[1], "0") || !O(n[0]) ? !1 : Number(n[1]) <= 32 && Number(n[1]) >= 0;
}
const l = "(?:[0-9a-fA-F]{1,4})", at = new RegExp(
  `^((?:${l}:){7}(?:${l}|:)|(?:${l}:){6}(?:${m}|:${l}|:)|(?:${l}:){5}(?::${m}|(:${l}){1,2}|:)|(?:${l}:){4}(?:(:${l}){0,1}:${m}|(:${l}){1,3}|:)|(?:${l}:){3}(?:(:${l}){0,2}:${m}|(:${l}){1,4}|:)|(?:${l}:){2}(?:(:${l}){0,3}:${m}|(:${l}){1,5}|:)|(?:${l}:){1}(?:(:${l}){0,4}:${m}|(:${l}){1,6}|:)|(?::((?::${l}){0,5}:${m}|(?::${l}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function R(t) {
  return c.isString(t) === null ? !1 : at.test(t);
}
const gt = /^\d{1,3}$/;
function ht(t) {
  if (c.isString(t) === null)
    return !1;
  const n = t.split("/");
  return n.length !== 2 || !gt.test(n[1]) || n[1].length > 1 && F(n[1], "0") || !R(n[0]) ? !1 : Number(n[1]) <= 128 && Number(n[1]) >= 0;
}
const mt = function(t) {
  return /^((\+86)|(86))?(1)\d{10}$/.test("" + t);
}, dt = function(t) {
  return /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test("" + t);
};
function I(t, e) {
  if (c.isString(t) === null)
    return !1;
  const r = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, i = /^[-+]?[0-9]+$/, s = e || {}, o = Object.prototype.hasOwnProperty, a = (Object.prototype.hasOwnProperty.call(s, "zeroes") && !s.zeroes ? r : i).test(t), d = parseInt(t, 10);
  return a && (!o.call(s, "min") || d >= s.min) && (!o.call(s, "max") || d <= s.max) && (!o.call(s, "lt") || d < s.lt) && (!o.call(s, "gt") || d > s.gt);
}
function yt(t) {
  return I(t, { min: 0, max: 65535 });
}
const wt = function(t) {
  return /^\d{6}$/.test("" + t);
}, bt = T("Function");
class y {
  constructor(e, n = "nextSuccessor") {
    w(this, "fn");
    w(this, "nextNode");
    w(this, "nextFlag");
    if (!bt(e))
      throw new Error(`${e} is no a function`);
    this.fn = e, this.nextNode = null, this.nextFlag = n;
  }
  after(e, n = this.nextFlag) {
    const r = e instanceof y;
    return this.nextNode = r ? e : new y(e, n);
  }
  start(...e) {
    const n = this.fn.apply(this, e);
    return n === this.nextFlag ? this.next.apply(this, e) : n;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const pt = T("Object"), $t = function(t) {
  return Object.getOwnPropertyNames(t).length === 0 ? !0 : "nextSuccessor";
}, At = function(t) {
  return Object.keys(t).length === 0;
}, $ = function(t) {
  if (!pt(t))
    throw new Error(`${t} is no a object type`);
  const e = new y($t);
  return e.after(At), e.start(t);
};
function St(t) {
  const e = /([^?=&]+)=([^&]*)/gi, n = {};
  return t.replace(e, (r, i, s) => {
    n[i] = s;
  }), $(n) ? "nextSuccessor" : n;
}
function Et(t) {
  const e = t.split("?")[1], n = {}, r = e && e.split("&");
  return r && r.reduce((i, s) => {
    const o = s.split("=");
    return i[o[0]] = o[1], i;
  }, n), $(n) ? "nextSuccessor" : n;
}
function xt(t) {
  const e = t.split("?")[1], n = new URLSearchParams(e), r = {};
  for (const i of n)
    r[i[0]] = i[1];
  return $(r) ? null : r;
}
const Tt = function(t) {
  const e = new y(St);
  return e.after(Et).after(xt), e.start(t);
}, Ft = {
  createType: T,
  getURLValueByKey: k,
  hasEmoji: st,
  isEmail: ot,
  isIPv4: O,
  isIPv4Range: ft,
  isIPv6: R,
  isIPv6Range: ht,
  isMobile: mt,
  isPhone: dt,
  isPort: yt,
  isPostalCode: wt,
  queryURLParams: Tt,
  validateTypeHoc: g
};
function Dt(t) {
  if (t === null)
    return null;
  if (!g("Array")(t))
    throw new TypeError("The ary must be array");
  return [...t];
}
function Ct(t, e) {
  if (!g("Array")(t))
    throw new TypeError("The list must be array");
  const n = [...t];
  if (n.length === 0)
    return n;
  if (e === void 0)
    throw new SyntaxError("The index must be required");
  if (g("Number")(e))
    e < 0 ? e = 0 : e >= n.length ? e = n.length - 1 : e = Math.floor(e);
  else
    throw new TypeError("The index must be number");
  return n.splice(e, 1), n;
}
const Mt = {
  add: J,
  addAll: Q,
  clone: Dt,
  remove: Ct
};
function h(t, e) {
  if (!g("string")(t))
    throw new TypeError("The parameter type is string");
  return e !== void 0 && t.length === 0 ? e : t.charAt(0);
}
function Pt(t, e) {
  const n = h(t), r = h(e);
  return Number.isNaN(n.charCodeAt(0)) && Number.isNaN(r.charCodeAt(0)) ? 0 : n.charCodeAt(0) - r.charCodeAt(0);
}
function Ot(t) {
  return h(t).charCodeAt(0) < 128;
}
function N(t) {
  const e = h(t);
  return e >= "A" && e <= "Z";
}
function L(t) {
  const e = h(t);
  return e >= "a" && e <= "z";
}
function _(t) {
  return N(t) || L(t);
}
function D(t) {
  const e = h(t);
  return e >= "0" && e <= "9";
}
function Rt(t) {
  return _(t) || D(t);
}
function It(t) {
  const e = h(t);
  return e < " " || e.charCodeAt(0) < 32 || e.charCodeAt(0) === 127;
}
function Nt(t) {
  const e = h(t);
  return (e >= " " || e.charCodeAt(0) >= 32) && e.charCodeAt(0) < 127;
}
function C(t) {
  const e = h(t);
  return e === " " || e === `
` || e === "\r" || e === "	" || e === "\f";
}
function Lt(t, e) {
  if (!D(t)) {
    if (e !== void 0)
      return e;
    throw new RangeError("The character " + t + " is not in the range '0' - '9'");
  }
  return t.charCodeAt(0) - 48;
}
const p = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function _t(t) {
  const e = h(t).charCodeAt(0);
  return "\\u" + p[e >> 12 & 15] + p[e >> 8 & 15] + p[e >> 4 & 15] + p[e & 15];
}
function Ut(t) {
  return t.replace(/\\u([\d\w]{4})/gi, function(e, n) {
    return String.fromCharCode(parseInt(n, 16));
  });
}
const jt = {
  compare: Pt,
  isAscii: Ot,
  isAsciiAlpha: _,
  isAsciiAlphaLower: L,
  isAsciiAlphanumeric: Rt,
  isAsciiAlphaUpper: N,
  isAsciiControl: It,
  isAsciiNumeric: D,
  isAsciiPrintable: Nt,
  isWhitespace: C,
  toChar: h,
  toIntValue: Lt,
  unicodeEscaped: _t,
  unicodeUnescaped: Ut
};
function Yt(t) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    t
  );
}
function vt(t, e) {
  const n = [], r = Math.min(t.length, e.length);
  for (let i = 0; i < r; i++)
    n.push([t[i], e[i]]);
  return n;
}
function U(t, e = { format: "YYYY/MM/DD", delimiters: ["/", "-"], strictMode: !1 }) {
  if (e = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...e
  }, g("String")(t) && Yt(e.format)) {
    const n = e.delimiters.find((o) => e.format.indexOf(o) !== -1), r = e.strictMode ? n : e.delimiters.find((o) => t.indexOf(o) !== -1), i = vt(t.split(r), e.format.toLowerCase().split(n)), s = {};
    for (const [o, u] of i) {
      if (o.length !== u.length)
        return !1;
      s[u.charAt(0)] = o;
    }
    return new Date(`${s.m}/${s.d}/${s.y}`).getDate() === +s.d;
  }
  return e.strictMode ? !1 : g("Date")(t);
}
function Bt(t, e) {
  const n = [], r = Math.min(t.length, e.length);
  for (let i = 0; i < r; i++)
    n.push([t[i], e[i]]);
  return n;
}
function Ht(t, e, n) {
  const r = e.delimiters.find((u) => e.format.indexOf(u) !== -1), i = e.strictMode ? r : e.delimiters.find((u) => t.indexOf(u) !== -1), s = Bt(t.split(i), e.format.toLowerCase().split(r)), o = {};
  for (const [u, a] of s) {
    if (u.length !== a.length)
      throw new SyntaxError(`${e.format} format is error`);
    o[a.charAt(0)] = u;
  }
  return n.format.replace(/(y{4}|y{2})/gi, o.y).replace(/(m{1,2})/gi, o.m).replace(/(d{1,2})/gi, o.d);
}
function qt(t, e) {
  const n = t.getFullYear();
  return e.format.replace(/(y{4}|y{2})/gi, n + "").replace(/(m{1,2})/gi, (i) => i.length === 1 ? String(t.getMonth() + 1) : String(t.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (i) => i.length === 1 ? String(t.getDate()) : String(t.getDate()).padStart(2, "0"));
}
function zt(t) {
  if (!c.isValidDateFormat(t.format))
    throw new SyntaxError(`${t.format} is not valid date format`);
  return function(e, n) {
    if (n = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1,
      ...n
    }, !U(e, n))
      throw new SyntaxError(`${e} is not valid date`);
    if (g("String")(e))
      return Ht(e, n, t);
    if (g("Date")(e))
      return qt(e, t);
  };
}
const Zt = function(t, e) {
  return Math.abs(t * 1 - e * 1) / (24 * 60 * 60 * 1e3);
}, j = function(t) {
  return new Date(t.getFullYear(), 2, 0).getDate() === 29;
}, Vt = function(t) {
  switch (t.getMonth()) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return j(t) ? 29 : 28;
    default:
      return 30;
  }
}, Gt = function(t) {
  return new Date(t.getFullYear(), t.getMonth(), 1);
}, Kt = function(t) {
  return new Date(t.getFullYear(), t.getMonth() + 1, 0);
}, Xt = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function Jt(t, e) {
  if (!g("String")(t))
    return !1;
  if (e = {
    format: "HH:MM:SS",
    mode: 24,
    ...e
  }, !c.isTimeFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid format`);
  if (![24, 12].includes(e.mode))
    throw new SyntaxError(`${e.mode} is not valid mode`);
  const n = e.format.match(/s/ig), r = n && n.length > 0;
  return Xt[e.mode][r ? "hasSecond" : "default"].test(t);
}
const Qt = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function Y(t, e, n) {
  let r;
  for (const i in e)
    if (["12", "24"].includes(i)) {
      const s = Y(t, e[i], i);
      s && (r = s);
    } else if (e[i].test(t))
      return {
        mode: n,
        format: i,
        matches: t.match(e[i])
      };
  return r;
}
function kt(t) {
  if (!c.isTimeFormat(t.format))
    throw new SyntaxError(`${t.format} is not valid format`);
  if (![24, 12].includes(t.mode))
    throw new SyntaxError(`${t.mode} is not valid mode`);
  return function(e) {
    const n = Y(e, Qt, void 0);
    if (!n)
      throw new SyntaxError(`${e} is not valid time`);
    const r = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (n.mode === "12") {
      const [s, o, u, a] = [...n.matches].splice(1, 4);
      r.h = s, r.m = o, r.s = u, r.b = a, t.mode === 24 && a === "P" && (r.h = +s + 12 + "");
    } else if (n.mode === "24") {
      const [s, o, u] = [...n.matches].splice(1, 3);
      r.h = s, r.m = o, r.s = u;
    }
    if (t.mode === 12 && !r.b) {
      const s = +r.h;
      s > 12 ? (r.h = s - 12 + "", r.b = "P") : r.b = "A";
    }
    let i = t.format.replace(/(h{1,2})/gi, r.h).replace(/(m{1,2})/gi, r.m).replace(r.s ? /(s{1,2})/gi : /:(s{1,2})/gi, r.s ? r.s : "");
    return t.mode === 12 && r.b && (i += ` ${r.b}M`), i;
  };
}
const Wt = {
  dateFormatHoc: zt,
  getDatePeriod: Zt,
  getDaysInMonth: Vt,
  getFirstDateInMonth: Gt,
  getLastDateInMonth: Kt,
  isDate: U,
  isLeapYear: j,
  isTime: Jt,
  timeFormatHoc: kt
};
function te(t, e) {
  const n = c.isString(t);
  if ([null, "", ".", ",", "-", "+"].includes(n))
    return !1;
  const r = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"), i = e || {}, s = Object.prototype.hasOwnProperty, o = parseFloat(n.replace(",", "."));
  return r.test(t) && (!s.call(i, "min") || o >= i.min) && (!s.call(i, "max") || o <= i.max) && (!s.call(i, "lt") || o < i.lt) && (!s.call(i, "gt") || o > i.gt);
}
const ee = {
  isFloat: te,
  isInteger: I
};
function v(...t) {
  if (t === null)
    return !1;
  for (const e of t)
    if (e === null)
      return !1;
  return !0;
}
const ne = {
  allNotNull: v,
  isEmpty: $
};
function b(t, e) {
  const n = c.isString(t), r = c.isString(e);
  return n === r;
}
function f(t) {
  const e = c.isString(t);
  return e === null || e.length === 0;
}
function B(...t) {
  if (t.length === 0)
    return !1;
  for (const e of t)
    if (f(e))
      return !0;
  return !1;
}
function A(t) {
  const e = c.isString(t);
  return e === null ? 0 : e.length;
}
function H(t, e = 0, n = 0) {
  if (t === null)
    return t;
  const r = g("Number");
  if (!r(e) || !r(n))
    throw new TypeError("The start or end paramter type is number");
  const i = A(t);
  return n < 0 && (n = i + n), e < 0 && (e = i + e), n > i && (n = i), e > n ? "" : (e < 0 && (e = 0), n < 0 && (n = 0), t.substring(e, n));
}
function q(t, e, n, r) {
  if (!f(t) && b("", e) && e.length > 0)
    return H(t, 0, r);
  if (B(t, e))
    return t;
  {
    const i = e.length, s = i + 1, o = i + i + 1;
    if (r < s)
      throw new RangeError(`Minimum abbreviation width is ${s}`);
    {
      const u = t.length;
      if (u <= r)
        return t;
      if (n > u && (n = u), u - n < r - i && (n = u - (r - i)), n <= i + 1)
        return t.substring(0, r - i) + e;
      if (r < o)
        throw new RangeError(`Minimum abbreviation width with offset is ${o}`);
      return n + r - i < u ? e + q(t.substring(n), e, 0, r - i) : e + t.substring(u - (r - i));
    }
  }
}
const re = function(t, e, n) {
  return n ? (n + t + n).indexOf(n + e + n) > -1 : t.indexOf(e) > -1;
};
function ie(t, ...e) {
  if (e.length !== 0) {
    for (const n of e)
      if (b(t, n))
        return !0;
  }
  return !1;
}
function z(t, e) {
  if (b(t, e))
    return !0;
  if (t !== null && e !== null) {
    if (t.length !== e.length)
      return !1;
    for (let n = 0; n < t.length; n++)
      if (!b(t.charAt(n).toUpperCase(), e.charAt(n).toUpperCase()))
        return !1;
    return !0;
  } else
    return !1;
}
function se(t, ...e) {
  if (e.length !== 0) {
    for (const n of e)
      if (z(t, n))
        return !0;
  }
  return !1;
}
const oe = function(t) {
  return t.replace(/[&<>'"]/g, (e) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[e] || e);
};
function S(t) {
  const e = c.isString(t);
  return e === null ? null : e.replace(/(^\s*)|(\s*$)/g, "");
}
const Z = function(t) {
  return new RegExp("[A-Za-z]+", "g").test(t);
}, ue = function(t, e) {
  let n = 0;
  for (let r = 0; r < t.length; r++)
    Z(t[r]) ? n++ : n += e;
  return n;
}, le = function(t, e = !1, n = 2) {
  return e ? ue(S(t), n) : t.length;
}, ce = function(t) {
  return new RegExp("[\\u4E00-\\u9FFF]+", "g").test(t);
};
function fe(t) {
  const e = c.isString(t);
  return e === null ? null : e.replace(/(^\s*)/g, "");
}
function ae(t) {
  const e = c.isString(t);
  return e === null ? null : e.replace(/(\s*$)/g, "");
}
function V(t, e = null) {
  let n = A(t);
  if (n === 0)
    return t;
  {
    const r = c.isString(e);
    if (r === null)
      for (; n !== 0 && C(t.charAt(n - 1)); )
        --n;
    else {
      if (r.length === 0)
        return t;
      for (; n !== 0 && r.indexOf(t.charAt(n - 1)) !== -1; )
        --n;
    }
    return t.substring(0, n);
  }
}
function G(t, e = null) {
  const n = A(t);
  if (n === 0)
    return t;
  {
    let r = 0;
    const i = c.isString(e);
    if (i === null)
      for (; r !== n && C(t.charAt(r)); )
        ++r;
    else {
      if (i.length === 0)
        return t;
      for (; r !== n && i.indexOf(t.charAt(r)) !== -1; )
        ++r;
    }
    return t.substring(r);
  }
}
function E(t, e = null) {
  return t = G(t, e), V(t, e);
}
function ge(t, e = null) {
  if (t === null)
    return null;
  if (!Array.isArray(t))
    throw new TypeError("The paramter type is array");
  const n = t.length;
  if (n === 0)
    return t;
  const r = [];
  for (let i = 0; i < n; i++)
    r.push(E(t[i], e));
  return r;
}
function he(t) {
  return t === null ? "" : E(t, null);
}
function me(t) {
  return t === null ? null : (t = E(t, null), t.length === 0 ? null : t);
}
function de(t, e = null) {
  if (f(t))
    return t;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const n = String.fromCharCode(e), r = t.indexOf(n);
      return r === -1 ? "" : t.substring(r + 1);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (f(e))
      return "";
    if (typeof e == "string") {
      const n = t.indexOf(e);
      return n === -1 ? "" : t.substring(n + e.length);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function ye(t, e = null) {
  if (f(t))
    return t;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const n = String.fromCharCode(e), r = t.lastIndexOf(n);
      return r !== -1 && r !== t.length - 1 ? t.substring(r + 1) : "";
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (f(e))
      return "";
    if (typeof e == "string") {
      const n = t.lastIndexOf(e);
      return n !== -1 && n !== t.length - e.length ? t.substring(n + e.length) : "";
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function we(t, e = null) {
  if (f(t))
    return t;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const n = String.fromCharCode(e), r = t.indexOf(n);
      return r == -1 ? t : t.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (f(e))
      return "";
    if (typeof e == "string") {
      const n = t.indexOf(e);
      return n == -1 ? t : t.substring(0, n);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function be(t, e = null) {
  if (f(t))
    return t;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const n = String.fromCharCode(e), r = t.lastIndexOf(n);
      return r === -1 ? t : t.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (f(e))
      return "";
    if (typeof e == "string") {
      const n = t.lastIndexOf(e);
      return n === -1 ? t : t.substring(0, n);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function pe(t, e, n) {
  if (v(t, e, n)) {
    const r = t.indexOf(e);
    if (r !== -1) {
      const i = t.indexOf(n, r + e.length);
      if (i !== -1)
        return t.substring(r + e.length, i);
    }
    return null;
  } else
    return null;
}
function $e(t, e, n) {
  if (t === null || f(e) || f(n))
    return null;
  const r = t.length;
  if (r === 0)
    return [];
  {
    const i = n.length, s = e.length, o = [];
    let u;
    for (let a = 0; a < r - i; a = u + i) {
      const d = t.indexOf(e, a);
      if (d < 0)
        break;
      const M = d + s;
      if (u = t.indexOf(n, M), u < 0)
        break;
      o.push(t.substring(M, u));
    }
    return o.length === 0 ? null : o;
  }
}
function Ae(t) {
  return t === null ? "" : S(t);
}
function Se(t) {
  const e = S(t);
  return f(e) ? null : e;
}
function Ee(t, e, n) {
  if (e < 0)
    throw new RangeError("offset cannot be negative");
  if (n < 0)
    throw new RangeError("maxWith cannot be negative");
  if (t === null)
    return null;
  if (e > t.length)
    return "";
  if (t.length > n) {
    const r = Math.min(e + n, t.length);
    return t.substring(e, r);
  } else
    return t.substring(e);
}
const xe = function(t) {
  return t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (e) => ({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#39;": "'",
    "&quot;": '"'
  })[e] || e);
};
function Te(t, e) {
  return f(t) || f(e) ? t : e.concat(t).concat(e);
}
function Fe(t, e) {
  if (f(t) || f(e))
    return t;
  const n = !t.startsWith(e), r = !t.endsWith(e);
  if (!n && !r)
    return t;
  {
    let i = "";
    return n && (i = i.concat(e)), i = i.concat(t), r && (i = i.concat(e)), i;
  }
}
const De = {
  abbreviate: q,
  contains: re,
  equals: b,
  equalsAny: ie,
  equalsAnyIgnoreCase: se,
  equalsIgnoreCase: z,
  escapeHTML: oe,
  getStrLength: le,
  isAnyEmpty: B,
  isEmpty: f,
  isEN: Z,
  isZH: ce,
  length: A,
  ltrim: fe,
  rtrim: ae,
  startsWith: F,
  strip: E,
  stripAll: ge,
  stripEnd: V,
  stripStart: G,
  stripToEmpty: he,
  stripToNull: me,
  substring: H,
  substringAfter: de,
  substringAfterLast: ye,
  substringBefore: we,
  substringBeforeLast: be,
  substringBetween: pe,
  substringsBetween: $e,
  trim: S,
  trimToEmpty: Ae,
  trimToNull: Se,
  truncate: Ee,
  unescapeHTML: xe,
  upperCase: x,
  wrap: Te,
  wrapIfMissing: Fe
}, Me = {
  ArrayUtils: Mt,
  CharUtils: jt,
  DateUtils: Wt,
  DutyLink: y,
  NumberUtils: ee,
  ObjectUtils: ne,
  StringUtils: De,
  Utils: Ft
};
export {
  Mt as ArrayUtils,
  jt as CharUtils,
  Wt as DateUtils,
  y as DutyLink,
  ee as NumberUtils,
  ne as ObjectUtils,
  De as StringUtils,
  Ft as Utils,
  Me as default
};
