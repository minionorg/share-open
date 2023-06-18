function r(t) {
  return t.replace(/[&<>'"]/g, (e) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[e] || e);
}
export {
  r as default
};
