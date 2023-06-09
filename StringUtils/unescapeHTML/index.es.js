const u = function(e) {
  return e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (t) => ({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&#39;": "'",
    "&quot;": '"'
  })[t] || t);
};
export {
  u as default
};
