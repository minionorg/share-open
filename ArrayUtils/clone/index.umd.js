(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.index={}))})(this,function(t){"use strict";const n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},r=function(e){if(!e)throw new SyntaxError("type is must");return function(o){return Object.prototype.toString.call(o)===`[object ${n(e)}]`}};r("Function"),r("Object");const i=function(e){if(!e)throw new SyntaxError("type is must");return function(o){return Object.prototype.toString.call(o)===`[object ${n(e)}]`}};function u(e){if(e===null)return null;if(!i("Array")(e))throw new TypeError("The ary must be array");return[...e]}t.default=u,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});