(function(r,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(r=typeof globalThis<"u"?globalThis:r||self,n(r.index={}))})(this,function(r){"use strict";var h=Object.defineProperty;var w=(r,n,i)=>n in r?h(r,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[n]=i;var l=(r,n,i)=>(w(r,typeof n!="symbol"?n+"":n,i),i);const n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},i=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}};i("Function"),i("Object");const f=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${n(e)}]`}};class a{constructor(){}static notNull(t,u){if(t===null)throw new SyntaxError(u||"The value must not be empty")}static notEmpty(t,u){if(t.length===0)throw new SyntaxError(u||"The String must not be empty")}static errMsg(t){return function(u){return`${t}: ${u}`}}static isString(t){if(t===null)return null;if(f("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}l(a,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function p(e,t){if(a.isString(e)===null)return!1;const m=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,g=/^[-+]?[0-9]+$/,o=t||{},s=Object.prototype.hasOwnProperty,d=(Object.prototype.hasOwnProperty.call(o,"zeroes")&&!o.zeroes?m:g).test(e),c=parseInt(e,10);return d&&(!s.call(o,"min")||c>=o.min)&&(!s.call(o,"max")||c<=o.max)&&(!s.call(o,"lt")||c<o.lt)&&(!s.call(o,"gt")||c>o.gt)}function y(e){return p(e,{min:0,max:65535})}r.default=y,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
