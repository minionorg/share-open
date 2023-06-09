(function(r,u){typeof exports=="object"&&typeof module<"u"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(r=typeof globalThis<"u"?globalThis:r||self,u(r.index={}))})(this,function(r){"use strict";var tt=Object.defineProperty;var nt=(r,u,a)=>u in r?tt(r,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[u]=a;var h=(r,u,a)=>(nt(r,typeof u!="symbol"?u+"":u,a),a);const u=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},a=function(t){if(!t)throw new SyntaxError("type is must");return function(n){return Object.prototype.toString.call(n)===`[object ${u(t)}]`}},F=function(t,n){const e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)"),s=t.match(e);return s!==null?s[2]:null},T="[\\u2700-\\u27BF]",_="[\\uE000-\\uF8FF]",C="\\uD83C[\\uDC00-\\uDFFF]",L="\\uD83D[\\uDC00-\\uDFFF]",U="[\\u2011-\\u26FF]",M="\\uD83E[\\uDD10-\\uDDFF]",S=function(t){return RegExp(`(${T}|${_}|${C}|${L}|${U}|${M})`,"g").test(t)},R=function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)};class g{constructor(){}static notNull(n,e){if(n===null)throw new SyntaxError(e||"The value must not be empty")}static notEmpty(n,e){if(n.length===0)throw new SyntaxError(e||"The String must not be empty")}static errMsg(n){return function(e){return`${n}: ${e}`}}static isString(n){if(n===null)return null;if(E("string")(n))return n;throw new TypeError("The parameter type is string")}static isValidDateFormat(n){return/(^(y{4}|y{2})[.\u002f-](m{1,2})[.\u002f-](d{1,2})$)|(^(m{1,2})[.\u002f-](d{1,2})[.\u002f-]((y{4}|y{2})$))|(^(d{1,2})[.\u002f-](m{1,2})[.\u002f-]((y{4}|y{2})$))/gi.test(n)}static isTimeFormat(n){return/(^(h{1,2}):(m{1,2}):(s{1,2})$)|(^(h{1,2}):(m{1,2})$)/gi.test(n)}}h(g,"DEFAULT_NOT_NAN_EX_MESSAGE","\u9A8C\u8BC1\u7684\u503C\u4E0D\u662F\u6570\u5B57");const b="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",f=`(${b}[.]){3}${b}`,B=new RegExp(`^${f}$`);function d(t){return g.isString(t)===null?!1:B.test(t)}function x(t,n,e=!1){if(t!==null&&n!==null){const s=n.length;return s>t.length?!1:z(t,e,0,n,0,s)}else return t===n}function z(t,n,e,s,c,o){n&&(t=t.toLowerCase(),s=s.toLowerCase());const l=e+o;let w=0;for(let m=e;m<l;m++){if(t.charAt(m)!==s.charAt(c+w))return!1;w++}return!0}const H=/^\d{1,3}$/;function j(t){if(g.isString(t)===null)return!1;const e=t.split("/");return e.length!==2||!H.test(e[1])||e[1].length>1&&x(e[1],"0")||!d(e[0])?!1:Number(e[1])<=32&&Number(e[1])>=0}const i="(?:[0-9a-fA-F]{1,4})",V=new RegExp(`^((?:${i}:){7}(?:${i}|:)|(?:${i}:){6}(?:${f}|:${i}|:)|(?:${i}:){5}(?::${f}|(:${i}){1,2}|:)|(?:${i}:){4}(?:(:${i}){0,1}:${f}|(:${i}){1,3}|:)|(?:${i}:){3}(?:(:${i}){0,2}:${f}|(:${i}){1,4}|:)|(?:${i}:){2}(?:(:${i}){0,3}:${f}|(:${i}){1,5}|:)|(?:${i}:){1}(?:(:${i}){0,4}:${f}|(:${i}){1,6}|:)|(?::((?::${i}){0,5}:${f}|(?::${i}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`);function p(t){return g.isString(t)===null?!1:V.test(t)}const Z=/^\d{1,3}$/;function v(t){if(g.isString(t)===null)return!1;const e=t.split("/");return e.length!==2||!Z.test(e[1])||e[1].length>1&&x(e[1],"0")||!p(e[0])?!1:Number(e[1])<=128&&Number(e[1])>=0}const N=function(t){return/^((\+86)|(86))?(1)\d{10}$/.test(""+t)},O=function(t){return/^(\(\d{3,4}\)|\d{3,4}(-|\s)?)?\d{7,8}(-\d{1,4})?$/.test(""+t)};function q(t,n){if(g.isString(t)===null)return!1;const s=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,c=/^[-+]?[0-9]+$/,o=n||{},l=Object.prototype.hasOwnProperty,m=(Object.prototype.hasOwnProperty.call(o,"zeroes")&&!o.zeroes?s:c).test(t),y=parseInt(t,10);return m&&(!l.call(o,"min")||y>=o.min)&&(!l.call(o,"max")||y<=o.max)&&(!l.call(o,"lt")||y<o.lt)&&(!l.call(o,"gt")||y>o.gt)}function D(t){return q(t,{min:0,max:65535})}const I=function(t){return/^\d{6}$/.test(""+t)},K=a("Function");class ${constructor(n,e="nextSuccessor"){h(this,"fn");h(this,"nextNode");h(this,"nextFlag");if(!K(n))throw new Error(`${n} is no a function`);this.fn=n,this.nextNode=null,this.nextFlag=e}after(n,e=this.nextFlag){const s=n instanceof $;return this.nextNode=s?n:new $(n,e)}start(...n){const e=this.fn.apply(this,n);return e===this.nextFlag?this.next.apply(this,n):e}next(){return this.nextNode&&this.nextNode.start.apply(this.nextNode,arguments)}}const k=a("Object"),G=function(t){return Object.getOwnPropertyNames(t).length===0?!0:"nextSuccessor"},W=function(t){return Object.keys(t).length===0},P=function(t){if(!k(t))throw new Error(`${t} is no a object type`);const n=new $(G);return n.after(W),n.start(t)};function X(t){const n=/([^?=&]+)=([^&]*)/gi,e={};return t.replace(n,(s,c,o)=>{e[c]=o}),P(e)?"nextSuccessor":e}function J(t){const n=t.split("?")[1],e={},s=n&&n.split("&");return s&&s.reduce((c,o)=>{const l=o.split("=");return c[l[0]]=l[1],c},e),P(e)?"nextSuccessor":e}function Q(t){const n=t.split("?")[1],e=new URLSearchParams(n),s={};for(const c of e)s[c[0]]=c[1];return P(s)?null:s}const A=function(t){const n=new $(X);return n.after(J).after(Q),n.start(t)},E=function(t){if(!t)throw new SyntaxError("type is must");return function(n){return Object.prototype.toString.call(n)===`[object ${u(t)}]`}},Y={createType:a,getURLValueByKey:F,hasEmoji:S,isEmail:R,isIPv4:d,isIPv4Range:j,isIPv6:p,isIPv6Range:v,isMobile:N,isPhone:O,isPort:D,isPostalCode:I,queryURLParams:A,validateTypeHoc:E};r.createType=a,r.default=Y,r.getURLValueByKey=F,r.hasEmoji=S,r.isEmail=R,r.isIPv4=d,r.isIPv4Range=j,r.isIPv6=p,r.isIPv6Range=v,r.isMobile=N,r.isPhone=O,r.isPort=D,r.isPostalCode=I,r.queryURLParams=A,r.validateTypeHoc=E,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
