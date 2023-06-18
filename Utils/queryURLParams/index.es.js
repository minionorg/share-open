var l = Object.defineProperty;
var p = (e, t, r) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var o = (e, t, r) => (p(e, typeof t != "symbol" ? t + "" : t, r), r);
function h(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function f(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${h(e)}]`;
  };
}
const x = f("Function");
class c {
  constructor(t, r = "nextSuccessor") {
    o(this, "fn");
    o(this, "nextNode");
    o(this, "nextFlag");
    if (!x(t))
      throw new Error(`${t} is no a function`);
    this.fn = t, this.nextNode = null, this.nextFlag = r;
  }
  after(t, r = this.nextFlag) {
    const n = t instanceof c;
    return this.nextNode = n ? t : new c(t, r);
  }
  start(...t) {
    const r = this.fn.apply(this, t);
    return r === this.nextFlag ? this.next.apply(this, t) : r;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const y = f("Object"), m = function(e) {
  return Object.getOwnPropertyNames(e).length === 0 ? !0 : "nextSuccessor";
}, g = function(e) {
  return Object.keys(e).length === 0;
};
function u(e) {
  if (!y(e))
    throw new Error(`${e} is no a object type`);
  const t = new c(m);
  return t.after(g), t.start(e);
}
function w(e) {
  const t = /([^?=&]+)=([^&]*)/gi, r = {};
  return e.replace(t, (n, s, a) => {
    r[s] = a;
  }), u(r) ? "nextSuccessor" : r;
}
function S(e) {
  const t = e.split("?")[1], r = {}, n = t && t.split("&");
  return n && n.reduce((s, a) => {
    const i = a.split("=");
    return s[i[0]] = i[1], s;
  }, r), u(r) ? "nextSuccessor" : r;
}
function N(e) {
  const t = e.split("?")[1], r = new URLSearchParams(t), n = {};
  for (const s of r)
    n[s[0]] = s[1];
  return u(n) ? null : n;
}
function O(e) {
  const t = new c(w);
  return t.after(S).after(N), t.start(e);
}
export {
  O as default
};
