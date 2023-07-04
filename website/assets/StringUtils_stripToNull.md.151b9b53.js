import{_ as e,r as l,o as c,c as r,a as s,b as t,w as o,d as n,e as p}from"./app.a7d6c65a.js";const x='{"title":"stripToNull","description":"","frontmatter":{},"headers":[{"level":2,"title":"stripToNull","slug":"striptonull"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/stripToNull.md"}',i={},u=p(`<h2 id="striptonull" tabindex="-1">stripToNull <a class="header-anchor" href="#striptonull" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">stripToNull</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> string 
</code></pre></div><p>\u4ECE\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u548C\u7ED3\u5C3E\u5265\u79BB\u7A7A\u767D,\u5982\u679C\u5265\u79BB\u540E\u662F\u7A7A\u7684(&quot;&quot;),\u5219\u8FD4\u56DEnull</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=p(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token string">&#39;   &#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token string">&#39;  abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token string">&#39;abc  &#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token string">&#39; abc &#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token function">stripToNull</span><span class="token punctuation">(</span><span class="token string">&#39; ab c &#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;ab c&#39;</span>
</code></pre></div>`,2);function _(h,T,g,f,N,b){const a=l("font");return c(),r("div",null,[u,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:o(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u8981\u5265\u79BB\u7684\u5B57\u7B26\u4E32,\u53EF\u80FD\u4E3Anull")])]),k,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:o(()=>[n("{ string }")]),_:1}),n(" \u5265\u79BB\u540E\u7684\u5B57\u7B26\u4E32,\u5982\u679C\u8F93\u5165\u7684\u662F\u7A7A\u767D\u6216null\u6216\u7A7A\u7684\u5B57\u7B26\u4E32\u8FD4\u56DEnull")])]),d])}var m=e(i,[["render",_]]);export{x as __pageData,m as default};