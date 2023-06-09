(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r.index={}))})(this,function(r){"use strict";var y=Object.defineProperty;var h=(r,n,u)=>n in r?y(r,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[n]=u;var c=(r,n,u)=>(h(r,typeof n!="symbol"?n+"":n,u),u);const n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},u=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}};u("Function"),u("Object");const f=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}};class s{constructor(){}static notNull(t,i){if(t===null)throw new SyntaxError(i||"The value must not be empty")}static notEmpty(t,i){if(t.length===0)throw new SyntaxError(i||"The String must not be empty")}static errMsg(t){return function(i){return`${t}: ${i}`}}static isString(t){if(t===null)return null;if(f("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}c(s,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function l(e){const t=s.isString(e);return t===null||t.length===0}function a(e,t=null){if(l(e))return e;if(typeof t=="number")if(t>=32&&t<127){const i=String.fromCharCode(t),o=e.lastIndexOf(i);return o!==-1&&o!==e.length-1?e.substring(o+1):""}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(l(t))return"";if(typeof t=="string"){const i=e.lastIndexOf(t);return i!==-1&&i!==e.length-t.length?e.substring(i+t.length):""}else throw new TypeError("The separator type is string | number | null")}}r.default=a,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});