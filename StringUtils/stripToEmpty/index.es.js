var h = Object.defineProperty;
var p = (t, n, r) => n in t ? h(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[n] = r;
var o = (t, n, r) => (p(t, typeof n != "symbol" ? n + "" : n, r), r);
function l(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function c(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(n) {
    return Object.prototype.toString.call(n) === `[object ${l(t)}]`;
  };
}
function g(t, n) {
  if (!c("string")(t))
    throw new TypeError("The parameter type is string");
  return n !== void 0 && t.length === 0 ? n : t.charAt(0);
}
function s(t) {
  const n = g(t);
  return n === " " || n === `
` || n === "\r" || n === "	" || n === "\f";
}
function a(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(n) {
    return Object.prototype.toString.call(n) === `[object ${l(t)}]`;
  };
}
a("Function");
a("Object");
class i {
  constructor() {
  }
  static notNull(n, r) {
    if (n === null)
      throw new SyntaxError(r || "The value must not be empty");
  }
  static notEmpty(n, r) {
    if (n.length === 0)
      throw new SyntaxError(r || "The String must not be empty");
  }
  static errMsg(n) {
    return function(r) {
      return `${n}: ${r}`;
    };
  }
  static isString(n) {
    if (n === null)
      return null;
    if (c("string")(n))
      return n;
    throw new TypeError("The parameter type is string");
  }
  static isValidDateFormat(n) {
    return /(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(
      n
    );
  }
  static isTimeFormat(n) {
    return /(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(n);
  }
}
o(i, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function f(t) {
  const n = i.isString(t);
  return n === null ? 0 : n.length;
}
function y(t, n = null) {
  let r = f(t);
  if (r === 0)
    return t;
  {
    const e = i.isString(n);
    if (e === null)
      for (; r !== 0 && s(t.charAt(r - 1)); )
        --r;
    else {
      if (e.length === 0)
        return t;
      for (; r !== 0 && e.indexOf(t.charAt(r - 1)) !== -1; )
        --r;
    }
    return t.substring(0, r);
  }
}
function m(t, n = null) {
  const r = f(t);
  if (r === 0)
    return t;
  {
    let e = 0;
    const u = i.isString(n);
    if (u === null)
      for (; e !== r && s(t.charAt(e)); )
        ++e;
    else {
      if (u.length === 0)
        return t;
      for (; e !== r && u.indexOf(t.charAt(e)) !== -1; )
        ++e;
    }
    return t.substring(e);
  }
}
function w(t, n = null) {
  return t = m(t, n), y(t, n);
}
function E(t) {
  return t === null ? "" : w(t, null);
}
export {
  E as default
};
