(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.index={}))})(this,function(t){"use strict";function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e){if(!e)throw new SyntaxError("type is must");return function(r){return Object.prototype.toString.call(r)===`[object ${n(e)}]`}}function o(e,r){if(!s("string")(e))throw new TypeError("The parameter type is string");return r!==void 0&&e.length===0?r:e.charAt(0)}function c(e,r){const i=o(e),u=o(r);return Number.isNaN(i.charCodeAt(0))&&Number.isNaN(u.charCodeAt(0))?0:i.charCodeAt(0)-u.charCodeAt(0)}t.default=c,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
