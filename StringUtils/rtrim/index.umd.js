(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.index={}))})(this,function(n){"use strict";var a=Object.defineProperty;var l=(n,e,u)=>e in n?a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[e]=u;var s=(n,e,u)=>(l(n,typeof e!="symbol"?e+"":e,u),u);const e=function(r){return r.charAt(0).toUpperCase()+r.slice(1)},u=function(r){if(!r)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${e(r)}]`}};u("Function"),u("Object");const c=function(r){if(!r)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${e(r)}]`}};class o{constructor(){}static notNull(t,i){if(t===null)throw new SyntaxError(i||"The value must not be empty")}static notEmpty(t,i){if(t.length===0)throw new SyntaxError(i||"The String must not be empty")}static errMsg(t){return function(i){return`${t}: ${i}`}}static isString(t){if(t===null)return null;if(c("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}s(o,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function f(r){const t=o.isString(r);return t===null?null:t.replace(/(\s*$)/g,"")}n.default=f,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
