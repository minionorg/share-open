(function(o,u){typeof exports=="object"&&typeof module<"u"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(o=typeof globalThis<"u"?globalThis:o||self,u(o.index={}))})(this,function(o){"use strict";var S=Object.defineProperty;var T=(o,u,s)=>u in o?S(o,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[u]=s;var m=(o,u,s)=>(T(o,typeof u!="symbol"?u+"":u,s),s);const u=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},s=function(n){if(!n)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${u(n)}]`}};s("Function"),s("Object");const l=function(n){if(!n)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${u(n)}]`}};class f{constructor(){}static notNull(t,e){if(t===null)throw new SyntaxError(e||"The value must not be empty")}static notEmpty(t,e){if(t.length===0)throw new SyntaxError(e||"The String must not be empty")}static errMsg(t){return function(e){return`${t}: ${e}`}}static isString(t){if(t===null)return null;if(l("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}m(f,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function w(n,t){const e=f.isString(n),i=f.isString(t);return e===i}function g(n){const t=f.isString(n);return t===null||t.length===0}function a(...n){if(n.length===0)return!1;for(const t of n)if(g(t))return!0;return!1}function b(n){const t=f.isString(n);return t===null?0:t.length}function E(n,t=0,e=0){if(n===null)return n;const i=l("Number");if(!i(t)||!i(e))throw new TypeError("The start or end paramter type is number");const r=b(n);return e<0&&(e=r+e),t<0&&(t=r+t),e>r&&(e=r),t>e?"":(t<0&&(t=0),e<0&&(e=0),n.substring(t,e))}function p(n,t,e,i){if(!g(n)&&w("",t)&&t.length>0)return E(n,0,i);if(a(n,t))return n;{const r=t.length,y=r+1,h=r+r+1;if(i<y)throw new RangeError(`Minimum abbreviation width is ${y}`);{const c=n.length;if(c<=i)return n;if(e>c&&(e=c),c-e<i-r&&(e=c-(i-r)),e<=r+1)return n.substring(0,i-r)+t;if(i<h)throw new RangeError(`Minimum abbreviation width with offset is ${h}`);return e+i-r<c?t+p(n.substring(e),t,0,i-r):t+n.substring(c-(i-r))}}}o.default=p,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
