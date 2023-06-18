var l = Object.defineProperty;
var f = (r, t, n) => t in r ? l(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var o = (r, t, n) => (f(r, typeof t != "symbol" ? t + "" : t, n), n);
function s(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function c(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${s(r)}]`;
  };
}
function a(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${s(r)}]`;
  };
}
c("Function");
c("Object");
class u {
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
    if (a("string")(t))
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
o(u, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function h(r, t) {
  if (!a("string")(r))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && r.length === 0 ? t : r.charAt(0);
}
function p(r) {
  const t = h(r);
  return t === " " || t === `
` || t === "\r" || t === "	" || t === "\f";
}
function g(r) {
  const t = u.isString(r);
  return t === null ? 0 : t.length;
}
function m(r, t = null) {
  const n = g(r);
  if (n === 0)
    return r;
  {
    let e = 0;
    const i = u.isString(t);
    if (i === null)
      for (; e !== n && p(r.charAt(e)); )
        ++e;
    else {
      if (i.length === 0)
        return r;
      for (; e !== n && i.indexOf(r.charAt(e)) !== -1; )
        ++e;
    }
    return r.substring(e);
  }
}
export {
  m as default
};
