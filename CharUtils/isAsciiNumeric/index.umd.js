(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n.index={}))})(this,function(n){"use strict";const i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},r=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${i(e)}]`}};function o(e,t){if(!r("string")(e))throw new TypeError("The parameter type is string");return t!==void 0&&e.length===0?t:e.charAt(0)}function s(e){const t=o(e);return t>="0"&&t<="9"}n.default=s,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});