var l = Object.defineProperty;
var p = (n, t, e) => t in n ? l(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => (p(n, typeof t != "symbol" ? t + "" : t, e), e);
const h = function(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}, f = function(n) {
  if (!n)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${h(n)}]`;
  };
}, x = f("Function");
class c {
  constructor(t, e = "nextSuccessor") {
    o(this, "fn");
    o(this, "nextNode");
    o(this, "nextFlag");
    if (!x(t))
      throw new Error(`${t} is no a function`);
    this.fn = t, this.nextNode = null, this.nextFlag = e;
  }
  after(t, e = this.nextFlag) {
    const r = t instanceof c;
    return this.nextNode = r ? t : new c(t, e);
  }
  start(...t) {
    const e = this.fn.apply(this, t);
    return e === this.nextFlag ? this.next.apply(this, t) : e;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const y = f("Object"), m = function(n) {
  return Object.getOwnPropertyNames(n).length === 0 ? !0 : "nextSuccessor";
}, g = function(n) {
  return Object.keys(n).length === 0;
}, u = function(n) {
  if (!y(n))
    throw new Error(`${n} is no a object type`);
  const t = new c(m);
  return t.after(g), t.start(n);
};
function w(n) {
  const t = /([^?=&]+)=([^&]*)/gi, e = {};
  return n.replace(t, (r, s, a) => {
    e[s] = a;
  }), u(e) ? "nextSuccessor" : e;
}
function S(n) {
  const t = n.split("?")[1], e = {}, r = t && t.split("&");
  return r && r.reduce((s, a) => {
    const i = a.split("=");
    return s[i[0]] = i[1], s;
  }, e), u(e) ? "nextSuccessor" : e;
}
function N(n) {
  const t = n.split("?")[1], e = new URLSearchParams(t), r = {};
  for (const s of e)
    r[s[0]] = s[1];
  return u(r) ? null : r;
}
const O = function(n) {
  const t = new c(w);
  return t.after(S).after(N), t.start(n);
};
export {
  O as default
};
