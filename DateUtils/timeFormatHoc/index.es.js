var h = Object.defineProperty;
var y = (e, t, n) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var c = (e, t, n) => (y(e, typeof t != "symbol" ? t + "" : t, n), n);
const m = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, f = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${m(e)}]`;
  };
};
f("Function");
f("Object");
const p = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${m(e)}]`;
  };
};
class l {
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
function d(e, t, n) {
  let r;
  for (const o in t)
    if (["12", "24"].includes(o)) {
      const i = d(e, t[o], o);
      i && (r = i);
    } else if (t[o].test(e))
      return {
        mode: n,
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
    const n = d(t, $, void 0);
    if (!n)
      throw new SyntaxError(`${t} is not valid time`);
    const r = {
      h: "",
      m: "",
      s: "",
      b: ""
    };
    if (n.mode === "12") {
      const [i, s, u, a] = [...n.matches].splice(1, 4);
      r.h = i, r.m = s, r.s = u, r.b = a, e.mode === 24 && a === "P" && (r.h = +i + 12 + "");
    } else if (n.mode === "24") {
      const [i, s, u] = [...n.matches].splice(1, 3);
      r.h = i, r.m = s, r.s = u;
    }
    if (e.mode === 12 && !r.b) {
      const i = +r.h;
      i > 12 ? (r.h = i - 12 + "", r.b = "P") : r.b = "A";
    }
    let o = e.format.replace(/(h{1,2})/gi, r.h).replace(/(m{1,2})/gi, r.m).replace(r.s ? /(s{1,2})/gi : /:(s{1,2})/gi, r.s ? r.s : "");
    return e.mode === 12 && r.b && (o += ` ${r.b}M`), o;
  };
}
export {
  w as default
};
