var h = Object.defineProperty;
var g = (n, t, r) => t in n ? h(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r;
var o = (n, t, r) => (g(n, typeof t != "symbol" ? t + "" : t, r), r);
function c(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function s(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(n)}]`;
  };
}
function p(n, t) {
  if (!s("string")(n))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && n.length === 0 ? t : n.charAt(0);
}
function l(n) {
  const t = p(n);
  return t === " " || t === `
` || t === "\r" || t === "	" || t === "\f";
}
function a(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(n)}]`;
  };
}
a("Function");
a("Object");
class i {
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
    if (s("string")(t))
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
o(i, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function f(n) {
  const t = i.isString(n);
  return t === null ? 0 : t.length;
}
function y(n, t = null) {
  let r = f(n);
  if (r === 0)
    return n;
  {
    const e = i.isString(t);
    if (e === null)
      for (; r !== 0 && l(n.charAt(r - 1)); )
        --r;
    else {
      if (e.length === 0)
        return n;
      for (; r !== 0 && e.indexOf(n.charAt(r - 1)) !== -1; )
        --r;
    }
    return n.substring(0, r);
  }
}
function m(n, t = null) {
  const r = f(n);
  if (r === 0)
    return n;
  {
    let e = 0;
    const u = i.isString(t);
    if (u === null)
      for (; e !== r && l(n.charAt(e)); )
        ++e;
    else {
      if (u.length === 0)
        return n;
      for (; e !== r && u.indexOf(n.charAt(e)) !== -1; )
        ++e;
    }
    return n.substring(e);
  }
}
function S(n, t = null) {
  return n = m(n, t), y(n, t);
}
export {
  S as default
};
