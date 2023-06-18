function u(n, t) {
  const l = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), e = n.match(l);
  return e !== null ? e[2] : null;
}
export {
  u as default
};
