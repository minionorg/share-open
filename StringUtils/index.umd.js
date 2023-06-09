(function(r,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(r=typeof globalThis<"u"?globalThis:r||self,f(r.index={}))})(this,function(r){"use strict";var ln=Object.defineProperty;var fn=(r,f,c)=>f in r?ln(r,f,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[f]=c;var x=(r,f,c)=>(fn(r,typeof f!="symbol"?f+"":f,c),c);const f=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},c=function(n){if(!n)throw new SyntaxError("type is must");return function(e){return Object.prototype.toString.call(e)===`[object ${f(n)}]`}};function O(n,e,t=!1){if(n!==null&&e!==null){const i=e.length;return i>n.length?!1:nn(n,t,0,e,0,i)}else return n===e}function nn(n,e,t,i,u,b){e&&(n=n.toLowerCase(),i=i.toLowerCase());const g=t+b;let o=0;for(let a=t;a<g;a++){if(n.charAt(a)!==i.charAt(u+o))return!1;o++}return!0}c("Function"),c("Object");const d=function(n){if(!n)throw new SyntaxError("type is must");return function(e){return Object.prototype.toString.call(e)===`[object ${f(n)}]`}};class s{constructor(){}static notNull(e,t){if(e===null)throw new SyntaxError(t||"The value must not be empty")}static notEmpty(e,t){if(e.length===0)throw new SyntaxError(t||"The String must not be empty")}static errMsg(e){return function(t){return`${e}: ${t}`}}static isString(e){if(e===null)return null;if(d("string")(e))return e;throw new TypeError("The parameter type is string")}static isValidDateFormat(e){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(e)}static isTimeFormat(e){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(e)}}x(s,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");function h(n,e){const t=s.isString(n),i=s.isString(e);return t===i}function l(n){const e=s.isString(n);return e===null||e.length===0}function E(...n){if(n.length===0)return!1;for(const e of n)if(l(e))return!0;return!1}function y(n){const e=s.isString(n);return e===null?0:e.length}function T(n,e=0,t=0){if(n===null)return n;const i=d("Number");if(!i(e)||!i(t))throw new TypeError("The start or end paramter type is number");const u=y(n);return t<0&&(t=u+t),e<0&&(e=u+e),t>u&&(t=u),e>t?"":(e<0&&(e=0),t<0&&(t=0),n.substring(e,t))}function p(n,e,t,i){if(!l(n)&&h("",e)&&e.length>0)return T(n,0,i);if(E(n,e))return n;{const u=e.length,b=u+1,g=u+u+1;if(i<b)throw new RangeError(`Minimum abbreviation width is ${b}`);{const o=n.length;if(o<=i)return n;if(t>o&&(t=o),o-t<i-u&&(t=o-(i-u)),t<=u+1)return n.substring(0,i-u)+e;if(i<g)throw new RangeError(`Minimum abbreviation width with offset is ${g}`);return t+i-u<o?e+p(n.substring(t),e,0,i-u):e+n.substring(o-(i-u))}}}const I=function(n,e,t){return t?(t+n+t).indexOf(t+e+t)>-1:n.indexOf(e)>-1};function N(n,...e){if(e.length!==0){for(const t of e)if(h(n,t))return!0}return!1}function A(n,e){if(h(n,e))return!0;if(n!==null&&e!==null){if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!h(n.charAt(t).toUpperCase(),e.charAt(t).toUpperCase()))return!1;return!0}else return!1}function _(n,...e){if(e.length!==0){for(const t of e)if(A(n,t))return!0}return!1}const $=function(n){return n.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e)};function m(n){const e=s.isString(n);return e===null?null:e.replace(/(^\s*)|(\s*$)/g,"")}const S=function(n){return new RegExp("[A-Za-z]+","g").test(n)},en=function(n,e){let t=0;for(let i=0;i<n.length;i++)S(n[i])?t++:t+=e;return t},q=function(n,e=!1,t=2){return e?en(m(n),t):n.length},B=function(n){return new RegExp("[\\u4E00-\\u9FFF]+","g").test(n)};function R(n){const e=s.isString(n);return e===null?null:e.replace(/(^\s*)/g,"")}function j(n){const e=s.isString(n);return e===null?null:e.replace(/(\s*$)/g,"")}function tn(n,e){if(!d("string")(n))throw new TypeError("The parameter type is string");return e!==void 0&&n.length===0?e:n.charAt(0)}function F(n){const e=tn(n);return e===" "||e===`
`||e==="\r"||e==="	"||e==="\f"}function C(n,e=null){let t=y(n);if(t===0)return n;{const i=s.isString(e);if(i===null)for(;t!==0&&F(n.charAt(t-1));)--t;else{if(i.length===0)return n;for(;t!==0&&i.indexOf(n.charAt(t-1))!==-1;)--t}return n.substring(0,t)}}function L(n,e=null){const t=y(n);if(t===0)return n;{let i=0;const u=s.isString(e);if(u===null)for(;i!==t&&F(n.charAt(i));)++i;else{if(u.length===0)return n;for(;i!==t&&u.indexOf(n.charAt(i))!==-1;)++i}return n.substring(i)}}function w(n,e=null){return n=L(n,e),C(n,e)}function M(n,e=null){if(n===null)return null;if(!Array.isArray(n))throw new TypeError("The paramter type is array");const t=n.length;if(t===0)return n;const i=[];for(let u=0;u<t;u++)i.push(w(n[u],e));return i}function v(n){return n===null?"":w(n,null)}function H(n){return n===null?null:(n=w(n,null),n.length===0?null:n)}function U(n,e=null){if(l(n))return n;if(typeof e=="number")if(e>=32&&e<127){const t=String.fromCharCode(e),i=n.indexOf(t);return i===-1?"":n.substring(i+1)}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(l(e))return"";if(typeof e=="string"){const t=n.indexOf(e);return t===-1?"":n.substring(t+e.length)}else throw new TypeError("The separator type is string | number | null")}}function D(n,e=null){if(l(n))return n;if(typeof e=="number")if(e>=32&&e<127){const t=String.fromCharCode(e),i=n.lastIndexOf(t);return i!==-1&&i!==n.length-1?n.substring(i+1):""}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(l(e))return"";if(typeof e=="string"){const t=n.lastIndexOf(e);return t!==-1&&t!==n.length-e.length?n.substring(t+e.length):""}else throw new TypeError("The separator type is string | number | null")}}function Z(n,e=null){if(l(n))return n;if(typeof e=="number")if(e>=32&&e<127){const t=String.fromCharCode(e),i=n.indexOf(t);return i==-1?n:n.substring(0,i)}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(l(e))return"";if(typeof e=="string"){const t=n.indexOf(e);return t==-1?n:n.substring(0,t)}else throw new TypeError("The separator type is string | number | null")}}function P(n,e=null){if(l(n))return n;if(typeof e=="number")if(e>=32&&e<127){const t=String.fromCharCode(e),i=n.lastIndexOf(t);return i===-1?n:n.substring(0,i)}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(l(e))return"";if(typeof e=="string"){const t=n.lastIndexOf(e);return t===-1?n:n.substring(0,t)}else throw new TypeError("The separator type is string | number | null")}}function rn(...n){if(n===null)return!1;for(const e of n)if(e===null)return!1;return!0}function z(n,e,t){if(rn(n,e,t)){const i=n.indexOf(e);if(i!==-1){const u=n.indexOf(t,i+e.length);if(u!==-1)return n.substring(i+e.length,u)}return null}else return null}function G(n,e,t){if(n===null||l(e)||l(t))return null;const i=n.length;if(i===0)return[];{const u=t.length,b=e.length,g=[];let o;for(let a=0;a<i-u;a=o+u){const k=n.indexOf(e,a);if(k<0)break;const W=k+b;if(o=n.indexOf(t,W),o<0)break;g.push(n.substring(W,o))}return g.length===0?null:g}}function X(n){return n===null?"":m(n)}function J(n){const e=m(n);return l(e)?null:e}function K(n,e,t){if(e<0)throw new RangeError("offset cannot be negative");if(t<0)throw new RangeError("maxWith cannot be negative");if(n===null)return null;if(e>n.length)return"";if(n.length>t){const i=Math.min(e+t,n.length);return n.substring(e,i)}else return n.substring(e)}const Q=function(n){return n.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e)};function V(n,e){return l(n)||l(e)?n:e.concat(n).concat(e)}function Y(n,e){if(l(n)||l(e))return n;const t=!n.startsWith(e),i=!n.endsWith(e);if(!t&&!i)return n;{let u="";return t&&(u=u.concat(e)),u=u.concat(n),i&&(u=u.concat(e)),u}}const un={abbreviate:p,contains:I,equals:h,equalsAny:N,equalsAnyIgnoreCase:_,equalsIgnoreCase:A,escapeHTML:$,getStrLength:q,isAnyEmpty:E,isEmpty:l,isEN:S,isZH:B,length:y,ltrim:R,rtrim:j,startsWith:O,strip:w,stripAll:M,stripEnd:C,stripStart:L,stripToEmpty:v,stripToNull:H,substring:T,substringAfter:U,substringAfterLast:D,substringBefore:Z,substringBeforeLast:P,substringBetween:z,substringsBetween:G,trim:m,trimToEmpty:X,trimToNull:J,truncate:K,unescapeHTML:Q,upperCase:f,wrap:V,wrapIfMissing:Y};r.abbreviate=p,r.contains=I,r.default=un,r.equals=h,r.equalsAny=N,r.equalsAnyIgnoreCase=_,r.equalsIgnoreCase=A,r.escapeHTML=$,r.getStrLength=q,r.isAnyEmpty=E,r.isEN=S,r.isEmpty=l,r.isZH=B,r.length=y,r.ltrim=R,r.rtrim=j,r.startsWith=O,r.strip=w,r.stripAll=M,r.stripEnd=C,r.stripStart=L,r.stripToEmpty=v,r.stripToNull=H,r.substring=T,r.substringAfter=U,r.substringAfterLast=D,r.substringBefore=Z,r.substringBeforeLast=P,r.substringBetween=z,r.substringsBetween=G,r.trim=m,r.trimToEmpty=X,r.trimToNull=J,r.truncate=K,r.unescapeHTML=Q,r.upperCase=f,r.wrap=V,r.wrapIfMissing=Y,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
