(function(i,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(i=typeof globalThis<"u"?globalThis:i||self,r(i.index={}))})(this,function(i){"use strict";var y=Object.defineProperty;var m=(i,r,u)=>r in i?y(i,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[r]=u;var l=(i,r,u)=>(m(i,typeof r!="symbol"?r+"":r,u),u);const r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},u=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${r(e)}]`}},s=function(e){if(!e)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${r(e)}]`}};s("Function"),s("Object");class f{constructor(){}static notNull(t,n){if(t===null)throw new SyntaxError(n||"The value must not be empty")}static notEmpty(t,n){if(t.length===0)throw new SyntaxError(n||"The String must not be empty")}static errMsg(t){return function(n){return`${t}: ${n}`}}static isString(t){if(t===null)return null;if(u("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}l(f,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function a(e){const t=f.isString(e);return t===null?0:t.length}function p(e,t=0,n=0){if(e===null)return e;const c=u("Number");if(!c(t)||!c(n))throw new TypeError("The start or end paramter type is number");const o=a(e);return n<0&&(n=o+n),t<0&&(t=o+t),n>o&&(n=o),t>n?"":(t<0&&(t=0),n<0&&(n=0),e.substring(t,n))}i.default=p,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
