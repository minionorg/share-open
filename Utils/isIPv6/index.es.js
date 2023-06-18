var c = Object.defineProperty;
var f = (e, t, n) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var o = (e, t, n) => (f(e, typeof t != "symbol" ? t + "" : t, n), n);
function s(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${s(e)}]`;
  };
}
function l(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${s(e)}]`;
  };
}
const i = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", u = `(${i}[.]){3}${i}`;
$("Function");
$("Object");
class a {
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
o(a, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const r = "(?:[0-9a-fA-F]{1,4})", m = new RegExp(
  `^((?:${r}:){7}(?:${r}|:)|(?:${r}:){6}(?:${u}|:${r}|:)|(?:${r}:){5}(?::${u}|(:${r}){1,2}|:)|(?:${r}:){4}(?:(:${r}){0,1}:${u}|(:${r}){1,3}|:)|(?:${r}:){3}(?:(:${r}){0,2}:${u}|(:${r}){1,4}|:)|(?:${r}:){2}(?:(:${r}){0,3}:${u}|(:${r}){1,5}|:)|(?:${r}:){1}(?:(:${r}){0,4}:${u}|(:${r}){1,6}|:)|(?::((?::${r}){0,5}:${u}|(?::${r}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function y(e) {
  return a.isString(e) === null ? !1 : m.test(e);
}
export {
  y as default
};
