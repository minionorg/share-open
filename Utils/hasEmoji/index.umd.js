(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.index={}))})(this,function(e){"use strict";const n="[\\u2700-\\u27BF]",t="[\\uE000-\\uF8FF]",o="\\uD83C[\\uDC00-\\uDFFF]",u="\\uD83D[\\uDC00-\\uDFFF]",s="[\\u2011-\\u26FF]",i="\\uD83E[\\uDD10-\\uDDFF]",r=function(d){return RegExp(`(${n}|${t}|${o}|${u}|${s}|${i})`,"g").test(d)};e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});