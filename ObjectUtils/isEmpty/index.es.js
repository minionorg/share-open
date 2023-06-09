var i = Object.defineProperty;
var u = (e, t, n) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t, n) => (u(e, typeof t != "symbol" ? t + "" : t, n), n);
const a = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, o = function(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${a(e)}]`;
  };
}, f = o("Function");
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
    const c = t instanceof s;
    return this.nextNode = c ? t : new s(t, n);
  }
  start(...t) {
    const n = this.fn.apply(this, t);
    return n === this.nextFlag ? this.next.apply(this, t) : n;
  }
  next() {
    return this.nextNode && this.nextNode.start.apply(this.nextNode, arguments);
  }
}
const h = o("Object"), l = function(e) {
  return Object.getOwnPropertyNames(e).length === 0 ? !0 : "nextSuccessor";
}, p = function(e) {
  return Object.keys(e).length === 0;
}, y = function(e) {
  if (!h(e))
    throw new Error(`${e} is no a object type`);
  const t = new s(l);
  return t.after(p), t.start(e);
};
export {
  y as default
};
