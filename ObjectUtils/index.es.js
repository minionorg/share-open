var c = Object.defineProperty;
var u = (e, t, n) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t, n) => (u(e, typeof t != "symbol" ? t + "" : t, n), n);
function a(...e) {
  if (e === null)
    return !1;
  for (const t of e)
    if (t === null)
      return !1;
  return !0;
}
function l(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function o(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${l(e)}]`;
  };
}
const f = o("Function");
class s {
  constructor(t, n = "nextSuccessor") {
    r(this, "fn");
    r(this, "nextNode");
    r(this, "nextFlag");
    if (!f(t))
      throw new Error(`${t} is no a function`);
    this.fn = t, this.nextNode = null, this.nextFlag = n;
  }
  after(t, n = this.nextFlag) {
    const i = t instanceof s;
    return this.nextNode = i ? t : new s(t, n);
  }
  start(...t) {
    const n = this.fn.apply(this, t);
    return n === this.nextFlag ? this.next.apply(this, t) : n;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const h = o("Object"), p = function(e) {
  return Object.getOwnPropertyNames(e).length === 0 ? !0 : "nextSuccessor";
}, x = function(e) {
  return Object.keys(e).length === 0;
};
function y(e) {
  if (!h(e))
    throw new Error(`${e} is no a object type`);
  const t = new s(p);
  return t.after(x), t.start(e);
}
const N = {
  allNotNull: a,
  isEmpty: y
};
export {
  a as allNotNull,
  N as default,
  y as isEmpty
};
