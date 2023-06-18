var h = Object.defineProperty;
var y = (e, t, i) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var c = (e, t, i) => (y(e, typeof t != "symbol" ? t + "" : t, i), i);
function m(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function f(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${m(e)}]`;
  };
}
function p(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${m(e)}]`;
  };
}
f("Function");
f("Object");
class l {
  constructor() {
  }
  static notNull(t, i) {
    if (t === null)
      throw new SyntaxError(i || "The value must not be empty");
  }
  static notEmpty(t, i) {
    if (t.length === 0)
      throw new SyntaxError(i || "The String must not be empty");
  }
  static errMsg(t) {
    return function(i) {
      return `${t}: ${i}`;
    };
  }
  static isString(t) {
    if (t === null)
      return null;
    if (p("string")(t))
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
c(l, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const $ = {
  24: {
    default: /^([01]?\d|2[0-3]):([0-5]\d)$/,
    hasSecond: /^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/
  },
  12: {
    default: /^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,
    hasSecond: /^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/
  }
};
function d(e, t, i) {
  let r;
  for (const o in t)
    if (["12", "24"].includes(o)) {
      const n = d(e, t[o], o);
      n && (r = n);
    } else if (t[o].test(e))
      return {
        mode: i,
        format: o,
        matches: e.match(t[o])
      };
  return r;
}
function w(e) {
  if (!l.isTimeFormat(e.format))
    throw new SyntaxError(`${e.format} is not valid format`);
  if (![24, 12].includes(e.mode))
    throw new SyntaxError(`${e.mode} is not valid mode`);
  return function(t) {
    const i = d(t, $, void 0);
    if (!i)
      throw new SyntaxError(`${t} is not valid time`);
    const r = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (i.mode === "12") {
      const [n, s, u, a] = [...i.matches].splice(1, 4);
      r.h = n, r.m = s, r.s = u, r.b = a, e.mode === 24 && a === "P" && (r.h = +n + 12 + "");
    } else if (i.mode === "24") {
      const [n, s, u] = [...i.matches].splice(1, 3);
      r.h = n, r.m = s, r.s = u;
    }
    if (e.mode === 12 && !r.b) {
      const n = +r.h;
      n > 12 ? (r.h = n - 12 + "", r.b = "P") : r.b = "A";
    }
    let o = e.format.replace(/(h{1,2})/gi, r.h).replace(/(m{1,2})/gi, r.m).replace(r.s ? /(s{1,2})/gi : /:(s{1,2})/gi, r.s ? r.s : "");
    return e.mode === 12 && r.b && (o += ` ${r.b}M`), o;
  };
}
export {
  w as default
};
