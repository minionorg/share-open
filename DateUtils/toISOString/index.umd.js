(function(e,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.index={}))})(this,function(e){"use strict";function n(i){const t=new Date(i.getTime()),o=t.getUTCFullYear(),s=String(t.getUTCMonth()+1).padStart(2,"0"),d=String(t.getUTCDate()).padStart(2,"0"),r=String(t.getUTCHours()).padStart(2,"0"),a=String(t.getUTCMinutes()).padStart(2,"0"),u=String(t.getUTCSeconds()).padStart(2,"0"),c=String((t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)).padStart(3,"0");return`${o}-${s}-${d}T${r}:${a}:${u}.${c}Z`}e.default=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
