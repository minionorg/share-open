(function(n,u){typeof exports=="object"&&typeof module<"u"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(n=typeof globalThis<"u"?globalThis:n||self,u(n.index={}))})(this,function(n){"use strict";function u(e,t,i=!1){if(e!==null&&t!==null){const o=t.length;return o>e.length?!1:d(e,i,0,t,0,o)}else return e===t}function d(e,t,i,o,s,a){t&&(e=e.toLowerCase(),o=o.toLowerCase());const r=i+a;let f=0;for(let l=i;l<r;l++){if(e.charAt(l)!==o.charAt(s+f))return!1;f++}return!0}n.default=u,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
