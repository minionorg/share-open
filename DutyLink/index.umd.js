(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index={}))})(this,function(e){"use strict";var a=Object.defineProperty;var l=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var u=(e,t,i)=>(l(e,typeof t!="symbol"?t+"":t,i),i);const t=function(o){return o.charAt(0).toUpperCase()+o.slice(1)},c=function(o){if(!o)throw new SyntaxError("type is must");return function(n){return Object.prototype.toString.call(n)===`[object ${t(o)}]`}}("Function");class r{constructor(n,s="nextSuccessor"){u(this,"fn");u(this,"nextNode");u(this,"nextFlag");if(!c(n))throw new Error(`${n} is no a function`);this.fn=n,this.nextNode=null,this.nextFlag=s}after(n,s=this.nextFlag){const f=n instanceof r;return this.nextNode=f?n:new r(n,s)}start(...n){const s=this.fn.apply(this,n);return s===this.nextFlag?this.next.apply(this,n):s}next(){return this.nextNode&&this.nextNode.start.apply(this.nextNode,arguments)}}e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
