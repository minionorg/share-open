(function(c,h){typeof exports=="object"&&typeof module<"u"?h(exports):typeof define=="function"&&define.amd?define(["exports"],h):(c=typeof globalThis<"u"?globalThis:c||self,h(c.index={}))})(this,function(c){"use strict";var De=Object.defineProperty;var Ce=(c,h,l)=>h in c?De(c,h,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[h]=l;var $=(c,h,l)=>(Ce(c,typeof h!="symbol"?h+"":h,l),l);const h=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},l=function(t){if(!t)throw new SyntaxError("type is must");return function(e){return Object.prototype.toString.call(e)===`[object ${h(t)}]`}};function nt(t,e,n){if(!l("Array")(t))throw new TypeError("The list must be array");const r=[...t];if(n===void 0)r.push(e);else if(l("Number")(n))r.splice(n,0,e);else throw new TypeError("The index must be number");return r}function rt(t,...e){const n=l("Array");if(n(t)){if(e.length===0)return[...t];let r=[...t];for(const i of e){if(!n(i))throw new SyntaxError(`The ${i} must be array in rest`);r=[...r,...i]}return r}else throw new SyntaxError("The ary must be array")}const F=function(t){if(!t)throw new SyntaxError("type is must");return function(e){return Object.prototype.toString.call(e)===`[object ${h(t)}]`}},it=function(t,e){const n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=t.match(n);return r!==null?r[2]:null},st="[\\u2700-\\u27BF]",ot="[\\uE000-\\uF8FF]",ut="\\uD83C[\\uDC00-\\uDFFF]",lt="\\uD83D[\\uDC00-\\uDFFF]",ct="[\\u2011-\\u26FF]",ft="\\uD83E[\\uDD10-\\uDDFF]",at=function(t){return RegExp(`(${st}|${ot}|${ut}|${lt}|${ct}|${ft})`,"g").test(t)},gt=function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)};class a{constructor(){}static notNull(e,n){if(e===null)throw new SyntaxError(n||"The value must not be empty")}static notEmpty(e,n){if(e.length===0)throw new SyntaxError(n||"The String must not be empty")}static errMsg(e){return function(n){return`${e}: ${n}`}}static isString(e){if(e===null)return null;if(l("string")(e))return e;throw new TypeError("The parameter type is string")}static isValidDateFormat(e){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(e)}static isTimeFormat(e){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(e)}}$(a,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");const P="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",y=`(${P}[.]){3}${P}`,ht=new RegExp(`^${y}$`);function O(t){return a.isString(t)===null?!1:ht.test(t)}function D(t,e,n=!1){if(t!==null&&e!==null){const r=e.length;return r>t.length?!1:mt(t,n,0,e,0,r)}else return t===e}function mt(t,e,n,r,i,s){e&&(t=t.toLowerCase(),r=r.toLowerCase());const o=n+s;let u=0;for(let m=n;m<o;m++){if(t.charAt(m)!==r.charAt(i+u))return!1;u++}return!0}const dt=/^\d{1,3}$/;function yt(t){if(a.isString(t)===null)return!1;const n=t.split("/");return n.length!==2||!dt.test(n[1])||n[1].length>1&&D(n[1],"0")||!O(n[0])?!1:Number(n[1])<=32&&Number(n[1])>=0}const f="(?:[0-9a-fA-F]{1,4})",wt=new RegExp(`^((?:${f}:){7}(?:${f}|:)|(?:${f}:){6}(?:${y}|:${f}|:)|(?:${f}:){5}(?::${y}|(:${f}){1,2}|:)|(?:${f}:){4}(?:(:${f}){0,1}:${y}|(:${f}){1,3}|:)|(?:${f}:){3}(?:(:${f}){0,2}:${y}|(:${f}){1,4}|:)|(?:${f}:){2}(?:(:${f}){0,3}:${y}|(:${f}){1,5}|:)|(?:${f}:){1}(?:(:${f}){0,4}:${y}|(:${f}){1,6}|:)|(?::((?::${f}){0,5}:${y}|(?::${f}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`);function R(t){return a.isString(t)===null?!1:wt.test(t)}const bt=/^\d{1,3}$/;function pt(t){if(a.isString(t)===null)return!1;const n=t.split("/");return n.length!==2||!bt.test(n[1])||n[1].length>1&&D(n[1],"0")||!R(n[0])?!1:Number(n[1])<=128&&Number(n[1])>=0}const $t=function(t){return/^((\+86)|(86))?(1)\d{10}$/.test(""+t)},St=function(t){return/^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test(""+t)};function N(t,e){if(a.isString(t)===null)return!1;const r=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,i=/^[-+]?[0-9]+$/,s=e||{},o=Object.prototype.hasOwnProperty,m=(Object.prototype.hasOwnProperty.call(s,"zeroes")&&!s.zeroes?r:i).test(t),b=parseInt(t,10);return m&&(!o.call(s,"min")||b>=s.min)&&(!o.call(s,"max")||b<=s.max)&&(!o.call(s,"lt")||b<s.lt)&&(!o.call(s,"gt")||b>s.gt)}function At(t){return N(t,{min:0,max:65535})}const Et=function(t){return/^\d{6}$/.test(""+t)},Tt=F("Function");class w{constructor(e,n="nextSuccessor"){$(this,"fn");$(this,"nextNode");$(this,"nextFlag");if(!Tt(e))throw new Error(`${e} is no a function`);this.fn=e,this.nextNode=null,this.nextFlag=n}after(e,n=this.nextFlag){const r=e instanceof w;return this.nextNode=r?e:new w(e,n)}start(...e){const n=this.fn.apply(this,e);return n===this.nextFlag?this.next.apply(this,e):n}next(){return this.nextNode&&this.nextNode.start.apply(this.nextNode,arguments)}}const xt=F("Object"),Ft=function(t){return Object.getOwnPropertyNames(t).length===0?!0:"nextSuccessor"},Dt=function(t){return Object.keys(t).length===0},S=function(t){if(!xt(t))throw new Error(`${t} is no a object type`);const e=new w(Ft);return e.after(Dt),e.start(t)};function Ct(t){const e=/([^?=&]+)=([^&]*)/gi,n={};return t.replace(e,(r,i,s)=>{n[i]=s}),S(n)?"nextSuccessor":n}function Mt(t){const e=t.split("?")[1],n={},r=e&&e.split("&");return r&&r.reduce((i,s)=>{const o=s.split("=");return i[o[0]]=o[1],i},n),S(n)?"nextSuccessor":n}function Pt(t){const e=t.split("?")[1],n=new URLSearchParams(e),r={};for(const i of n)r[i[0]]=i[1];return S(r)?null:r}const I={createType:F,getURLValueByKey:it,hasEmoji:at,isEmail:gt,isIPv4:O,isIPv4Range:yt,isIPv6:R,isIPv6Range:pt,isMobile:$t,isPhone:St,isPort:At,isPostalCode:Et,queryURLParams:function(t){const e=new w(Ct);return e.after(Mt).after(Pt),e.start(t)},validateTypeHoc:l};function Ot(t){if(t===null)return null;if(!l("Array")(t))throw new TypeError("The ary must be array");return[...t]}function Rt(t,e){if(!l("Array")(t))throw new TypeError("The list must be array");const n=[...t];if(n.length===0)return n;if(e===void 0)throw new SyntaxError("The index must be required");if(l("Number")(e))e<0?e=0:e>=n.length?e=n.length-1:e=Math.floor(e);else throw new TypeError("The index must be number");return n.splice(e,1),n}const L={add:nt,addAll:rt,clone:Ot,remove:Rt};function d(t,e){if(!l("string")(t))throw new TypeError("The parameter type is string");return e!==void 0&&t.length===0?e:t.charAt(0)}function Nt(t,e){const n=d(t),r=d(e);return Number.isNaN(n.charCodeAt(0))&&Number.isNaN(r.charCodeAt(0))?0:n.charCodeAt(0)-r.charCodeAt(0)}function It(t){return d(t).charCodeAt(0)<128}function U(t){const e=d(t);return e>="A"&&e<="Z"}function _(t){const e=d(t);return e>="a"&&e<="z"}function j(t){return U(t)||_(t)}function C(t){const e=d(t);return e>="0"&&e<="9"}function Lt(t){return j(t)||C(t)}function Ut(t){const e=d(t);return e<" "||e.charCodeAt(0)<32||e.charCodeAt(0)===127}function _t(t){const e=d(t);return(e>=" "||e.charCodeAt(0)>=32)&&e.charCodeAt(0)<127}function M(t){const e=d(t);return e===" "||e===`
`||e==="\r"||e==="	"||e==="\f"}function jt(t,e){if(!C(t)){if(e!==void 0)return e;throw new RangeError("The character "+t+" is not in the range '0' - '9'")}return t.charCodeAt(0)-48}const A=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function vt(t){const e=d(t).charCodeAt(0);return"\\u"+A[e>>12&15]+A[e>>8&15]+A[e>>4&15]+A[e&15]}function Yt(t){return t.replace(/\\u([\d\w]{4})/gi,function(e,n){return String.fromCharCode(parseInt(n,16))})}const v={compare:Nt,isAscii:It,isAsciiAlpha:j,isAsciiAlphaLower:_,isAsciiAlphanumeric:Lt,isAsciiAlphaUpper:U,isAsciiControl:Ut,isAsciiNumeric:C,isAsciiPrintable:_t,isWhitespace:M,toChar:d,toIntValue:jt,unicodeEscaped:vt,unicodeUnescaped:Yt};function qt(t){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(t)}function Bt(t,e){const n=[],r=Math.min(t.length,e.length);for(let i=0;i<r;i++)n.push([t[i],e[i]]);return n}function Y(t,e={format:"YYYY/MM/DD",delimiters:["/","-"],strictMode:!1}){if(e={format:"YYYY/MM/DD",delimiters:["/","-"],strictMode:!1,...e},l("String")(t)&&qt(e.format)){const n=e.delimiters.find(o=>e.format.indexOf(o)!==-1),r=e.strictMode?n:e.delimiters.find(o=>t.indexOf(o)!==-1),i=Bt(t.split(r),e.format.toLowerCase().split(n)),s={};for(const[o,u]of i){if(o.length!==u.length)return!1;s[u.charAt(0)]=o}return new Date(`${s.m}/${s.d}/${s.y}`).getDate()===+s.d}return e.strictMode?!1:l("Date")(t)}function Ht(t,e){const n=[],r=Math.min(t.length,e.length);for(let i=0;i<r;i++)n.push([t[i],e[i]]);return n}function zt(t,e,n){const r=e.delimiters.find(u=>e.format.indexOf(u)!==-1),i=e.strictMode?r:e.delimiters.find(u=>t.indexOf(u)!==-1),s=Ht(t.split(i),e.format.toLowerCase().split(r)),o={};for(const[u,m]of s){if(u.length!==m.length)throw new SyntaxError(`${e.format} format is error`);o[m.charAt(0)]=u}return n.format.replace(/(y{4}|y{2})/gi,o.y).replace(/(m{1,2})/gi,o.m).replace(/(d{1,2})/gi,o.d)}function Zt(t,e){const n=t.getFullYear();return e.format.replace(/(y{4}|y{2})/gi,n+"").replace(/(m{1,2})/gi,i=>i.length===1?String(t.getMonth()+1):String(t.getMonth()+1).padStart(2,"0")).replace(/(d{1,2})/gi,i=>i.length===1?String(t.getDate()):String(t.getDate()).padStart(2,"0"))}function Vt(t){if(!a.isValidDateFormat(t.format))throw new SyntaxError(`${t.format} is not valid date format`);return function(e,n){if(n={format:"YYYY/MM/DD",delimiters:["/","-"],strictMode:!1,...n},!Y(e,n))throw new SyntaxError(`${e} is not valid date`);if(l("String")(e))return zt(e,n,t);if(l("Date")(e))return Zt(e,t)}}const Gt=function(t,e){return Math.abs(t*1-e*1)/(24*60*60*1e3)},q=function(t){return new Date(t.getFullYear(),2,0).getDate()===29},Kt=function(t){switch(t.getMonth()){case 0:case 2:case 4:case 6:case 7:case 9:case 11:return 31;case 1:return q(t)?29:28;default:return 30}},Xt=function(t){return new Date(t.getFullYear(),t.getMonth(),1)},Jt=function(t){return new Date(t.getFullYear(),t.getMonth()+1,0)},Qt={24:{default:/^([01]?\d|2[0-3]):([0-5]\d)$/,hasSecond:/^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/},12:{default:/^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,hasSecond:/^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/}};function kt(t,e){if(!l("String")(t))return!1;if(e={format:"HH:MM:SS",mode:24,...e},!a.isTimeFormat(e.format))throw new SyntaxError(`${e.format} is not valid format`);if(![24,12].includes(e.mode))throw new SyntaxError(`${e.mode} is not valid mode`);const n=e.format.match(/s/ig),r=n&&n.length>0;return Qt[e.mode][r?"hasSecond":"default"].test(t)}const Wt={24:{default:/^([01]?\d|2[0-3]):([0-5]\d)$/,hasSecond:/^([01]?\d|2[0-3]):([0-5]\d):([0-5]\d)$/},12:{default:/^(0?\d|1[0-2]):([0-5]\d) (A|P)M$/,hasSecond:/^(0?\d|1[0-2]):([0-5]\d):([0-5]\d) (A|P)M$/}};function B(t,e,n){let r;for(const i in e)if(["12","24"].includes(i)){const s=B(t,e[i],i);s&&(r=s)}else if(e[i].test(t))return{mode:n,format:i,matches:t.match(e[i])};return r}function te(t){if(!a.isTimeFormat(t.format))throw new SyntaxError(`${t.format} is not valid format`);if(![24,12].includes(t.mode))throw new SyntaxError(`${t.mode} is not valid mode`);return function(e){const n=B(e,Wt,void 0);if(!n)throw new SyntaxError(`${e} is not valid time`);const r={h:"",m:"",s:"",b:""};if(n.mode==="12"){const[s,o,u,m]=[...n.matches].splice(1,4);r.h=s,r.m=o,r.s=u,r.b=m,t.mode===24&&m==="P"&&(r.h=+s+12+"")}else if(n.mode==="24"){const[s,o,u]=[...n.matches].splice(1,3);r.h=s,r.m=o,r.s=u}if(t.mode===12&&!r.b){const s=+r.h;s>12?(r.h=s-12+"",r.b="P"):r.b="A"}let i=t.format.replace(/(h{1,2})/gi,r.h).replace(/(m{1,2})/gi,r.m).replace(r.s?/(s{1,2})/gi:/:(s{1,2})/gi,r.s?r.s:"");return t.mode===12&&r.b&&(i+=` ${r.b}M`),i}}const H={dateFormatHoc:Vt,getDatePeriod:Gt,getDaysInMonth:Kt,getFirstDateInMonth:Xt,getLastDateInMonth:Jt,isDate:Y,isLeapYear:q,isTime:kt,timeFormatHoc:te};function ee(t,e){const n=a.isString(t);if([null,"",".",",","-","+"].includes(n))return!1;const r=new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\.[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"),i=e||{},s=Object.prototype.hasOwnProperty,o=parseFloat(n.replace(",","."));return r.test(t)&&(!s.call(i,"min")||o>=i.min)&&(!s.call(i,"max")||o<=i.max)&&(!s.call(i,"lt")||o<i.lt)&&(!s.call(i,"gt")||o>i.gt)}const z={isFloat:ee,isInteger:N};function Z(...t){if(t===null)return!1;for(const e of t)if(e===null)return!1;return!0}const V={allNotNull:Z,isEmpty:S};function p(t,e){const n=a.isString(t),r=a.isString(e);return n===r}function g(t){const e=a.isString(t);return e===null||e.length===0}function G(...t){if(t.length===0)return!1;for(const e of t)if(g(e))return!0;return!1}function E(t){const e=a.isString(t);return e===null?0:e.length}function K(t,e=0,n=0){if(t===null)return t;const r=l("Number");if(!r(e)||!r(n))throw new TypeError("The start or end paramter type is number");const i=E(t);return n<0&&(n=i+n),e<0&&(e=i+e),n>i&&(n=i),e>n?"":(e<0&&(e=0),n<0&&(n=0),t.substring(e,n))}function X(t,e,n,r){if(!g(t)&&p("",e)&&e.length>0)return K(t,0,r);if(G(t,e))return t;{const i=e.length,s=i+1,o=i+i+1;if(r<s)throw new RangeError(`Minimum abbreviation width is ${s}`);{const u=t.length;if(u<=r)return t;if(n>u&&(n=u),u-n<r-i&&(n=u-(r-i)),n<=i+1)return t.substring(0,r-i)+e;if(r<o)throw new RangeError(`Minimum abbreviation width with offset is ${o}`);return n+r-i<u?e+X(t.substring(n),e,0,r-i):e+t.substring(u-(r-i))}}}const ne=function(t,e,n){return n?(n+t+n).indexOf(n+e+n)>-1:t.indexOf(e)>-1};function re(t,...e){if(e.length!==0){for(const n of e)if(p(t,n))return!0}return!1}function J(t,e){if(p(t,e))return!0;if(t!==null&&e!==null){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!p(t.charAt(n).toUpperCase(),e.charAt(n).toUpperCase()))return!1;return!0}else return!1}function ie(t,...e){if(e.length!==0){for(const n of e)if(J(t,n))return!0}return!1}const se=function(t){return t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e)};function T(t){const e=a.isString(t);return e===null?null:e.replace(/(^\s*)|(\s*$)/g,"")}const Q=function(t){return new RegExp("[A-Za-z]+","g").test(t)},oe=function(t,e){let n=0;for(let r=0;r<t.length;r++)Q(t[r])?n++:n+=e;return n},ue=function(t,e=!1,n=2){return e?oe(T(t),n):t.length},le=function(t){return new RegExp("[\\u4E00-\\u9FFF]+","g").test(t)};function ce(t){const e=a.isString(t);return e===null?null:e.replace(/(^\s*)/g,"")}function fe(t){const e=a.isString(t);return e===null?null:e.replace(/(\s*$)/g,"")}function k(t,e=null){let n=E(t);if(n===0)return t;{const r=a.isString(e);if(r===null)for(;n!==0&&M(t.charAt(n-1));)--n;else{if(r.length===0)return t;for(;n!==0&&r.indexOf(t.charAt(n-1))!==-1;)--n}return t.substring(0,n)}}function W(t,e=null){const n=E(t);if(n===0)return t;{let r=0;const i=a.isString(e);if(i===null)for(;r!==n&&M(t.charAt(r));)++r;else{if(i.length===0)return t;for(;r!==n&&i.indexOf(t.charAt(r))!==-1;)++r}return t.substring(r)}}function x(t,e=null){return t=W(t,e),k(t,e)}function ae(t,e=null){if(t===null)return null;if(!Array.isArray(t))throw new TypeError("The paramter type is array");const n=t.length;if(n===0)return t;const r=[];for(let i=0;i<n;i++)r.push(x(t[i],e));return r}function ge(t){return t===null?"":x(t,null)}function he(t){return t===null?null:(t=x(t,null),t.length===0?null:t)}function me(t,e=null){if(g(t))return t;if(typeof e=="number")if(e>=32&&e<127){const n=String.fromCharCode(e),r=t.indexOf(n);return r===-1?"":t.substring(r+1)}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(g(e))return"";if(typeof e=="string"){const n=t.indexOf(e);return n===-1?"":t.substring(n+e.length)}else throw new TypeError("The separator type is string | number | null")}}function de(t,e=null){if(g(t))return t;if(typeof e=="number")if(e>=32&&e<127){const n=String.fromCharCode(e),r=t.lastIndexOf(n);return r!==-1&&r!==t.length-1?t.substring(r+1):""}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(g(e))return"";if(typeof e=="string"){const n=t.lastIndexOf(e);return n!==-1&&n!==t.length-e.length?t.substring(n+e.length):""}else throw new TypeError("The separator type is string | number | null")}}function ye(t,e=null){if(g(t))return t;if(typeof e=="number")if(e>=32&&e<127){const n=String.fromCharCode(e),r=t.indexOf(n);return r==-1?t:t.substring(0,r)}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(g(e))return"";if(typeof e=="string"){const n=t.indexOf(e);return n==-1?t:t.substring(0,n)}else throw new TypeError("The separator type is string | number | null")}}function we(t,e=null){if(g(t))return t;if(typeof e=="number")if(e>=32&&e<127){const n=String.fromCharCode(e),r=t.lastIndexOf(n);return r===-1?t:t.substring(0,r)}else throw new RangeError("The separator decimal numbers not in 7-bit ASCII displayable characters");else{if(g(e))return"";if(typeof e=="string"){const n=t.lastIndexOf(e);return n===-1?t:t.substring(0,n)}else throw new TypeError("The separator type is string | number | null")}}function be(t,e,n){if(Z(t,e,n)){const r=t.indexOf(e);if(r!==-1){const i=t.indexOf(n,r+e.length);if(i!==-1)return t.substring(r+e.length,i)}return null}else return null}function pe(t,e,n){if(t===null||g(e)||g(n))return null;const r=t.length;if(r===0)return[];{const i=n.length,s=e.length,o=[];let u;for(let m=0;m<r-i;m=u+i){const b=t.indexOf(e,m);if(b<0)break;const et=b+s;if(u=t.indexOf(n,et),u<0)break;o.push(t.substring(et,u))}return o.length===0?null:o}}function $e(t){return t===null?"":T(t)}function Se(t){const e=T(t);return g(e)?null:e}function Ae(t,e,n){if(e<0)throw new RangeError("offset cannot be negative");if(n<0)throw new RangeError("maxWith cannot be negative");if(t===null)return null;if(e>t.length)return"";if(t.length>n){const r=Math.min(e+n,t.length);return t.substring(e,r)}else return t.substring(e)}const Ee=function(t){return t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e)};function Te(t,e){return g(t)||g(e)?t:e.concat(t).concat(e)}function xe(t,e){if(g(t)||g(e))return t;const n=!t.startsWith(e),r=!t.endsWith(e);if(!n&&!r)return t;{let i="";return n&&(i=i.concat(e)),i=i.concat(t),r&&(i=i.concat(e)),i}}const tt={abbreviate:X,contains:ne,equals:p,equalsAny:re,equalsAnyIgnoreCase:ie,equalsIgnoreCase:J,escapeHTML:se,getStrLength:ue,isAnyEmpty:G,isEmpty:g,isEN:Q,isZH:le,length:E,ltrim:ce,rtrim:fe,startsWith:D,strip:x,stripAll:ae,stripEnd:k,stripStart:W,stripToEmpty:ge,stripToNull:he,substring:K,substringAfter:me,substringAfterLast:de,substringBefore:ye,substringBeforeLast:we,substringBetween:be,substringsBetween:pe,trim:T,trimToEmpty:$e,trimToNull:Se,truncate:Ae,unescapeHTML:Ee,upperCase:h,wrap:Te,wrapIfMissing:xe},Fe={ArrayUtils:L,CharUtils:v,DateUtils:H,DutyLink:w,NumberUtils:z,ObjectUtils:V,StringUtils:tt,Utils:I};c.ArrayUtils=L,c.CharUtils=v,c.DateUtils=H,c.DutyLink=w,c.NumberUtils=z,c.ObjectUtils=V,c.StringUtils=tt,c.Utils=I,c.default=Fe,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
