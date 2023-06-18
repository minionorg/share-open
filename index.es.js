var K = Object.defineProperty;
var X = (e, t, n) => t in e ? K(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (X(e, typeof t != "symbol" ? t + "" : t, n), n);
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
function J(e, t, n) {
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
function Q(e, ...t) {
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
function C(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${x(e)}]`;
  };
}
function W(e, t) {
  const n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), r = e.match(n);
  return r !== null ? r[2] : null;
}
function ee(e, t = ".") {
  if (!e)
    return !1;
  const n = e.trim().split(t);
  for (const r of n)
    if (!r || /\s/.test(r))
      return !1;
  return !0;
}
function te(e, t, n = void 0, r = ".") {
  if (!l("String")(t))
    throw new TypeError(`${t} is not string type`);
  if (!ee(t, r))
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
const ne = "[\\u2700-\\u27BF]", re = "[\\uE000-\\uF8FF]", ie = "\\uD83C[\\uDC00-\\uDFFF]", oe = "\\uD83D[\\uDC00-\\uDFFF]", se = "[\\u2011-\\u26FF]", ue = "\\uD83E[\\uDD10-\\uDDFF]";
function le(e) {
  return RegExp(
    `(${ne}|${re}|${ie}|${oe}|${se}|${ue})`,
    "g"
  ).test(e);
}
function ce(e) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    e
  );
}
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
p(a, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const v = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", w = `(${v}[.]){3}${v}`, fe = new RegExp(`^${w}$`);
function P(e) {
  return a.isString(e) === null ? !1 : fe.test(e);
}
function F(e, t, n = !1) {
  if (e !== null && t !== null) {
    const r = t.length;
    return r > e.length ? !1 : ae(e, n, 0, t, 0, r);
  } else
    return e === t;
}
function ae(e, t, n, r, i, o) {
  t && (e = e.toLowerCase(), r = r.toLowerCase());
  const s = n + o;
  let u = 0;
  for (let f = n; f < s; f++) {
    if (e.charAt(f) !== r.charAt(i + u))
      return !1;
    u++;
  }
  return !0;
}
const ge = /^\d{1,3}$/;
function he(e) {
  if (a.isString(e) === null)
    return !1;
  const n = e.split("/");
  return n.length !== 2 || !ge.test(n[1]) || n[1].length > 1 && F(n[1], "0") || !P(n[0]) ? !1 : Number(n[1]) <= 32 && Number(n[1]) >= 0;
}
const c = "(?:[0-9a-fA-F]{1,4})", me = new RegExp(
  `^((?:${c}:){7}(?:${c}|:)|(?:${c}:){6}(?:${w}|:${c}|:)|(?:${c}:){5}(?::${w}|(:${c}){1,2}|:)|(?:${c}:){4}(?:(:${c}){0,1}:${w}|(:${c}){1,3}|:)|(?:${c}:){3}(?:(:${c}){0,2}:${w}|(:${c}){1,4}|:)|(?:${c}:){2}(?:(:${c}){0,3}:${w}|(:${c}){1,5}|:)|(?:${c}:){1}(?:(:${c}){0,4}:${w}|(:${c}){1,6}|:)|(?::((?::${c}){0,5}:${w}|(?::${c}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function R(e) {
  return a.isString(e) === null ? !1 : me.test(e);
}
const de = /^\d{1,3}$/;
function we(e) {
  if (a.isString(e) === null)
    return !1;
  const n = e.split("/");
  return n.length !== 2 || !de.test(n[1]) || n[1].length > 1 && F(n[1], "0") || !R(n[0]) ? !1 : Number(n[1]) <= 128 && Number(n[1]) >= 0;
}
function ye(e) {
  return /^((\+86)|(86))?(1)\d{10}$/.test("" + e);
}
function pe(e) {
  return /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test("" + e);
}
function m(e, t) {
  if (a.isString(e) === null)
    return !1;
  const r = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, i = /^[-+]?[0-9]+$/, o = t || {}, s = Object.prototype.hasOwnProperty, f = (Object.prototype.hasOwnProperty.call(o, "zeroes") && !o.zeroes ? r : i).test(e), d = parseInt(e, 10);
  return f && (!s.call(o, "min") || d >= o.min) && (!s.call(o, "max") || d <= o.max) && (!s.call(o, "lt") || d < o.lt) && (!s.call(o, "gt") || d > o.gt);
}
function $e(e) {
  return m(e, { min: 0, max: 65535 });
}
function be(e) {
  return /^\d{6}$/.test("" + e);
}
const Se = C("Function");
class y {
  constructor(t, n = "nextSuccessor") {
    p(this, "fn");
    p(this, "nextNode");
    p(this, "nextFlag");
    if (!Se(t))
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
const Ee = C("Object"), Ae = function(e) {
  return Object.getOwnPropertyNames(e).length === 0 ? !0 : "nextSuccessor";
}, Te = function(e) {
  return Object.keys(e).length === 0;
};
function E(e) {
  if (!Ee(e))
    throw new Error(`${e} is no a object type`);
  const t = new y(Ae);
  return t.after(Te), t.start(e);
}
function De(e) {
  const t = /([^?=&]+)=([^&]*)/gi, n = {};
  return e.replace(t, (r, i, o) => {
    n[i] = o;
  }), E(n) ? "nextSuccessor" : n;
}
function xe(e) {
  const t = e.split("?")[1], n = {}, r = t && t.split("&");
  return r && r.reduce((i, o) => {
    const s = o.split("=");
    return i[s[0]] = s[1], i;
  }, n), E(n) ? "nextSuccessor" : n;
}
function Ce(e) {
  const t = e.split("?")[1], n = new URLSearchParams(t), r = {};
  for (const i of n)
    r[i[0]] = i[1];
  return E(r) ? null : r;
}
function Fe(e) {
  const t = new y(De);
  return t.after(xe).after(Ce), t.start(e);
}
const Ie = {
  createType: C,
  getURLValueByKey: W,
  getValue: te,
  hasEmoji: le,
  isEmail: ce,
  isIPv4: P,
  isIPv4Range: he,
  isIPv6: R,
  isIPv6Range: we,
  isMobile: ye,
  isPhone: pe,
  isPort: $e,
  isPostalCode: be,
  queryURLParams: Fe,
  validateTypeHoc: l
};
function Me(e) {
  if (e === null)
    return null;
  if (!l("Array")(e))
    throw new TypeError("The ary must be array");
  return [...e];
}
function Ne(e, t) {
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
function ve(e, t, n) {
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
function Pe(e, t) {
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
const Re = {
  add: J,
  addAll: Q,
  clone: Me,
  remove: Ne,
  toAdded: ve,
  toRemoved: Pe
};
function h(e, t) {
  if (!l("string")(e))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && e.length === 0 ? t : e.charAt(0);
}
function Oe(e, t) {
  const n = h(e), r = h(t);
  return Number.isNaN(n.charCodeAt(0)) && Number.isNaN(r.charCodeAt(0)) ? 0 : n.charCodeAt(0) - r.charCodeAt(0);
}
function Le(e) {
  return h(e).charCodeAt(0) < 128;
}
function O(e) {
  const t = h(e);
  return t >= "A" && t <= "Z";
}
function L(e) {
  const t = h(e);
  return t >= "a" && t <= "z";
}
function U(e) {
  return O(e) || L(e);
}
function I(e) {
  const t = h(e);
  return t >= "0" && t <= "9";
}
function Ue(e) {
  return U(e) || I(e);
}
function _e(e) {
  const t = h(e);
  return t < " " || t.charCodeAt(0) < 32 || t.charCodeAt(0) === 127;
}
function je(e) {
  const t = h(e);
  return (t >= " " || t.charCodeAt(0) >= 32) && t.charCodeAt(0) < 127;
}
function M(e) {
  const t = h(e);
  return t === " " || t === `
` || t === "\r" || t === "	" || t === "\f";
}
function Ye(e, t) {
  if (!I(e)) {
    if (t !== void 0)
      return t;
    throw new RangeError("The character " + e + " is not in the range '0' - '9'");
  }
  return e.charCodeAt(0) - 48;
}
const b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function He(e) {
  const t = h(e).charCodeAt(0);
  return "\\u" + b[t >> 12 & 15] + b[t >> 8 & 15] + b[t >> 4 & 15] + b[t & 15];
}
function qe(e) {
  return e.replace(/\\u([\d\w]{4})/gi, function(t, n) {
    return String.fromCharCode(parseInt(n, 16));
  });
}
const Be = {
  compare: Oe,
  isAscii: Le,
  isAsciiAlpha: U,
  isAsciiAlphaLower: L,
  isAsciiAlphanumeric: Ue,
  isAsciiAlphaUpper: O,
  isAsciiControl: _e,
  isAsciiNumeric: I,
  isAsciiPrintable: je,
  isWhitespace: M,
  toChar: h,
  toIntValue: Ye,
  unicodeEscaped: He,
  unicodeUnescaped: qe
};
function Ze(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setDate(n.getDate() + (l("Number")(t) ? t : +t)), n;
}
function ze(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setHours(n.getHours() + (l("Number")(t) ? t : +t)), n;
}
function Ve(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setMinutes(n.getMinutes() + (l("Number")(t) ? t : +t)), n;
}
function ke(e, t) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + ""))
    throw new SyntaxError(`Invalid number: ${t}`);
  const n = new Date(e.getTime());
  return n.setSeconds(n.getSeconds() + (l("Number")(t) ? t : +t)), n;
}
function Ge(e, t = 0, n = 0, r = 0, i = 0) {
  if (!l("Date")(e))
    throw new TypeError(`Invalid date: ${e}`);
  if (!m(t + "") || !m(n + "") || !m(r + "") || !m(i + ""))
    throw new SyntaxError("Invalid time values");
  const o = new Date(e.getTime());
  return o.setDate(o.getDate() + (l("Number")(t) ? t : +t)), o.setHours(o.getHours() + (l("Number")(n) ? n : +n)), o.setMinutes(o.getMinutes() + (l("Number")(r) ? r : +r)), o.setSeconds(o.getSeconds() + (l("Number")(i) ? i : +i)), o;
}
function Ke(e) {
  return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
    e
  );
}
function Xe(e, t) {
  const n = [], r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++)
    n.push([e[i], t[i]]);
  return n;
}
function S(e, t) {
  if (t = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1,
    ...t
  }, l("String")(e) && Ke(t.format)) {
    const n = t.delimiters.find((s) => t.format.indexOf(s) !== -1), r = t.strictMode ? n : t.delimiters.find((s) => e.indexOf(s) !== -1), i = Xe(e.split(r), t.format.toLowerCase().split(n)), o = {};
    for (const [s, u] of i) {
      if (s.length !== u.length)
        return !1;
      o[u.charAt(0)] = s;
    }
    return new Date(`${o.m}/${o.d}/${o.y}`).getDate() === +o.d;
  }
  return t.strictMode ? !1 : l("Date")(e);
}
function Je(e, t) {
  const n = [], r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++)
    n.push([e[i], t[i]]);
  return n;
}
function Qe(e, t, n) {
  const r = t.delimiters.find((u) => t.format.indexOf(u) !== -1), i = t.strictMode ? r : t.delimiters.find((u) => e.indexOf(u) !== -1), o = Je(e.split(i), t.format.toLowerCase().split(r)), s = {};
  for (const [u, f] of o) {
    if (u.length !== f.length)
      throw new SyntaxError(`${t.format} format is error`);
    s[f.charAt(0)] = u;
  }
  return n.format.replace(/(y{4}|y{2})/gi, s.y).replace(/(m{1,2})/gi, s.m).replace(/(d{1,2})/gi, s.d);
}
function We(e, t) {
  const n = e.getFullYear();
  return t.format.replace(/(y{4}|y{2})/gi, n + "").replace(/(m{1,2})/gi, (i) => i.length === 1 ? String(e.getMonth() + 1) : String(e.getMonth() + 1).padStart(2, "0")).replace(/(d{1,2})/gi, (i) => i.length === 1 ? String(e.getDate()) : String(e.getDate()).padStart(2, "0"));
}
function _(e) {
  if (!a.isValidDateFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid date format`);
  return function(t, n) {
    if (n = {
      format: "YYYY/MM/DD",
      delimiters: ["/", "-"],
      strictMode: !1,
      ...n
    }, !S(t, n))
      throw new SyntaxError(`${t} is not valid date`);
    if (l("String")(t))
      return Qe(t, n, e);
    if (l("Date")(t))
      return We(t, e);
  };
}
function et(e, t, n) {
  const r = n || {
    start: void 0,
    finish: void 0
  };
  if (!S(e, r.start) || !S(t, r.finish))
    throw new SyntaxError("Invalid date values");
  const i = _({
    format: "YYYY/MM/DD"
  }), o = 24 * 60 * 60 * 1e3, s = new Date(i(e, r.start)), u = new Date(i(t, r.finish)), f = Math.abs(u.getTime() - s.getTime());
  return Math.ceil(f / o);
}
function j(e) {
  return new Date(e.getFullYear(), 2, 0).getDate() === 29;
}
function tt(e) {
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
      return j(e) ? 29 : 28;
    default:
      return 30;
  }
}
function nt(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function rt(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
const it = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function ot(e, t) {
  if (!l("String")(e))
    return !1;
  if (t = {
    format: "HH:MM:SS",
    mode: 24,
    ...t
  }, !a.isTimeFormat(t.format))
    throw new SyntaxError(`${t.format} is not valid format`);
  if (![24, 12].includes(t.mode))
    throw new SyntaxError(`${t.mode} is not valid mode`);
  const n = t.format.match(/s/ig), r = n && n.length > 0;
  return it[t.mode][r ? "hasSecond" : "default"].test(e);
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
function Y(e, t, n) {
  let r;
  for (const i in t)
    if (["12", "24"].includes(i)) {
      const o = Y(e, t[i], i);
      o && (r = o);
    } else if (t[i].test(e))
      return {
        mode: n,
        format: i,
        matches: e.match(t[i])
      };
  return r;
}
function ut(e) {
  if (!a.isTimeFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid format`);
  if (![24, 12].includes(e.mode))
    throw new SyntaxError(`${e.mode} is not valid mode`);
  return function(t) {
    const n = Y(t, st, void 0);
    if (!n)
      throw new SyntaxError(`${t} is not valid time`);
    const r = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (n.mode === "12") {
      const [o, s, u, f] = [...n.matches].splice(1, 4);
      r.h = o, r.m = s, r.s = u, r.b = f, e.mode === 24 && f === "P" && (r.h = +o + 12 + "");
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
function lt(e) {
  const t = new Date(e.getTime()), n = t.getUTCFullYear(), r = String(t.getUTCMonth() + 1).padStart(2, "0"), i = String(t.getUTCDate()).padStart(2, "0"), o = String(t.getUTCHours()).padStart(2, "0"), s = String(t.getUTCMinutes()).padStart(2, "0"), u = String(t.getUTCSeconds()).padStart(2, "0"), f = String((t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5)).padStart(3, "0");
  return `${n}-${r}-${i}T${o}:${s}:${u}.${f}Z`;
}
const ct = {
  addDays: Ze,
  addHours: ze,
  addMinutes: Ve,
  addSecs: ke,
  addTime: Ge,
  dateFormatHoc: _,
  getDatePeriod: et,
  getDaysInMonth: tt,
  getFirstDateInMonth: nt,
  getLastDateInMonth: rt,
  isDate: S,
  isLeapYear: j,
  isTime: ot,
  timeFormatHoc: ut,
  toISOString: lt
};
function ft(e, t) {
  const n = a.isString(e);
  if ([null, "", ".", ",", "-", "+"].includes(n))
    return !1;
  const r = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"), i = t || {}, o = Object.prototype.hasOwnProperty, s = parseFloat(n.replace(",", "."));
  return r.test(e) && (!o.call(i, "min") || s >= i.min) && (!o.call(i, "max") || s <= i.max) && (!o.call(i, "lt") || s < i.lt) && (!o.call(i, "gt") || s > i.gt);
}
const at = {
  isFloat: ft,
  isInteger: m
};
function H(...e) {
  if (e === null)
    return !1;
  for (const t of e)
    if (t === null)
      return !1;
  return !0;
}
const gt = {
  allNotNull: H,
  isEmpty: E
};
function $(e, t) {
  const n = a.isString(e), r = a.isString(t);
  return n === r;
}
function g(e) {
  const t = a.isString(e);
  return t === null || t.length === 0;
}
function q(...e) {
  if (e.length === 0)
    return !1;
  for (const t of e)
    if (g(t))
      return !0;
  return !1;
}
function A(e) {
  const t = a.isString(e);
  return t === null ? 0 : t.length;
}
function B(e, t = 0, n = 0) {
  if (e === null)
    return e;
  const r = l("Number");
  if (!r(t) || !r(n))
    throw new TypeError("The start or end paramter type is number");
  const i = A(e);
  return n < 0 && (n = i + n), t < 0 && (t = i + t), n > i && (n = i), t > n ? "" : (t < 0 && (t = 0), n < 0 && (n = 0), e.substring(t, n));
}
function Z(e, t, n, r) {
  if (!g(e) && $("", t) && t.length > 0)
    return B(e, 0, r);
  if (q(e, t))
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
      return n + r - i < u ? t + Z(e.substring(n), t, 0, r - i) : t + e.substring(u - (r - i));
    }
  }
}
function ht(e, t, n) {
  return n ? (n + e + n).indexOf(n + t + n) > -1 : e.indexOf(t) > -1;
}
function mt(e, ...t) {
  if (t.length !== 0) {
    for (const n of t)
      if ($(e, n))
        return !0;
  }
  return !1;
}
function z(e, t) {
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
function dt(e, ...t) {
  if (t.length !== 0) {
    for (const n of t)
      if (z(e, n))
        return !0;
  }
  return !1;
}
function wt(e) {
  return e.replace(/[&<>'"]/g, (t) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[t] || t);
}
function T(e) {
  const t = a.isString(e);
  return t === null ? null : t.replace(/(^\s*)|(\s*$)/g, "");
}
function V(e) {
  return new RegExp("[A-Za-z]+", "g").test(e);
}
const yt = function(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    V(e[r]) ? n++ : n += t;
  return n;
};
function pt(e, t = !1, n = 2) {
  return t ? yt(T(e), n) : e.length;
}
function $t(e) {
  return new RegExp("[\\u4E00-\\u9FFF]+", "g").test(e);
}
function bt(e) {
  const t = a.isString(e);
  return t === null ? null : t.replace(/(^\s*)/g, "");
}
function St(e) {
  const t = a.isString(e);
  return t === null ? null : t.replace(/(\s*$)/g, "");
}
function k(e, t = null) {
  let n = A(e);
  if (n === 0)
    return e;
  {
    const r = a.isString(t);
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
function G(e, t = null) {
  const n = A(e);
  if (n === 0)
    return e;
  {
    let r = 0;
    const i = a.isString(t);
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
  return e = G(e, t), k(e, t);
}
function Et(e, t = null) {
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
function At(e) {
  return e === null ? "" : D(e, null);
}
function Tt(e) {
  return e === null ? null : (e = D(e, null), e.length === 0 ? null : e);
}
function Dt(e, t = null) {
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
function xt(e, t = null) {
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
function Ct(e, t = null) {
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
function Ft(e, t = null) {
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
function It(e, t, n) {
  if (H(e, t, n)) {
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
function Mt(e, t, n) {
  if (e === null || g(t) || g(n))
    return null;
  const r = e.length;
  if (r === 0)
    return [];
  {
    const i = n.length, o = t.length, s = [];
    let u;
    for (let f = 0; f < r - i; f = u + i) {
      const d = e.indexOf(t, f);
      if (d < 0)
        break;
      const N = d + o;
      if (u = e.indexOf(n, N), u < 0)
        break;
      s.push(e.substring(N, u));
    }
    return s.length === 0 ? null : s;
  }
}
function Nt(e) {
  return e === null ? "" : T(e);
}
function vt(e) {
  const t = T(e);
  return g(t) ? null : t;
}
function Pt(e, t, n) {
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
function Rt(e) {
  return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (t) => ({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#39;": "'",
    "&quot;": '"'
  })[t] || t);
}
function Ot(e, t) {
  return g(e) || g(t) ? e : t.concat(e).concat(t);
}
function Lt(e, t) {
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
const Ut = {
  abbreviate: Z,
  contains: ht,
  equals: $,
  equalsAny: mt,
  equalsAnyIgnoreCase: dt,
  equalsIgnoreCase: z,
  escapeHTML: wt,
  getStrLength: pt,
  isAnyEmpty: q,
  isEmpty: g,
  isEN: V,
  isZH: $t,
  length: A,
  ltrim: bt,
  rtrim: St,
  startsWith: F,
  strip: D,
  stripAll: Et,
  stripEnd: k,
  stripStart: G,
  stripToEmpty: At,
  stripToNull: Tt,
  substring: B,
  substringAfter: Dt,
  substringAfterLast: xt,
  substringBefore: Ct,
  substringBeforeLast: Ft,
  substringBetween: It,
  substringsBetween: Mt,
  trim: T,
  trimToEmpty: Nt,
  trimToNull: vt,
  truncate: Pt,
  unescapeHTML: Rt,
  upperCase: x,
  wrap: Ot,
  wrapIfMissing: Lt
}, jt = {
  ArrayUtils: Re,
  CharUtils: Be,
  DateUtils: ct,
  DutyLink: y,
  NumberUtils: at,
  ObjectUtils: gt,
  StringUtils: Ut,
  Utils: Ie
};
export {
  Re as ArrayUtils,
  Be as CharUtils,
  ct as DateUtils,
  y as DutyLink,
  at as NumberUtils,
  gt as ObjectUtils,
  Ut as StringUtils,
  Ie as Utils,
  jt as default
};
