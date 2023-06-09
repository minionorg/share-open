var a = Object.defineProperty;
var l = (r, t, n) => t in r ? a(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n;
var u = (r, t, n) => (l(r, typeof t != "symbol" ? t + "" : t, n), n);
const o = function(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}, s = function(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(r)}]`;
  };
};
function f(r, t) {
  if (!s("string")(r))
    throw new TypeError("The parameter type is string");
  return t !== void 0 && r.length === 0 ? t : r.charAt(0);
}
function h(r) {
  const t = f(r);
  return t === " " || t === `
` || t === "\r" || t === "	" || t === "\f";
}
const c = function(r) {
  if (!r)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(r)}]`;
  };
};
c("Function");
c("Object");
class i {
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
u(i, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function p(r) {
  const t = i.isString(r);
  return t === null ? 0 : t.length;
}
function y(r, t = null) {
  let n = p(r);
  if (n === 0)
    return r;
  {
    const e = i.isString(t);
    if (e === null)
      for (; n !== 0 && h(r.charAt(n - 1)); )
        --n;
    else {
      if (e.length === 0)
        return r;
      for (; n !== 0 && e.indexOf(r.charAt(n - 1)) !== -1; )
        --n;
    }
    return r.substring(0, n);
  }
}
export {
  y as default
};
