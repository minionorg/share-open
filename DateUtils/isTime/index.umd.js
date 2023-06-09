(function(r,e){typeof exports=="object"&&typeof module<"u"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(r=typeof globalThis<"u"?globalThis:r||self,e(r.index={}))})(this,function(r){"use strict";var m=Object.defineProperty;var l=(r,e,o)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var s=(r,e,o)=>(l(r,typeof e!="symbol"?e+"":e,o),o);const e=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},o=function(n){if(!n)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${e(n)}]`}},i=function(n){if(!n)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${e(n)}]`}};i("Function"),i("Object");class a{constructor(){}static notNull(t,u){if(t===null)throw new SyntaxError(u||"The value must not be empty")}static notEmpty(t,u){if(t.length===0)throw new SyntaxError(u||"The String must not be empty")}static errMsg(t){return function(u){return`${t}: ${u}`}}static isString(t){if(t===null)return null;if(o("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}s(a,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");const c={24:{default:/^([01]?\d|2[0-3]):([0-5]\d)$/,hasSecond:/^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/},12:{default:/^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,hasSecond:/^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/}};function f(n,t){if(!o("String")(n))return!1;if(t={format:"HH:MM:SS",mode:24,...t},!a.isTimeFormat(t.format))throw new SyntaxError(`${t.format} is not valid format`);if(![24,12].includes(t.mode))throw new SyntaxError(`${t.mode} is not valid mode`);const u=t.format.match(/s/ig),d=u&&u.length>0;return c[t.mode][d?"hasSecond":"default"].test(n)}r.default=f,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});