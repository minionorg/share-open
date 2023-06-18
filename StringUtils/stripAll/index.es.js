var h = Object.defineProperty;
var p = (t, r, n) => r in t ? h(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var o = (t, r, n) => (p(t, typeof r != "symbol" ? r + "" : r, n), n);
function l(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function c(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${l(t)}]`;
  };
}
function y(t, r) {
  if (!c("string")(t))
    throw new TypeError("The parameter type is string");
  return r !== void 0 && t.length === 0 ? r : t.charAt(0);
}
function s(t) {
  const r = y(t);
  return r === " " || r === `
` || r === "\r" || r === "	" || r === "\f";
}
function a(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(r) {
    return Object.prototype.toString.call(r) === `[object ${l(t)}]`;
  };
}
a("Function");
a("Object");
class u {
  constructor() {
  }
  static notNull(r, n) {
    if (r === null)
      throw new SyntaxError(n || "The value must not be empty");
  }
  static notEmpty(r, n) {
    if (r.length === 0)
      throw new SyntaxError(n || "The String must not be empty");
  }
  static errMsg(r) {
    return function(n) {
      return `${r}: ${n}`;
    };
  }
  static isString(r) {
    if (r === null)
      return null;
    if (c("string")(r))
      return r;
    throw new TypeError("The parameter type is string");
  }
  static isValidDateFormat(r) {
    return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
      r
    );
  }
  static isTimeFormat(r) {
    return /(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(r);
  }
}
o(u, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function f(t) {
  const r = u.isString(t);
  return r === null ? 0 : r.length;
}
function g(t, r = null) {
  let n = f(t);
  if (n === 0)
    return t;
  {
    const e = u.isString(r);
    if (e === null)
      for (; n !== 0 && s(t.charAt(n - 1)); )
        --n;
    else {
      if (e.length === 0)
        return t;
      for (; n !== 0 && e.indexOf(t.charAt(n - 1)) !== -1; )
        --n;
    }
    return t.substring(0, n);
  }
}
function w(t, r = null) {
  const n = f(t);
  if (n === 0)
    return t;
  {
    let e = 0;
    const i = u.isString(r);
    if (i === null)
      for (; e !== n && s(t.charAt(e)); )
        ++e;
    else {
      if (i.length === 0)
        return t;
      for (; e !== n && i.indexOf(t.charAt(e)) !== -1; )
        ++e;
    }
    return t.substring(e);
  }
}
function m(t, r = null) {
  return t = w(t, r), g(t, r);
}
function A(t, r = null) {
  if (t === null)
    return null;
  if (!Array.isArray(t))
    throw new TypeError("The paramter type is array");
  const n = t.length;
  if (n === 0)
    return t;
  const e = [];
  for (let i = 0; i < n; i++)
    e.push(m(t[i], r));
  return e;
}
export {
  A as default
};
