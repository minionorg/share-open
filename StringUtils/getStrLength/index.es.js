var s = Object.defineProperty;
var a = (n, t, e) => t in n ? s(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var u = (n, t, e) => (a(n, typeof t != "symbol" ? t + "" : t, e), e);
const o = function(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}, i = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(n)}]`;
  };
};
i("Function");
i("Object");
const l = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${o(n)}]`;
  };
};
class c {
  constructor() {
  }
  static notNull(t, e) {
    if (t === null)
      throw new SyntaxError(e || "The value must not be empty");
  }
  static notEmpty(t, e) {
    if (t.length === 0)
      throw new SyntaxError(e || "The String must not be empty");
  }
  static errMsg(t) {
    return function(e) {
      return `${t}: ${e}`;
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
u(c, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function f(n) {
  const t = c.isString(n);
  return t === null ? null : t.replace(/(^\s*)|(\s*$)/g, "");
}
const g = function(n) {
  return new RegExp("[A-Za-z]+", "g").test(n);
}, p = function(n, t) {
  let e = 0;
  for (let r = 0; r < n.length; r++)
    g(n[r]) ? e++ : e += t;
  return e;
}, m = function(n, t = !1, e = 2) {
  return t ? p(f(n), e) : n.length;
};
export {
  m as default
};
