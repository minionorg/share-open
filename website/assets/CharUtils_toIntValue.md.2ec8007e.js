import{_ as p,r as l,o as c,c as r,a as n,b as t,w as e,d as a,e as o}from"./app.a4ee4820.js";const I='{"title":"toIntValue","description":"","frontmatter":{},"headers":[{"level":2,"title":"toIntValue","slug":"tointvalue"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"CharUtils/toIntValue.md"}',u={},i=o(`<h2 id="tointvalue" tabindex="-1">toIntValue <a class="header-anchor" href="#tointvalue" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">toIntValue</span><span class="token punctuation">(</span>ch<span class="token operator">:</span> string<span class="token punctuation">,</span> defaultValue<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> number 
</code></pre></div><p>\u5C06\u5B57\u7B26\u8F6C\u6362\u4E3A\u5B83\u6240\u8868\u793A\u7684\u6574\u6570\uFF0C\u5982\u679C\u5B57\u7B26\u4E0D\u662F\u6570\u5B57\u5219\u629B\u51FA\u5F02\u5E38</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),d=n("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[a("\u8FD4\u56DE\u503C "),n("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),_=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">toIntValue</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token number">3</span>
<span class="token function">toIntValue</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>  <span class="token operator">=</span> throws RangeError
<span class="token function">toIntValue</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token number">3</span>
<span class="token function">toIntValue</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
</code></pre></div>`,2);function k(h,f,V,g,v,b){const s=l("font");return c(),r("div",null,[i,n("ul",null,[n("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[a("{ string }")]),_:1}),a(" ch \u2014 \u8981\u8F6C\u6362\u7684\u5B57\u7B26")]),n("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[a("{ undefined }")]),_:1}),a(" defaultValue \u2014 \u5982\u679C\u5B57\u7B26\u4E0D\u662F\u6570\u5B57\uFF0C\u5219\u4F7F\u7528\u7684\u9ED8\u8BA4\u503C")])]),d,n("ul",null,[n("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[a("{ undefined }")]),_:1}),a(" \u5B57\u7B26\u7684\u6574\u578B\u503C")])]),_])}var T=p(u,[["render",k]]);export{I as __pageData,T as default};
