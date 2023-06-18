var $ = Object.defineProperty;
var N = (n, e, t) => e in n ? $(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var E = (n, e, t) => (N(n, typeof e != "symbol" ? e + "" : e, t), t);
function y(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function T(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${y(n)}]`;
  };
}
function m(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(e) {
    return Object.prototype.toString.call(e) === `[object ${y(n)}]`;
  };
}
function _(n, e, t = !1) {
  if (n !== null && e !== null) {
    const r = e.length;
    return r > n.length ? !1 : R(n, t, 0, e, 0, r);
  } else
    return n === e;
}
function R(n, e, t, r, i, c) {
  e && (n = n.toLowerCase(), r = r.toLowerCase());
  const f = t + c;
  let l = 0;
  for (let s = t; s < f; s++) {
    if (n.charAt(s) !== r.charAt(i + l))
      return !1;
    l++;
  }
  return !0;
}
T("Function");
T("Object");
class o {
  constructor() {
  }
  static notNull(e, t) {
    if (e === null)
      throw new SyntaxError(t || "The value must not be empty");
  }
  static notEmpty(e, t) {
    if (e.length === 0)
      throw new SyntaxError(t || "The String must not be empty");
  }
  static errMsg(e) {
    return function(t) {
      return `${e}: ${t}`;
    };
  }
  static isString(e) {
    if (e === null)
      return null;
    if (m("string")(e))
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
E(o, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function g(n, e) {
  const t = o.isString(n), r = o.isString(e);
  return t === r;
}
function u(n) {
  const e = o.isString(n);
  return e === null || e.length === 0;
}
function A(...n) {
  if (n.length === 0)
    return !1;
  for (const e of n)
    if (u(e))
      return !0;
  return !1;
}
function h(n) {
  const e = o.isString(n);
  return e === null ? 0 : e.length;
}
function S(n, e = 0, t = 0) {
  if (n === null)
    return n;
  const r = m("Number");
  if (!r(e) || !r(t))
    throw new TypeError("The start or end paramter type is number");
  const i = h(n);
  return t < 0 && (t = i + t), e < 0 && (e = i + e), t > i && (t = i), e > t ? "" : (e < 0 && (e = 0), t < 0 && (t = 0), n.substring(e, t));
}
function d(n, e, t, r) {
  if (!u(n) && g("", e) && e.length > 0)
    return S(n, 0, r);
  if (A(n, e))
    return n;
  {
    const i = e.length, c = i + 1, f = i + i + 1;
    if (r < c)
      throw new RangeError(`Minimum abbreviation width is ${c}`);
    {
      const l = n.length;
      if (l <= r)
        return n;
      if (t > l && (t = l), l - t < r - i && (t = l - (r - i)), t <= i + 1)
        return n.substring(0, r - i) + e;
      if (r < f)
        throw new RangeError(`Minimum abbreviation width with offset is ${f}`);
      return t + r - i < l ? e + d(n.substring(t), e, 0, r - i) : e + n.substring(l - (r - i));
    }
  }
}
function F(n, e, t) {
  return t ? (t + n + t).indexOf(t + e + t) > -1 : n.indexOf(e) > -1;
}
function q(n, ...e) {
  if (e.length !== 0) {
    for (const t of e)
      if (g(n, t))
        return !0;
  }
  return !1;
}
function C(n, e) {
  if (g(n, e))
    return !0;
  if (n !== null && e !== null) {
    if (n.length !== e.length)
      return !1;
    for (let t = 0; t < n.length; t++)
      if (!g(n.charAt(t).toUpperCase(), e.charAt(t).toUpperCase()))
        return !1;
    return !0;
  } else
    return !1;
}
function j(n, ...e) {
  if (e.length !== 0) {
    for (const t of e)
      if (C(n, t))
        return !0;
  }
  return !1;
}
function B(n) {
  return n.replace(/[&<>'"]/g, (e) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[e] || e);
}
function a(n) {
  const e = o.isString(n);
  return e === null ? null : e.replace(/(^\s*)|(\s*$)/g, "");
}
function O(n) {
  return new RegExp("[A-Za-z]+", "g").test(n);
}
const v = function(n, e) {
  let t = 0;
  for (let r = 0; r < n.length; r++)
    O(n[r]) ? t++ : t += e;
  return t;
};
function H(n, e = !1, t = 2) {
  return e ? v(a(n), t) : n.length;
}
function U(n) {
  return new RegExp("[\\u4E00-\\u9FFF]+", "g").test(n);
}
function D(n) {
  const e = o.isString(n);
  return e === null ? null : e.replace(/(^\s*)/g, "");
}
function M(n) {
  const e = o.isString(n);
  return e === null ? null : e.replace(/(\s*$)/g, "");
}
function Z(n, e) {
  if (!m("string")(n))
    throw new TypeError("The parameter type is string");
  return e !== void 0 && n.length === 0 ? e : n.charAt(0);
}
function L(n) {
  const e = Z(n);
  return e === " " || e === `
` || e === "\r" || e === "	" || e === "\f";
}
function I(n, e = null) {
  let t = h(n);
  if (t === 0)
    return n;
  {
    const r = o.isString(e);
    if (r === null)
      for (; t !== 0 && L(n.charAt(t - 1)); )
        --t;
    else {
      if (r.length === 0)
        return n;
      for (; t !== 0 && r.indexOf(n.charAt(t - 1)) !== -1; )
        --t;
    }
    return n.substring(0, t);
  }
}
function x(n, e = null) {
  const t = h(n);
  if (t === 0)
    return n;
  {
    let r = 0;
    const i = o.isString(e);
    if (i === null)
      for (; r !== t && L(n.charAt(r)); )
        ++r;
    else {
      if (i.length === 0)
        return n;
      for (; r !== t && i.indexOf(n.charAt(r)) !== -1; )
        ++r;
    }
    return n.substring(r);
  }
}
function b(n, e = null) {
  return n = x(n, e), I(n, e);
}
function z(n, e = null) {
  if (n === null)
    return null;
  if (!Array.isArray(n))
    throw new TypeError("The paramter type is array");
  const t = n.length;
  if (t === 0)
    return n;
  const r = [];
  for (let i = 0; i < t; i++)
    r.push(b(n[i], e));
  return r;
}
function G(n) {
  return n === null ? "" : b(n, null);
}
function P(n) {
  return n === null ? null : (n = b(n, null), n.length === 0 ? null : n);
}
function X(n, e = null) {
  if (u(n))
    return n;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const t = String.fromCharCode(e), r = n.indexOf(t);
      return r === -1 ? "" : n.substring(r + 1);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (u(e))
      return "";
    if (typeof e == "string") {
      const t = n.indexOf(e);
      return t === -1 ? "" : n.substring(t + e.length);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function J(n, e = null) {
  if (u(n))
    return n;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const t = String.fromCharCode(e), r = n.lastIndexOf(t);
      return r !== -1 && r !== n.length - 1 ? n.substring(r + 1) : "";
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (u(e))
      return "";
    if (typeof e == "string") {
      const t = n.lastIndexOf(e);
      return t !== -1 && t !== n.length - e.length ? n.substring(t + e.length) : "";
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function K(n, e = null) {
  if (u(n))
    return n;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const t = String.fromCharCode(e), r = n.indexOf(t);
      return r == -1 ? n : n.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (u(e))
      return "";
    if (typeof e == "string") {
      const t = n.indexOf(e);
      return t == -1 ? n : n.substring(0, t);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function Q(n, e = null) {
  if (u(n))
    return n;
  if (typeof e == "number")
    if (e >= 32 && e < 127) {
      const t = String.fromCharCode(e), r = n.lastIndexOf(t);
      return r === -1 ? n : n.substring(0, r);
    } else
      throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");
  else {
    if (u(e))
      return "";
    if (typeof e == "string") {
      const t = n.lastIndexOf(e);
      return t === -1 ? n : n.substring(0, t);
    } else
      throw new TypeError("The separator type is string | number | null");
  }
}
function V(...n) {
  if (n === null)
    return !1;
  for (const e of n)
    if (e === null)
      return !1;
  return !0;
}
function Y(n, e, t) {
  if (V(n, e, t)) {
    const r = n.indexOf(e);
    if (r !== -1) {
      const i = n.indexOf(t, r + e.length);
      if (i !== -1)
        return n.substring(r + e.length, i);
    }
    return null;
  } else
    return null;
}
function k(n, e, t) {
  if (n === null || u(e) || u(t))
    return null;
  const r = n.length;
  if (r === 0)
    return [];
  {
    const i = t.length, c = e.length, f = [];
    let l;
    for (let s = 0; s < r - i; s = l + i) {
      const p = n.indexOf(e, s);
      if (p < 0)
        break;
      const w = p + c;
      if (l = n.indexOf(t, w), l < 0)
        break;
      f.push(n.substring(w, l));
    }
    return f.length === 0 ? null : f;
  }
}
function W(n) {
  return n === null ? "" : a(n);
}
function nn(n) {
  const e = a(n);
  return u(e) ? null : e;
}
function en(n, e, t) {
  if (e < 0)
    throw new RangeError("offset cannot be negative");
  if (t < 0)
    throw new RangeError("maxWith cannot be negative");
  if (n === null)
    return null;
  if (e > n.length)
    return "";
  if (n.length > t) {
    const r = Math.min(e + t, n.length);
    return n.substring(e, r);
  } else
    return n.substring(e);
}
function tn(n) {
  return n.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (e) => ({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#39;": "'",
    "&quot;": '"'
  })[e] || e);
}
function rn(n, e) {
  return u(n) || u(e) ? n : e.concat(n).concat(e);
}
function un(n, e) {
  if (u(n) || u(e))
    return n;
  const t = !n.startsWith(e), r = !n.endsWith(e);
  if (!t && !r)
    return n;
  {
    let i = "";
    return t && (i = i.concat(e)), i = i.concat(n), r && (i = i.concat(e)), i;
  }
}
const on = {
  abbreviate: d,
  contains: F,
  equals: g,
  equalsAny: q,
  equalsAnyIgnoreCase: j,
  equalsIgnoreCase: C,
  escapeHTML: B,
  getStrLength: H,
  isAnyEmpty: A,
  isEmpty: u,
  isEN: O,
  isZH: U,
  length: h,
  ltrim: D,
  rtrim: M,
  startsWith: _,
  strip: b,
  stripAll: z,
  stripEnd: I,
  stripStart: x,
  stripToEmpty: G,
  stripToNull: P,
  substring: S,
  substringAfter: X,
  substringAfterLast: J,
  substringBefore: K,
  substringBeforeLast: Q,
  substringBetween: Y,
  substringsBetween: k,
  trim: a,
  trimToEmpty: W,
  trimToNull: nn,
  truncate: en,
  unescapeHTML: tn,
  upperCase: y,
  wrap: rn,
  wrapIfMissing: un
};
export {
  d as abbreviate,
  F as contains,
  on as default,
  g as equals,
  q as equalsAny,
  j as equalsAnyIgnoreCase,
  C as equalsIgnoreCase,
  B as escapeHTML,
  H as getStrLength,
  A as isAnyEmpty,
  O as isEN,
  u as isEmpty,
  U as isZH,
  h as length,
  D as ltrim,
  M as rtrim,
  _ as startsWith,
  b as strip,
  z as stripAll,
  I as stripEnd,
  x as stripStart,
  G as stripToEmpty,
  P as stripToNull,
  S as substring,
  X as substringAfter,
  J as substringAfterLast,
  K as substringBefore,
  Q as substringBeforeLast,
  Y as substringBetween,
  k as substringsBetween,
  a as trim,
  W as trimToEmpty,
  nn as trimToNull,
  en as truncate,
  tn as unescapeHTML,
  y as upperCase,
  rn as wrap,
  un as wrapIfMissing
};
