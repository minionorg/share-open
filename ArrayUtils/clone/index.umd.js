(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.index={}))})(this,function(t){"use strict";function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e){if(!e)throw new SyntaxError("type is must");return function(r){return Object.prototype.toString.call(r)===`[object ${n(e)}]`}}function i(e){if(!e)throw new SyntaxError("type is must");return function(r){return Object.prototype.toString.call(r)===`[object ${n(e)}]`}}o("Function"),o("Object");function u(e){if(e===null)return null;if(!i("Array")(e))throw new TypeError("The ary must be array");return[...e]}t.default=u,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
