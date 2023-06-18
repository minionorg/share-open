var S = Object.defineProperty;
var P = (t, e, n) => e in t ? S(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var g = (t, e, n) => (P(t, typeof e != "symbol" ? e + "" : e, n), n);
function x(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function p(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${x(t)}]`;
  };
}
function b(t, e) {
  const n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), r = t.match(n);
  return r !== null ? r[2] : null;
}
function y(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${x(t)}]`;
  };
}
function R(t, e = ".") {
  if (!t)
    return !1;
  const n = t.trim().split(e);
  for (const r of n)
    if (!r || /\s/.test(r))
      return !1;
  return !0;
}
function A(t, e, n = void 0, r = ".") {
  if (!y("String")(e))
    throw new TypeError(`${e} is not string type`);
  if (!R(e, r))
    throw new Error(`Invalid: ${e}`);
  const u = e.trim().split(r);
  let s = t;
  for (const i of u)
    if (Array.isArray(s) && /^\d+$/.test(i)) {
      const a = parseInt(i, 10);
      if (a < s.length)
        s = s[a];
      else
        return n;
    } else if (typeof s == "object" && i in s)
      s = s[i];
    else
      return n;
  return s;
}
const N = "[\\u2700-\\u27BF]", D = "[\\uE000-\\uF8FF]", j = "\\uD83C[\\uDC00-\\uDFFF]", O = "\\uD83D[\\uDC00-\\uDFFF]", v = "[\\u2011-\\u26FF]", I = "\\uD83E[\\uDD10-\\uDDFF]";
function C(t) {
  return RegExp(
    `(${N}|${D}|${j}|${O}|${v}|${I})`,
    "g"
  ).test(t);
}
function _(t) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    t
  );
}
class l {
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
    if (y("string")(e))
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
g(l, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const d = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", c = `(${d}[.]){3}${d}`, L = new RegExp(`^${c}$`);
function w(t) {
  return l.isString(t) === null ? !1 : L.test(t);
}
function E(t, e, n = !1) {
  if (t !== null && e !== null) {
    const r = e.length;
    return r > t.length ? !1 : U(t, n, 0, e, 0, r);
  } else
    return t === e;
}
function U(t, e, n, r, u, s) {
  e && (t = t.toLowerCase(), r = r.toLowerCase());
  const i = n + s;
  let a = 0;
  for (let f = n; f < i; f++) {
    if (t.charAt(f) !== r.charAt(u + a))
      return !1;
    a++;
  }
  return !0;
}
const T = /^\d{1,3}$/;
function M(t) {
  if (l.isString(t) === null)
    return !1;
  const n = t.split("/");
  return n.length !== 2 || !T.test(n[1]) || n[1].length > 1 && E(n[1], "0") || !w(n[0]) ? !1 : Number(n[1]) <= 32 && Number(n[1]) >= 0;
}
const o = "(?:[0-9a-fA-F]{1,4})", B = new RegExp(
  `^((?:${o}:){7}(?:${o}|:)|(?:${o}:){6}(?:${c}|:${o}|:)|(?:${o}:){5}(?::${c}|(:${o}){1,2}|:)|(?:${o}:){4}(?:(:${o}){0,1}:${c}|(:${o}){1,3}|:)|(?:${o}:){3}(?:(:${o}){0,2}:${c}|(:${o}){1,4}|:)|(?:${o}:){2}(?:(:${o}){0,3}:${c}|(:${o}){1,5}|:)|(?:${o}:){1}(?:(:${o}){0,4}:${c}|(:${o}){1,6}|:)|(?::((?::${o}){0,5}:${c}|(?::${o}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function F(t) {
  return l.isString(t) === null ? !1 : B.test(t);
}
const k = /^\d{1,3}$/;
function z(t) {
  if (l.isString(t) === null)
    return !1;
  const n = t.split("/");
  return n.length !== 2 || !k.test(n[1]) || n[1].length > 1 && E(n[1], "0") || !F(n[0]) ? !1 : Number(n[1]) <= 128 && Number(n[1]) >= 0;
}
function V(t) {
  return /^((\+86)|(86))?(1)\d{10}$/.test("" + t);
}
function Z(t) {
  return /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test("" + t);
}
function H(t, e) {
  if (l.isString(t) === null)
    return !1;
  const r = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, u = /^[-+]?[0-9]+$/, s = e || {}, i = Object.prototype.hasOwnProperty, f = (Object.prototype.hasOwnProperty.call(s, "zeroes") && !s.zeroes ? r : u).test(t), m = parseInt(t, 10);
  return f && (!i.call(s, "min") || m >= s.min) && (!i.call(s, "max") || m <= s.max) && (!i.call(s, "lt") || m < s.lt) && (!i.call(s, "gt") || m > s.gt);
}
function q(t) {
  return H(t, { min: 0, max: 65535 });
}
function K(t) {
  return /^\d{6}$/.test("" + t);
}
const G = p("Function");
class $ {
  constructor(e, n = "nextSuccessor") {
    g(this, "fn");
    g(this, "nextNode");
    g(this, "nextFlag");
    if (!G(e))
      throw new Error(`${e} is no a function`);
    this.fn = e, this.nextNode = null, this.nextFlag = n;
  }
  after(e, n = this.nextFlag) {
    const r = e instanceof $;
    return this.nextNode = r ? e : new $(e, n);
  }
  start(...e) {
    const n = this.fn.apply(this, e);
    return n === this.nextFlag ? this.next.apply(this, e) : n;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const W = p("Object"), X = function(t) {
  return Object.getOwnPropertyNames(t).length === 0 ? !0 : "nextSuccessor";
}, J = function(t) {
  return Object.keys(t).length === 0;
};
function h(t) {
  if (!W(t))
    throw new Error(`${t} is no a object type`);
  const e = new $(X);
  return e.after(J), e.start(t);
}
function Q(t) {
  const e = /([^?=&]+)=([^&]*)/gi, n = {};
  return t.replace(e, (r, u, s) => {
    n[u] = s;
  }), h(n) ? "nextSuccessor" : n;
}
function Y(t) {
  const e = t.split("?")[1], n = {}, r = e && e.split("&");
  return r && r.reduce((u, s) => {
    const i = s.split("=");
    return u[i[0]] = i[1], u;
  }, n), h(n) ? "nextSuccessor" : n;
}
function tt(t) {
  const e = t.split("?")[1], n = new URLSearchParams(e), r = {};
  for (const u of n)
    r[u[0]] = u[1];
  return h(r) ? null : r;
}
function et(t) {
  const e = new $(Q);
  return e.after(Y).after(tt), e.start(t);
}
const rt = {
  createType: p,
  getURLValueByKey: b,
  getValue: A,
  hasEmoji: C,
  isEmail: _,
  isIPv4: w,
  isIPv4Range: M,
  isIPv6: F,
  isIPv6Range: z,
  isMobile: V,
  isPhone: Z,
  isPort: q,
  isPostalCode: K,
  queryURLParams: et,
  validateTypeHoc: y
};
export {
  p as createType,
  rt as default,
  b as getURLValueByKey,
  A as getValue,
  C as hasEmoji,
  _ as isEmail,
  w as isIPv4,
  M as isIPv4Range,
  F as isIPv6,
  z as isIPv6Range,
  V as isMobile,
  Z as isPhone,
  q as isPort,
  K as isPostalCode,
  et as queryURLParams,
  y as validateTypeHoc
};
