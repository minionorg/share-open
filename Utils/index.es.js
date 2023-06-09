var S = Object.defineProperty;
var P = (t, n, e) => n in t ? S(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var f = (t, n, e) => (P(t, typeof n != "symbol" ? n + "" : n, e), e);
const x = function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}, p = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(n) {
    return Object.prototype.toString.call(n) === `[object ${x(t)}]`;
  };
}, b = function(t, n) {
  const e = new RegExp("(^|&)" + n + "=([^&]*)(&|$)"), r = t.match(e);
  return r !== null ? r[2] : null;
}, R = "[\\u2700-\\u27BF]", N = "[\\uE000-\\uF8FF]", D = "\\uD83C[\\uDC00-\\uDFFF]", O = "\\uD83D[\\uDC00-\\uDFFF]", j = "[\\u2011-\\u26FF]", A = "\\uD83E[\\uDD10-\\uDDFF]", C = function(t) {
  return RegExp(
    `(${R}|${N}|${D}|${O}|${j}|${A})`,
    "g"
  ).test(t);
}, I = function(t) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    t
  );
};
class a {
  constructor() {
  }
  static notNull(n, e) {
    if (n === null)
      throw new SyntaxError(e || "The value must not be empty");
  }
  static notEmpty(n, e) {
    if (n.length === 0)
      throw new SyntaxError(e || "The String must not be empty");
  }
  static errMsg(n) {
    return function(e) {
      return `${n}: ${e}`;
    };
  }
  static isString(n) {
    if (n === null)
      return null;
    if (F("string")(n))
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
f(a, "DEFAULT_NOT_NAN_EX_MESSAGE", "\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");
const y = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", c = `(${y}[.]){3}${y}`, _ = new RegExp(`^${c}$`);
function d(t) {
  return a.isString(t) === null ? !1 : _.test(t);
}
function w(t, n, e = !1) {
  if (t !== null && n !== null) {
    const r = n.length;
    return r > t.length ? !1 : v(t, e, 0, n, 0, r);
  } else
    return t === n;
}
function v(t, n, e, r, u, o) {
  n && (t = t.toLowerCase(), r = r.toLowerCase());
  const i = e + o;
  let m = 0;
  for (let l = e; l < i; l++) {
    if (t.charAt(l) !== r.charAt(u + m))
      return !1;
    m++;
  }
  return !0;
}
const L = /^\d{1,3}$/;
function U(t) {
  if (a.isString(t) === null)
    return !1;
  const e = t.split("/");
  return e.length !== 2 || !L.test(e[1]) || e[1].length > 1 && w(e[1], "0") || !d(e[0]) ? !1 : Number(e[1]) <= 32 && Number(e[1]) >= 0;
}
const s = "(?:[0-9a-fA-F]{1,4})", T = new RegExp(
  `^((?:${s}:){7}(?:${s}|:)|(?:${s}:){6}(?:${c}|:${s}|:)|(?:${s}:){5}(?::${c}|(:${s}){1,2}|:)|(?:${s}:){4}(?:(:${s}){0,1}:${c}|(:${s}){1,3}|:)|(?:${s}:){3}(?:(:${s}){0,2}:${c}|(:${s}){1,4}|:)|(?:${s}:){2}(?:(:${s}){0,3}:${c}|(:${s}){1,5}|:)|(?:${s}:){1}(?:(:${s}){0,4}:${c}|(:${s}){1,6}|:)|(?::((?::${s}){0,5}:${c}|(?::${s}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function E(t) {
  return a.isString(t) === null ? !1 : T.test(t);
}
const M = /^\d{1,3}$/;
function B(t) {
  if (a.isString(t) === null)
    return !1;
  const e = t.split("/");
  return e.length !== 2 || !M.test(e[1]) || e[1].length > 1 && w(e[1], "0") || !E(e[0]) ? !1 : Number(e[1]) <= 128 && Number(e[1]) >= 0;
}
const z = function(t) {
  return /^((\+86)|(86))?(1)\d{10}$/.test("" + t);
}, Z = function(t) {
  return /^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test("" + t);
};
function H(t, n) {
  if (a.isString(t) === null)
    return !1;
  const r = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, u = /^[-+]?[0-9]+$/, o = n || {}, i = Object.prototype.hasOwnProperty, l = (Object.prototype.hasOwnProperty.call(o, "zeroes") && !o.zeroes ? r : u).test(t), $ = parseInt(t, 10);
  return l && (!i.call(o, "min") || $ >= o.min) && (!i.call(o, "max") || $ <= o.max) && (!i.call(o, "lt") || $ < o.lt) && (!i.call(o, "gt") || $ > o.gt);
}
function V(t) {
  return H(t, { min: 0, max: 65535 });
}
const q = function(t) {
  return /^\d{6}$/.test("" + t);
}, K = p("Function");
class g {
  constructor(n, e = "nextSuccessor") {
    f(this, "fn");
    f(this, "nextNode");
    f(this, "nextFlag");
    if (!K(n))
      throw new Error(`${n} is no a function`);
    this.fn = n, this.nextNode = null, this.nextFlag = e;
  }
  after(n, e = this.nextFlag) {
    const r = n instanceof g;
    return this.nextNode = r ? n : new g(n, e);
  }
  start(...n) {
    const e = this.fn.apply(this, n);
    return e === this.nextFlag ? this.next.apply(this, n) : e;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const k = p("Object"), G = function(t) {
  return Object.getOwnPropertyNames(t).length === 0 ? !0 : "nextSuccessor";
}, W = function(t) {
  return Object.keys(t).length === 0;
}, h = function(t) {
  if (!k(t))
    throw new Error(`${t} is no a object type`);
  const n = new g(G);
  return n.after(W), n.start(t);
};
function X(t) {
  const n = /([^?=&]+)=([^&]*)/gi, e = {};
  return t.replace(n, (r, u, o) => {
    e[u] = o;
  }), h(e) ? "nextSuccessor" : e;
}
function J(t) {
  const n = t.split("?")[1], e = {}, r = n && n.split("&");
  return r && r.reduce((u, o) => {
    const i = o.split("=");
    return u[i[0]] = i[1], u;
  }, e), h(e) ? "nextSuccessor" : e;
}
function Q(t) {
  const n = t.split("?")[1], e = new URLSearchParams(n), r = {};
  for (const u of e)
    r[u[0]] = u[1];
  return h(r) ? null : r;
}
const Y = function(t) {
  const n = new g(X);
  return n.after(J).after(Q), n.start(t);
}, F = function(t) {
  if (!t)
    throw new SyntaxError("type is must");
  return function(n) {
    return Object.prototype.toString.call(n) === `[object ${x(t)}]`;
  };
}, nt = {
  createType: p,
  getURLValueByKey: b,
  hasEmoji: C,
  isEmail: I,
  isIPv4: d,
  isIPv4Range: U,
  isIPv6: E,
  isIPv6Range: B,
  isMobile: z,
  isPhone: Z,
  isPort: V,
  isPostalCode: q,
  queryURLParams: Y,
  validateTypeHoc: F
};
export {
  p as createType,
  nt as default,
  b as getURLValueByKey,
  C as hasEmoji,
  I as isEmail,
  d as isIPv4,
  U as isIPv4Range,
  E as isIPv6,
  B as isIPv6Range,
  z as isMobile,
  Z as isPhone,
  V as isPort,
  q as isPostalCode,
  Y as queryURLParams,
  F as validateTypeHoc
};
