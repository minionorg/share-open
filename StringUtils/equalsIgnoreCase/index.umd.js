(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r.index={}))})(this,function(r){"use strict";var p=Object.defineProperty;var y=(r,n,i)=>n in r?p(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i;var f=(r,n,i)=>(y(r,typeof n!="symbol"?n+"":n,i),i);const n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},i=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}};i("Function"),i("Object");const a=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}};class o{constructor(){}static notNull(t,u){if(t===null)throw new SyntaxError(u||"The value must not be empty")}static notEmpty(t,u){if(t.length===0)throw new SyntaxError(u||"The String must not be empty")}static errMsg(t){return function(u){return`${t}: ${u}`}}static isString(t){if(t===null)return null;if(a("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}f(o,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function s(e,t){const u=o.isString(e),c=o.isString(t);return u===c}function l(e,t){if(s(e,t))return!0;if(e!==null&&t!==null){if(e.length!==t.length)return!1;for(let u=0;u<e.length;u++)if(!s(e.charAt(u).toUpperCase(),t.charAt(u).toUpperCase()))return!1;return!0}else return!1}r.default=l,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});