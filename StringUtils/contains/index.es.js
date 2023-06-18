function d(f, i, n) {
  return n ? (n + f + n).indexOf(n + i + n) > -1 : f.indexOf(i) > -1;
}
export {
  d as default
};
