var o = Object.defineProperty;
var a = (e, t, n) => t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var r = (e, t, n) => (a(e, typeof t != "symbol" ? t + "" : t, n), n);
function c(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function u(e) {
  if (!e)
    throw new SyntaxError("type is must");
  return function(t) {
    return Object.prototype.toString.call(t) === `[object ${c(e)}]`;
  };
}
const h = u("Function");
class s {
  constructor(t, n = "nextSuccessor") {
    r(this, "fn");
    r(this, "nextNode");
    r(this, "nextFlag");
    if (!h(t))
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
export {
  s as default
};
