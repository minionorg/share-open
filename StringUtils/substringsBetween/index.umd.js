(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r.index={}))})(this,function(r){"use strict";var S=Object.defineProperty;var E=(r,n,i)=>n in r?S(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i;var h=(r,n,i)=>(E(r,typeof n!="symbol"?n+"":n,i),i);function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}}function g(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}}i("Function"),i("Object");class c{constructor(){}static notNull(t,u){if(t===null)throw new SyntaxError(u||"The value must not be empty")}static notEmpty(t,u){if(t.length===0)throw new SyntaxError(u||"The String must not be empty")}static errMsg(t){return function(u){return`${t}: ${u}`}}static isString(t){if(t===null)return null;if(g("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}h(c,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function f(e){const t=c.isString(e);return t===null||t.length===0}function m(e,t,u){if(e===null||f(t)||f(u))return null;const a=e.length;if(a===0)return[];{const p=u.length,b=t.length,s=[];let o;for(let l=0;l<a-p;l=o+p){const y=e.indexOf(t,l);if(y<0)break;const d=y+b;if(o=e.indexOf(u,d),o<0)break;s.push(e.substring(d,o))}return s.length===0?null:s}}r.default=m,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
