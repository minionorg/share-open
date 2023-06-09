(function(o,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(o=typeof globalThis<"u"?globalThis:o||self,r(o.index={}))})(this,function(o){"use strict";var g=Object.defineProperty;var S=(o,r,a)=>r in o?g(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a;var h=(o,r,a)=>(S(o,typeof r!="symbol"?r+"":r,a),a);const r=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},a=function(n){if(!n)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${r(n)}]`}};a("Function"),a("Object");const y=function(n){if(!n)throw new SyntaxError("type is must");return function(t){return Object.prototype.toString.call(t)===`[object ${r(n)}]`}};class d{constructor(){}static notNull(t,i){if(t===null)throw new SyntaxError(i||"The value must not be empty")}static notEmpty(t,i){if(t.length===0)throw new SyntaxError(i||"The String must not be empty")}static errMsg(t){return function(i){return`${t}: ${i}`}}static isString(t){if(t===null)return null;if(y("string")(t))return t;throw new TypeError("The parameter type is string")}static isValidDateFormat(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}static isTimeFormat(t){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(t)}}h(d,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");const p={24:{default:/^([01]?\d|2[0-3]):([0-5]\d)$/,hasSecond:/^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/},12:{default:/^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,hasSecond:/^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/}};function m(n,t,i){let e;for(const u in t)if(["12","24"].includes(u)){const s=m(n,t[u],u);s&&(e=s)}else if(t[u].test(n))return{mode:i,format:u,matches:n.match(t[u])};return e}function b(n){if(!d.isTimeFormat(n.format))throw new SyntaxError(`${n.format} is not valid format`);if(![24,12].includes(n.mode))throw new SyntaxError(`${n.mode} is not valid mode`);return function(t){const i=m(t,p,void 0);if(!i)throw new SyntaxError(`${t} is not valid time`);const e={h:"",m:"",s:"",b:""};if(i.mode==="12"){const[s,f,c,l]=[...i.matches].splice(1,4);e.h=s,e.m=f,e.s=c,e.b=l,n.mode===24&&l==="P"&&(e.h=+s+12+"")}else if(i.mode==="24"){const[s,f,c]=[...i.matches].splice(1,3);e.h=s,e.m=f,e.s=c}if(n.mode===12&&!e.b){const s=+e.h;s>12?(e.h=s-12+"",e.b="P"):e.b="A"}let u=n.format.replace(/(h{1,2})/gi,e.h).replace(/(m{1,2})/gi,e.m).replace(e.s?/(s{1,2})/gi:/:(s{1,2})/gi,e.s?e.s:"");return n.mode===12&&e.b&&(u+=` ${e.b}M`),u}}o.default=b,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
