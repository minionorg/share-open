function h(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function f(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${h(r)}]`;
  };
}
function n(r, t) {
  if (!f("string")(r))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && r.length === 0 ? t : r.charAt(0);
}
function A(r, t) {
  const e = n(r), o = n(t);
  return Number.isNaN(e.charCodeAt(0)) && Number.isNaN(o.charCodeAt(0)) ? 0 : e.charCodeAt(0) - o.charCodeAt(0);
}
function p(r) {
  return n(r).charCodeAt(0) < 128;
}
function s(r) {
  const t = n(r);
  return t >= "A" && t <= "Z";
}
function u(r) {
  const t = n(r);
  return t >= "a" && t <= "z";
}
function a(r) {
  return s(r) || u(r);
}
function c(r) {
  const t = n(r);
  return t >= "0" && t <= "9";
}
function d(r) {
  return a(r) || c(r);
}
function C(r) {
  const t = n(r);
  return t < " " || t.charCodeAt(0) < 32 || t.charCodeAt(0) === 127;
}
function l(r) {
  const t = n(r);
  return (t >= " " || t.charCodeAt(0) >= 32) && t.charCodeAt(0) < 127;
}
function g(r) {
  const t = n(r);
  return t === " " || t === `
` || t === "\r" || t === "	" || t === "\f";
}
function _(r, t) {
  if (!c(r)) {
    if (t !== void 0)
      return t;
    throw new RangeError("The character " + r + " is not in the range '0' - '9'");
  }
  return r.charCodeAt(0) - 48;
}
const i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function m(r) {
  const t = n(r).charCodeAt(0);
  return "\\u" + i[t >> 12 & 15] + i[t >> 8 & 15] + i[t >> 4 & 15] + i[t & 15];
}
function w(r) {
  return r.replace(/\\u([\d\w]{4})/gi, function(t, e) {
    return String.fromCharCode(parseInt(e, 16));
  });
}
const N = {
  compare: A,
  isAscii: p,
  isAsciiAlpha: a,
  isAsciiAlphaLower: u,
  isAsciiAlphanumeric: d,
  isAsciiAlphaUpper: s,
  isAsciiControl: C,
  isAsciiNumeric: c,
  isAsciiPrintable: l,
  isWhitespace: g,
  toChar: n,
  toIntValue: _,
  unicodeEscaped: m,
  unicodeUnescaped: w
};
export {
  A as compare,
  N as default,
  p as isAscii,
  a as isAsciiAlpha,
  u as isAsciiAlphaLower,
  s as isAsciiAlphaUpper,
  d as isAsciiAlphanumeric,
  C as isAsciiControl,
  c as isAsciiNumeric,
  l as isAsciiPrintable,
  g as isWhitespace,
  n as toChar,
  _ as toIntValue,
  m as unicodeEscaped,
  w as unicodeUnescaped
};
