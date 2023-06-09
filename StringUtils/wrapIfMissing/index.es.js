var f = Object.defineProperty;
var l = (n, t, r) => t in n ? f(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r;
var i = (n, t, r) => (l(n, typeof t != "symbol" ? t + "" : t, r), r);
const c = function(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}, s = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(n)}]`;
  };
};
s("Function");
s("Object");
const y = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(n)}]`;
  };
};
class a {
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
    if (y("string")(t))
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
i(a, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function o(n) {
  const t = a.isString(n);
  return t === null || t.length === 0;
}
function p(n, t) {
  if (o(n) || o(t))
    return n;
  const r = !n.startsWith(t), u = !n.endsWith(t);
  if (!r && !u)
    return n;
  {
    let e = "";
    return r && (e = e.concat(t)), e = e.concat(n), u && (e = e.concat(t)), e;
  }
}
export {
  p as default
};
