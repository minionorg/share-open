var h = Object.defineProperty;
var m = (n, t, r) => t in n ? h(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[t] = r;
var l = (n, t, r) => (m(n, typeof t != "symbol" ? t + "" : t, r), r);
function f(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function g(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${f(n)}]`;
  };
}
function y(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${f(n)}]`;
  };
}
g("Function");
g("Object");
class o {
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
l(o, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
function w(n, t) {
  const r = o.isString(n), e = o.isString(t);
  return r === e;
}
function p(n) {
  const t = o.isString(n);
  return t === null || t.length === 0;
}
function a(...n) {
  if (n.length === 0)
    return !1;
  for (const t of n)
    if (p(t))
      return !0;
  return !1;
}
function E(n) {
  const t = o.isString(n);
  return t === null ? 0 : t.length;
}
function S(n, t = 0, r = 0) {
  if (n === null)
    return n;
  const e = y("Number");
  if (!e(t) || !e(r))
    throw new TypeError("The start or end paramter type is number");
  const i = E(n);
  return r < 0 && (r = i + r), t < 0 && (t = i + t), r > i && (r = i), t > r ? "" : (t < 0 && (t = 0), r < 0 && (r = 0), n.substring(t, r));
}
function b(n, t, r, e) {
  if (!p(n) && w("", t) && t.length > 0)
    return S(n, 0, e);
  if (a(n, t))
    return n;
  {
    const i = t.length, s = i + 1, c = i + i + 1;
    if (e < s)
      throw new RangeError(`Minimum abbreviation width is ${s}`);
    {
      const u = n.length;
      if (u <= e)
        return n;
      if (r > u && (r = u), u - r < e - i && (r = u - (e - i)), r <= i + 1)
        return n.substring(0, e - i) + t;
      if (e < c)
        throw new RangeError(`Minimum abbreviation width with offset is ${c}`);
      return r + e - i < u ? t + b(n.substring(r), t, 0, e - i) : t + n.substring(u - (e - i));
    }
  }
}
export {
  b as default
};
