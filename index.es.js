var te = Object.defineProperty;
var ne = (e, t, n) => t in e ? te(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (ne(e, typeof t != "symbol" ? t + "" : t, n), n);
function x(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function l(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${x(e)}]`;
  };
}
function re(e, t, n) {
  if (!l("Array")(e))
    throw new TypeError("The list must be array");
  if (n === void 0)
    e.push(t);
  else if (l("Number")(n))
    e.splice(n, 0, t);
  else
    throw new TypeError("The index must be number");
  return e;
}
function ie(e, ...t) {
  const n = l("Array");
  if (n(e)) {
    if (t.length === 0)
      return [...e];
    let r = [...e];
    for (const i of t) {
      if (!n(i))
        throw new SyntaxError(`The ${i} must be array in rest`);
      r = [...r, ...i];
    }
    return r;
  } else
    throw new SyntaxError("The ary must be array");
}
function F(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${x(e)}]`;
  };
}
function oe(e, t) {
  const n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), r = e.match(n);
  return r !== null ? r[2] : null;
}
function se(e, t = ".") {
  if (!e)
    return !1;
  const n = e.trim().split(t);
  for (const r of n)
    if (!r || /\s/.test(r))
      return !1;
  return !0;
}
function ue(e, t, n = void 0, r = ".") {
  if (!l("String")(t))
    throw new TypeError(`${t} is not string type`);
  if (!se(t, r))
    throw new Error(`Invalid: ${t}`);
  const i = t.trim().split(r);
  let o = e;
  for (const s of i)
    if (Array.isArray(o) && /^\d+$/.test(s)) {
      const u = parseInt(s, 10);
      if (u < o.length)
        o = o[u];
      else
        return n;
    } else if (typeof o == "object" && s in o)
      o = o[s];
    else
      return n;
  return o;
}
const le = "[\\u2700-\\u27BF]", ce = "[\\uE000-\\uF8FF]", ae = "\\uD83C[\\uDC00-\\uDFFF]", fe = "\\uD83D[\\uDC00-\\uDFFF]", he = "[\\u2011-\\u26FF]", ge = "\\uD83E[\\uDD10-\\uDDFF]";
function me(e) {
  return RegExp(
    `(${le}|${ce}|${ae}|${fe}|${he}|${ge})`,
    "g"
  ).test(e);
}
function de(e) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    e
  );
}
class h {
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
    if (l("string")(t))
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
p(h, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const N = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", w = `(${N}[.]){3}${N}`, we = new RegExp(`^${w}$`);
function P(e) {
  return h.isString(e) === null ? !1 : we.test(e);
}
function C(e, t, n = !1) {
  if (e !== null && t !== null) {
    const r = t.length;
    return r > e.length ? !1 : ye(e, n, 0, t, 0, r);
  } else
    return e === t;
}
function ye(e, t, n, r, i, o) {
  t && (e = e.toLowerCase(), r = r.toLowerCase());
  const s = n + o;
  let u = 0;
  for (let c = n; c < s; c++) {
    if (e.charAt(c) !== r.charAt(i + u))
      return !1;
    u++;
  }
  return !0;
}
const pe = /^\d{1,3}$/;
function $e(e) {
  if (h.isString(e) === null)
    return !1;
  const n = e.split("/");
  return n.length !== 2 || !pe.test(n[1]) || n[1].length > 1 && C(n[1], "0") || !P(n[0]) ? !1 : Number(n[1]) <= 32 && Number(n[1]) >= 0;
}
const f = "(?:[0-9a-fA-F]{1,4})", Se = new RegExp(
  `^((?:${f}:){7}(?:${f}|:)|(?:${f}:){6}(?:${w}|:${f}|:)|(?:${f}:){5}(?::${w}|(:${f}){1,2}|:)|(?:${f}:){4}(?:(:${f}){0,1}:${w}|(:${f}){1,3}|:)|(?:${f}:){3}(?:(:${f}){0,2}:${w}|(:${f}){1,4}|:)|(?:${f}:){2}(?:(:${f}){0,3}:${w}|(:${f}){1,5}|:)|(?:${f}:){1}(?:(:${f}){0,4}:${w}|(:${f}){1,6}|:)|(?::((?::${f}){0,5}:${w}|(?::${f}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function R(e) {
  return h.isString(e) === null ? !1 : Se.test(e);
}
const be = /^\d{1,3}$/;
function Ee(e) {
  if (h.isString(e) === null)
    return !1;
  const n = e.split("/");
  return n.length !== 2 || !be.test(n[1]) || n[1].length > 1 && C(n[1], "0") || !R(n[0]) ? !1 : Number(n[1]) <= 128 && Number(n[1]) >= 0;
}
function Te(e) {
  return /^((\+86)|(86))?(1)\d{10}$/.test("" + e);
}
function Ae(e) {
  return /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test("" + e);
}
function m(e, t) {
  if (h.isString(e) === null)
    return !1;
  const r = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, i = /^[-+]?[0-9]+$/, o = t || {}, s = Object.prototype.hasOwnProperty, c = (Object.prototype.hasOwnProperty.call(o, "zeroes") && !o.zeroes ? r : i).test(e), a = parseInt(e, 10);
  return c && (!s.call(o, "min") || a >= o.min) && (!s.call(o, "max") || a <= o.max) && (!s.call(o, "lt") || a < o.lt) && (!s.call(o, "gt") || a > o.gt);
}
function De(e) {
  return m(e, { min: 0, max: 65535 });
}
function xe(e) {
  return /^\d{6}$/.test("" + e);
}
const Fe = F("Function");
class y {
  constructor(t, n = "nextSuccessor") {
    p(this, "fn");
    p(this, "nextNode");
    p(this, "nextFlag");
    if (!Fe(t))
      throw new Error(`${t} is no a function`);
    this.fn = t, this.nextNode = null, this.nextFlag = n;
  }
  after(t, n = this.nextFlag) {
    const r = t instanceof y;
    return this.nextNode = r ? t : new y(t, n);
  }
  start(...t) {
    const n = this.fn.apply(this, t);
    return n === this.nextFlag ? this.next.apply(this, t) : n;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const Ce = F("Object"), Ie = function(e) {
  return Object.getOwnPropertyNames(e).length === 0 ? !0 : "nextSuccessor";
}, Me = function(e) {
  return Object.keys(e).length === 0;
};
function E(e) {
  if (!Ce(e))
    throw new Error(`${e} is no a object type`);
  const t = new y(Ie);
  return t.after(Me), t.start(e);
}
function ve(e) {
  const t = /([^?=&]+)=([^&]*)/gi, n = {};
  return e.replace(t, (r, i, o) => {
    n[i] = o;
  }), E(n) ? "nextSuccessor" : n;
}
function Ne(e) {
  const t = e.split("?")[1], n = {}, r = t && t.split("&");
  return r && r.reduce((i, o) => {
    const s = o.split("=");
    return i[s[0]] = s[1], i;
  }, n), E(n) ? "nextSuccessor" : n;
}
function Pe(e) {
  const t = e.split("?")[1], n = new URLSearchParams(t), r = {};
  for (const i of n)
    r[i[0]] = i[1];
  return E(r) ? null : r;
}
function Re(e) {
  const t = new y(ve);
  return t.after(Ne).after(Pe), t.start(e);
}
const Oe = {
  createType: F,
  getURLValueByKey: oe,
  getValue: ue,
  hasEmoji: me,
  isEmail: de,
  isIPv4: P,
  isIPv4Range: $e,
  isIPv6: R,
  isIPv6Range: Ee,
  isMobile: Te,
  isPhone: Ae,
  isPort: De,
  isPostalCode: xe,
  queryURLParams: Re,
  validateTypeHoc: l
};
function Le(e) {
  if (e === null)
    return null;
  if (!l("Array")(e))
    throw new TypeError("The ary must be array");
  return [...e];
}
function Ue(e, t) {
  if (!l("Array")(e))
    throw new TypeError("The list must be array");
  if (e.length === 0)
    return e;
  if (t === void 0)
    throw new SyntaxError("The index must be required");
  if (l("Number")(t))
    t < 0 ? t = 0 : t >= e.length ? t = e.length - 1 : t = Math.floor(t);
  else
    throw new TypeError("The index must be number");
  return e.splice(t, 1), e;
}
function _e(e, t, n) {
  if (!l("Array")(e))
    throw new TypeError("The list must be array");
  const r = [...e];
  if (n === void 0)
    r.push(t);
  else if (l("Number")(n))
    r.splice(n, 0, t);
  else
    throw new TypeError("The index must be number");
  return r;
}
function Ye(e, t) {
  if (!l("Array")(e))
    throw new TypeError("The list must be array");
  const n = [...e];
  if (n.length === 0)
    return n;
  if (t === void 0)
    throw new SyntaxError("The index must be required");
  if (l("Number")(t))
    t < 0 ? t = 0 : t >= n.length ? t = n.length - 1 : t = Math.floor(t);
  else
    throw new TypeError("The index must be number");
  return n.splice(t, 1), n;
}
const je = {
  add: re,
  addAll: ie,
  clone: Le,
  remove: Ue,
  toAdded: _e,
  toRemoved: Ye
};
function d(e, t) {
  if (!l("string")(e))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && e.length === 0 ? t : e.charAt(0);
}
function He(e, t) {
  const n = d(e), r = d(t);
  return Number.isNaN(n.charCodeAt(0)) && Number.isNaN(r.charCodeAt(0)) ? 0 : n.charCodeAt(0) - r.charCodeAt(0);
}
function qe(e) {
  return d(e).charCodeAt(0) < 128;
}
function O(e) {
  const t = d(e);
  return t >= "A" && t <= "Z";
}
function L(e) {
  const t = d(e);
  return t >= "a" && t <= "z";
}
function U(e) {
  return O(e) || L(e);
}
function I(e) {
  const t = d(e);
  return t >= "0" && t <= "9";
}
function Be(e) {
  return U(e) || I(e);
}
function Ze(e) {
  const t = d(e);
  return t < " " || t.charCodeAt(0) < 32 || t.charCodeAt(0) === 127;
}
function ze(e) {
  const t = d(e);
  return (t >= " " || t.charCodeAt(0) >= 32) && t.charCodeAt(0) < 127;
}
function M(e) {
  const t = d(e);
  return t === " " || t === `
` || t === "\r" || t === "	" || t === "\f";
}
function Ve(e, t) {
  if (!I(e)) {
    if (t !== void 0)
      return t;
    throw new RangeError("The character " + e + " is not in the range '0' - '9'");
  }
  return e.charCodeAt(0) - 48;
}
const S = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function ke(e) {
  const t = d(e).charCodeAt(0);
  return "\\u" + S[t >> 12 & 15] + S[t >> 8 & 15] + S[t >> 4 & 15] + S[t & 15];
}
function Ge(e) {
  return e.replace(/\\u([\d\w]{4})/gi, function(t, n) {
    return String.fromCharCode(parseInt(n, 16));
  });
}
const Ke = {
  compare: He,
  isAscii: qe,
  isAsciiAlpha: U,
  isAsciiAlphaLower: L,
  isAsciiAlphanumeric: Be,
  isAsciiAlphaUpper: O,
  isAsciiControl: Ze,
  isAsciiNumeric: I,
  isAsciiPrintable: ze,
  isWhitespace: M,
  toChar: d,
  toIntValue: Ve,
  unicodeEscaped: ke,
  unicodeUnescaped: Ge
};
function _(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setDate(n.getDate() + (l("Number")(t) ? t : +t)), n;
}
function Y(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setHours(n.getHours() + (l("Number")(t) ? t : +t)), n;
}
function j(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setMinutes(n.getMinutes() + (l("Number")(t) ? t : +t)), n;
}
function H(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setMonth(n.getMonth() + (l("Number")(t) ? t : +t)), n;
}
function q(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setSeconds(n.getSeconds() + (l("Number")(t) ? t : +t)), n;
}
function B(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setFullYear(n.getFullYear() + (l("Number")(t) ? t : +t)), n;
}
function Xe(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  const n = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0
  }, { years: r, months: i, days: o, hours: s, mins: u, secs: c } = {
    ...n,
    ...t
  };
  if (!m(r + "") || !m(i + "") || !m(o + "") || !m(s + "") || !m(u + "") || !m(c + ""))
    throw new SyntaxError("Invalid time values");
  let a = new Date(e.getTime());
  return a = B(a, r), a = H(a, i), a = _(a, o), a = Y(a, s), a = j(a, u), a = q(a, c), a;
}
function Je(e) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    e
  );
}
function Qe(e, t) {
  const n = [], r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++)
    n.push([e[i], t[i]]);
  return n;
}
function b(e, t) {
  if (t = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...t
  }, l("String")(e) && Je(t.format)) {
    const n = t.delimiters.find((s) => t.format.indexOf(s) !== -1), r = t.strictMode ? n : t.delimiters.find((s) => e.indexOf(s) !== -1), i = Qe(e.split(r), t.format.toLowerCase().split(n)), o = {};
    for (const [s, u] of i) {
      if (s.length !== u.length)
        return !1;
      o[u.charAt(0)] = s;
    }
    return new Date(`${o.m}/${o.d}/${o.y}`).getDate() === +o.d;
  }
  return t.strictMode ? !1 : l("Date")(e);
}
function We(e, t) {
  const n = [], r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++)
    n.push([e[i], t[i]]);
  return n;
}
function et(e, t, n) {
  const r = t.delimiters.find((u) => t.format.indexOf(u) !== -1), i = t.strictMode ? r : t.delimiters.find((u) => e.indexOf(u) !== -1), o = We(e.split(i), t.format.toLowerCase().split(r)), s = {};
  for (const [u, c] of o) {
    if (u.length !== c.length)
      throw new SyntaxError(`${t.format} format is error`);
    s[c.charAt(0)] = u;
  }
  return n.format.replace(/(y{4}|y{2})/gi, s.y).replace(/(m{1,2})/gi, s.m).replace(/(d{1,2})/gi, s.d);
}
function tt(e, t) {
  const n = e.getFullYear();
  return t.format.replace(/(y{4}|y{2})/gi, n + "").replace(/(m{1,2})/gi, (i) => i.length === 1 ? String(e.getMonth() + 1) : String(e.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (i) => i.length === 1 ? String(e.getDate()) : String(e.getDate()).padStart(2, "0"));
}
function Z(e) {
  if (!h.isValidDateFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid date format`);
  return function(t, n) {
    if (n = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1,
      ...n
    }, !b(t, n))
      throw new SyntaxError(`${t} is not valid date`);
    if (l("String")(t))
      return et(t, n, e);
    if (l("Date")(t))
      return tt(t, e);
  };
}
function nt(e, t, n) {
  const r = n || {
    start: void 0,
    finish: void 0
  };
  if (!b(e, r.start) || !b(t, r.finish))
    throw new SyntaxError("Invalid date values");
  const i = Z({
    format: "YYYY/MM/DD"
  }), o = 24 * 60 * 60 * 1e3, s = new Date(i(e, r.start)), u = new Date(i(t, r.finish)), c = Math.abs(u.getTime() - s.getTime());
  return Math.ceil(c / o);
}
function z(e) {
  return new Date(e.getFullYear(), 2, 0).getDate() === 29;
}
function rt(e) {
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
      return z(e) ? 29 : 28;
    default:
      return 30;
  }
}
function it(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function ot(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
const st = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function ut(e, t) {
  if (!l("String")(e))
    return !1;
  if (t = {
    format: "HH:MM:SS",
    mode: 24,
    ...t
  }, !h.isTimeFormat(t.format))
    throw new SyntaxError(`${t.format} is not valid format`);
  if (![24, 12].includes(t.mode))
    throw new SyntaxError(`${t.mode} is not valid mode`);
  const n = t.format.match(/s/ig), r = n && n.length > 0;
  return st[t.mode][r ? "hasSecond" : "default"].test(e);
}
const lt = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function V(e, t, n) {
  let r;
  for (const i in t)
    if (["12", "24"].includes(i)) {
      const o = V(e, t[i], i);
      o && (r = o);
    } else if (t[i].test(e))
      return {
        mode: n,
        format: i,
        matches: e.match(t[i])
      };
  return r;
}
function ct(e) {
  if (!h.isTimeFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid format`);
  if (![24, 12].includes(e.mode))
    throw new SyntaxError(`${e.mode} is not valid mode`);
  return function(t) {
    const n = V(t, lt, void 0);
    if (!n)
      throw new SyntaxError(`${t} is not valid time`);
    const r = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (n.mode === "12") {
      const [o, s, u, c] = [...n.matches].splice(1, 4);
      r.h = o, r.m = s, r.s = u, r.b = c, e.mode === 24 && c === "P" && (r.h = +o + 12 + "");
    } else if (n.mode === "24") {
      const [o, s, u] = [...n.matches].splice(1, 3);
      r.h = o, r.m = s, r.s = u;
    }
    if (e.mode === 12 && !r.b) {
      const o = +r.h;
      o > 12 ? (r.h = o - 12 + "", r.b = "P") : r.b = "A";
    }
    let i = e.format.replace(/(h{1,2})/gi, r.h).replace(/(m{1,2})/gi, r.m).replace(r.s ? /(s{1,2})/gi : /:(s{1,2})/gi, r.s ? r.s : "");
    return e.mode === 12 && r.b && (i += ` ${r.b}M`), i;
  };
}
function at(e) {
  const t = new Date(e.getTime()), n = t.getUTCFullYear(), r = String(t.getUTCMonth() + 1).padStart(2, "0"), i = String(t.getUTCDate()).padStart(2, "0"), o = String(t.getUTCHours()).padStart(2, "0"), s = String(t.getUTCMinutes()).padStart(2, "0"), u = String(t.getUTCSeconds()).padStart(2, "0"), c = String((t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5)).padStart(3, "0");
  return `${n}-${r}-${i}T${o}:${s}:${u}.${c}Z`;
}
const ft = {
  addDays: _,
  addHours: Y,
  addMinutes: j,
  addMonths: H,
  addSecs: q,
  addTime: Xe,
  addYears: B,
  dateFormatHoc: Z,
  getDatePeriod: nt,
  getDaysInMonth: rt,
  getFirstDateInMonth: it,
  getLastDateInMonth: ot,
  isDate: b,
  isLeapYear: z,
  isTime: ut,
  timeFormatHoc: ct,
  toISOString: at
};
function ht(e, t) {
  const n = h.isString(e);
  if ([null, "", ".", ",", "-", "+"].includes(n))
    return !1;
  const r = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"), i = t || {}, o = Object.prototype.hasOwnProperty, s = parseFloat(n.replace(",", "."));
  return r.test(e) && (!o.call(i, "min") || s >= i.min) && (!o.call(i, "max") || s <= i.max) && (!o.call(i, "lt") || s < i.lt) && (!o.call(i, "gt") || s > i.gt);
}
const gt = {
  isFloat: ht,
  isInteger: m
};
function k(...e) {
  if (e === null)
    return !1;
  for (const t of e)
    if (t === null)
      return !1;
  return !0;
}
const mt = {
  allNotNull: k,
  isEmpty: E
};
function $(e, t) {
  const n = h.isString(e), r = h.isString(t);
  return n === r;
}
function g(e) {
  const t = h.isString(e);
  return t === null || t.length === 0;
}
function G(...e) {
  if (e.length === 0)
    return !1;
  for (const t of e)
    if (g(t))
      return !0;
  return !1;
}
function T(e) {
  const t = h.isString(e);
  return t === null ? 0 : t.length;
}
function K(e, t = 0, n = 0) {
  if (e === null)
    return e;
  const r = l("Number");
  if (!r(t) || !r(n))
    throw new TypeError("The start or end paramter type is number");
  const i = T(e);
  return n < 0 && (n = i + n), t < 0 && (t = i + t), n > i && (n = i), t > n ? "" : (t < 0 && (t = 0), n < 0 && (n = 0), e.substring(t, n));
}
function X(e, t, n, r) {
  if (!g(e) && $("", t) && t.length > 0)
    return K(e, 0, r);
  if (G(e, t))
    return e;
  {
    const i = t.length, o = i + 1, s = i + i + 1;
    if (r < o)
      throw new RangeError(`Minimum abbreviation width is ${o}`);
    {
      const u = e.length;
      if (u <= r)
        return e;
      if (n > u && (n = u), u - n < r - i && (n = u - (r - i)), n <= i + 1)
        return e.substring(0, r - i) + t;
      if (r < s)
        throw new RangeError(`Minimum abbreviation width with offset is ${s}`);
      return n + r - i < u ? t + X(e.substring(n), t, 0, r - i) : t + e.substring(u - (r - i));
    }
  }
}
function dt(e, t, n) {
  return n ? (n + e + n).indexOf(n + t + n) > -1 : e.indexOf(t) > -1;
}
function wt(e, ...t) {
  if (t.length !== 0) {
    for (const n of t)
      if ($(e, n))
        return !0;
  }
  return !1;
}
function J(e, t) {
  if ($(e, t))
    return !0;
  if (e !== null && t !== null) {
    if (e.length !== t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (!$(e.charAt(n).toUpperCase(), t.charAt(n).toUpperCase()))
        return !1;
    return !0;
  } else
    return !1;
}
function yt(e, ...t) {
  if (t.length !== 0) {
    for (const n of t)
      if (J(e, n))
        return !0;
  }
  return !1;
}
function pt(e) {
  return e.replace(/[&<>'"]/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[t] || t);
}
function A(e) {
  const t = h.isString(e);
  return t === null ? null : t.replace(/(^\s*)|(\s*$)/g, "");
}
function Q(e) {
  return new RegExp("[A-Za-z]+", "g").test(e);
}
const $t = function(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    Q(e[r]) ? n++ : n += t;
  return n;
};
function St(e, t = !1, n = 2) {
  return t ? $t(A(e), n) : e.length;
}
function bt(e) {
  return new RegExp("[\\u4E00-\\u9FFF]+", "g").test(e);
}
function Et(e) {
  const t = h.isString(e);
  return t === null ? null : t.replace(/(^\s*)/g, "");
}
function Tt(e) {
  const t = h.isString(e);
  return t === null ? null : t.replace(/(\s*$)/g, "");
}
function W(e, t = null) {
  let n = T(e);
  if (n === 0)
    return e;
  {
    const r = h.isString(t);
    if (r === null)
      for (; n !== 0 && M(e.charAt(n - 1)); )
        --n;
    else {
      if (r.length === 0)
        return e;
      for (; n !== 0 && r.indexOf(e.charAt(n - 1)) !== -1; )
        --n;
    }
    return e.substring(0, n);
  }
}
function ee(e, t = null) {
  const n = T(e);
  if (n === 0)
    return e;
  {
    let r = 0;
    const i = h.isString(t);
    if (i === null)
      for (; r !== n && M(e.charAt(r)); )
        ++r;
    else {
      if (i.length === 0)
        return e;
      for (; r !== n && i.indexOf(e.charAt(r)) !== -1; )
        ++r;
    }
    return e.substring(r);
  }
}
function D(e, t = null) {
  return e = ee(e, t), W(e, t);
}
function At(e, t = null) {
  if (e === null)
    return null;
  if (!Array.isArray(e))
    throw new TypeError("The paramter type is array");
  const n = e.length;
  if (n === 0)
    return e;
  const r = [];
  for (let i = 0; i < n; i++)
    r.push(D(e[i], t));
  return r;
}
function Dt(e) {
  return e === null ? "" : D(e, null);
}
function xt(e) {
  return e === null ? null : (e = D(e, null), e.length === 0 ? null : e);
}
function Ft(e, t = null) {
  if (g(e))
    return e;
  if (typeof t == "number")
    if (t >= 32 && t < 127) {
      const n = String.fromCharCode(t), r = e.indexOf(n);
      return r === -1 ? "" : e.substring(r + 1);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (g(t))
      return "";
    if (typeof t == "string") {
      const n = e.indexOf(t);
      return n === -1 ? "" : e.substring(n + t.length);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function Ct(e, t = null) {
  if (g(e))
    return e;
  if (typeof t == "number")
    if (t >= 32 && t < 127) {
      const n = String.fromCharCode(t), r = e.lastIndexOf(n);
      return r !== -1 && r !== e.length - 1 ? e.substring(r + 1) : "";
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (g(t))
      return "";
    if (typeof t == "string") {
      const n = e.lastIndexOf(t);
      return n !== -1 && n !== e.length - t.length ? e.substring(n + t.length) : "";
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function It(e, t = null) {
  if (g(e))
    return e;
  if (typeof t == "number")
    if (t >= 32 && t < 127) {
      const n = String.fromCharCode(t), r = e.indexOf(n);
      return r == -1 ? e : e.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (g(t))
      return "";
    if (typeof t == "string") {
      const n = e.indexOf(t);
      return n == -1 ? e : e.substring(0, n);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function Mt(e, t = null) {
  if (g(e))
    return e;
  if (typeof t == "number")
    if (t >= 32 && t < 127) {
      const n = String.fromCharCode(t), r = e.lastIndexOf(n);
      return r === -1 ? e : e.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (g(t))
      return "";
    if (typeof t == "string") {
      const n = e.lastIndexOf(t);
      return n === -1 ? e : e.substring(0, n);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function vt(e, t, n) {
  if (k(e, t, n)) {
    const r = e.indexOf(t);
    if (r !== -1) {
      const i = e.indexOf(n, r + t.length);
      if (i !== -1)
        return e.substring(r + t.length, i);
    }
    return null;
  } else
    return null;
}
function Nt(e, t, n) {
  if (e === null || g(t) || g(n))
    return null;
  const r = e.length;
  if (r === 0)
    return [];
  {
    const i = n.length, o = t.length, s = [];
    let u;
    for (let c = 0; c < r - i; c = u + i) {
      const a = e.indexOf(t, c);
      if (a < 0)
        break;
      const v = a + o;
      if (u = e.indexOf(n, v), u < 0)
        break;
      s.push(e.substring(v, u));
    }
    return s.length === 0 ? null : s;
  }
}
function Pt(e) {
  return e === null ? "" : A(e);
}
function Rt(e) {
  const t = A(e);
  return g(t) ? null : t;
}
function Ot(e, t, n) {
  if (t < 0)
    throw new RangeError("offset cannot be negative");
  if (n < 0)
    throw new RangeError("maxWith cannot be negative");
  if (e === null)
    return null;
  if (t > e.length)
    return "";
  if (e.length > n) {
    const r = Math.min(t + n, e.length);
    return e.substring(t, r);
  } else
    return e.substring(t);
}
function Lt(e) {
  return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (t) => ({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#39;": "'",
    "&quot;": '"'
  })[t] || t);
}
function Ut(e, t) {
  return g(e) || g(t) ? e : t.concat(e).concat(t);
}
function _t(e, t) {
  if (g(e) || g(t))
    return e;
  const n = !e.startsWith(t), r = !e.endsWith(t);
  if (!n && !r)
    return e;
  {
    let i = "";
    return n && (i = i.concat(t)), i = i.concat(e), r && (i = i.concat(t)), i;
  }
}
const Yt = {
  abbreviate: X,
  contains: dt,
  equals: $,
  equalsAny: wt,
  equalsAnyIgnoreCase: yt,
  equalsIgnoreCase: J,
  escapeHTML: pt,
  getStrLength: St,
  isAnyEmpty: G,
  isEmpty: g,
  isEN: Q,
  isZH: bt,
  length: T,
  ltrim: Et,
  rtrim: Tt,
  startsWith: C,
  strip: D,
  stripAll: At,
  stripEnd: W,
  stripStart: ee,
  stripToEmpty: Dt,
  stripToNull: xt,
  substring: K,
  substringAfter: Ft,
  substringAfterLast: Ct,
  substringBefore: It,
  substringBeforeLast: Mt,
  substringBetween: vt,
  substringsBetween: Nt,
  trim: A,
  trimToEmpty: Pt,
  trimToNull: Rt,
  truncate: Ot,
  unescapeHTML: Lt,
  upperCase: x,
  wrap: Ut,
  wrapIfMissing: _t
}, Ht = {
  ArrayUtils: je,
  CharUtils: Ke,
  DateUtils: ft,
  DutyLink: y,
  NumberUtils: gt,
  ObjectUtils: mt,
  StringUtils: Yt,
  Utils: Oe
};
export {
  je as ArrayUtils,
  Ke as CharUtils,
  ft as DateUtils,
  y as DutyLink,
  gt as NumberUtils,
  mt as ObjectUtils,
  Yt as StringUtils,
  Oe as Utils,
  Ht as default
};
