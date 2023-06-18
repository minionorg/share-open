var s = Object.defineProperty;
var a = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var u = (e, t, r) => (a(e, typeof t != "symbol" ? t + "" : t, r), r);
function i(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function o(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${i(e)}]`;
  };
}
function l(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${i(e)}]`;
  };
}
o("Function");
o("Object");
class c {
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
function f(e) {
  const t = c.isString(e);
  return t === null ? null : t.replace(/(^\s*)|(\s*$)/g, "");
}
function g(e) {
  return new RegExp("[A-Za-z]+", "g").test(e);
}
const p = function(e, t) {
  let r = 0;
  for (let n = 0; n < e.length; n++)
    g(e[n]) ? r++ : r += t;
  return r;
};
function m(e, t = !1, r = 2) {
  return t ? p(f(e), r) : e.length;
}
export {
  m as default
};
