(function(i,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(i=typeof globalThis<"u"?globalThis:i||self,r(i.index={}))})(this,function(i){"use strict";var S=Object.defineProperty;var w=(i,r,o)=>r in i?S(i,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[r]=o;var h=(i,r,o)=>(w(i,typeof r!="symbol"?r+"":r,o),o);const r=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},o=function(t){if(!t)throw new SyntaxError("type is must");return function(n){return Object.prototype.toString.call(n)===`[object ${r(t)}]`}};function p(t,n){if(!o("string")(t))throw new TypeError("The parameter type is string");return n!==void 0&&t.length===0?n:t.charAt(0)}function c(t){const n=p(t);return n===" "||n===`
`||n==="\r"||n==="	"||n==="\f"}const f=function(t){if(!t)throw new SyntaxError("type is must");return function(n){return Object.prototype.toString.call(n)===`[object ${r(t)}]`}};f("Function"),f("Object");class l{constructor(){}static notNull(n,e){if(n===null)throw new SyntaxError(e||"The value must not be empty")}static notEmpty(n,e){if(n.length===0)throw new SyntaxError(e||"The String must not be empty")}static errMsg(n){return function(e){return`${n}: ${e}`}}static isString(n){if(n===null)return null;if(o("string")(n))return n;throw new TypeError("The parameter type is string")}static isValidDateFormat(n){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(n)}static isTimeFormat(n){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(n)}}h(l,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function a(t){const n=l.isString(t);return n===null?0:n.length}function g(t,n=null){let e=a(t);if(e===0)return t;{const u=l.isString(n);if(u===null)for(;e!==0&&c(t.charAt(e-1));)--e;else{if(u.length===0)return t;for(;e!==0&&u.indexOf(t.charAt(e-1))!==-1;)--e}return t.substring(0,e)}}function y(t,n=null){const e=a(t);if(e===0)return t;{let u=0;const s=l.isString(n);if(s===null)for(;u!==e&&c(t.charAt(u));)++u;else{if(s.length===0)return t;for(;u!==e&&s.indexOf(t.charAt(u))!==-1;)++u}return t.substring(u)}}function d(t,n=null){return t=y(t,n),g(t,n)}function m(t){return t===null?null:(t=d(t,null),t.length===0?null:t)}i.default=m,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});