(function(i,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(i=typeof globalThis<"u"?globalThis:i||self,r(i.index={}))})(this,function(i){"use strict";var S=Object.defineProperty;var w=(i,r,o)=>r in i?S(i,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[r]=o;var h=(i,r,o)=>(w(i,typeof r!="symbol"?r+"":r,o),o);const r=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},o=function(t){if(!t)throw new SyntaxError("type is must");return function(e){return Object.prototype.toString.call(e)===`[object ${r(t)}]`}};function p(t,e){if(!o("string")(t))throw new TypeError("The parameter type is string");return e!==void 0&&t.length===0?e:t.charAt(0)}function c(t){const e=p(t);return e===" "||e===`
`||e==="\r"||e==="	"||e==="\f"}const f=function(t){if(!t)throw new SyntaxError("type is must");return function(e){return Object.prototype.toString.call(e)===`[object ${r(t)}]`}};f("Function"),f("Object");class s{constructor(){}static notNull(e,n){if(e===null)throw new SyntaxError(n||"The value must not be empty")}static notEmpty(e,n){if(e.length===0)throw new SyntaxError(n||"The String must not be empty")}static errMsg(e){return function(n){return`${e}: ${n}`}}static isString(e){if(e===null)return null;if(o("string")(e))return e;throw new TypeError("The parameter type is string")}static isValidDateFormat(e){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(e)}static isTimeFormat(e){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(e)}}h(s,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function a(t){const e=s.isString(t);return e===null?0:e.length}function g(t,e=null){let n=a(t);if(n===0)return t;{const u=s.isString(e);if(u===null)for(;n!==0&&c(t.charAt(n-1));)--n;else{if(u.length===0)return t;for(;n!==0&&u.indexOf(t.charAt(n-1))!==-1;)--n}return t.substring(0,n)}}function y(t,e=null){const n=a(t);if(n===0)return t;{let u=0;const l=s.isString(e);if(l===null)for(;u!==n&&c(t.charAt(u));)++u;else{if(l.length===0)return t;for(;u!==n&&l.indexOf(t.charAt(u))!==-1;)++u}return t.substring(u)}}function d(t,e=null){return t=y(t,e),g(t,e)}function m(t){return t===null?"":d(t,null)}i.default=m,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
