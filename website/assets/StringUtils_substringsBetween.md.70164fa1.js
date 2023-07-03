import{_ as o,r as c,o as l,c as r,a as s,b as t,w as e,d as n,e as p}from"./app.a7d6c65a.js";const T='{"title":"substringsBetween","description":"","frontmatter":{},"headers":[{"level":2,"title":"substringsBetween","slug":"substringsbetween"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/substringsBetween.md"}',u={},i=p(`<h2 id="substringsbetween" tabindex="-1">substringsBetween <a class="header-anchor" href="#substringsbetween" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">substringsBetween</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">open</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">close</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> 
</code></pre></div><p>\u5728\u5B57\u7B26\u4E32\u4E2D\u641C\u7D22\u7531\u5F00\u59CB\u548C\u7ED3\u675F\u6807\u8BB0\u5206\u9694\u7684\u5B50\u5B57\u7B26\u4E32,\u4EE5\u6570\u7EC4\u8FD4\u56DE\u6240\u6709\u5339\u914D\u7684\u5B50\u5B57\u7B26\u4E32</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=p(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">substringsBetween</span><span class="token punctuation">(</span><span class="token string">&#39;yabczyabcdz&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;z&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;abcd&#39;</span><span class="token punctuation">]</span>
<span class="token function">substringsBetween</span><span class="token punctuation">(</span><span class="token string">&#39;[a][b][c]&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>
<span class="token function">substringsBetween</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;any&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;any&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token keyword">null</span>
<span class="token function">substringsBetween</span><span class="token punctuation">(</span><span class="token string">&#39;any&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;any&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token keyword">null</span>
<span class="token function">substringsBetween</span><span class="token punctuation">(</span><span class="token string">&#39;any&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;any&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token keyword">null</span>
<span class="token function">substringsBetween</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div>`,2);function g(_,b,h,f,w,y){const a=c("font");return l(),r("div",null,[i,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u5305\u542B\u5B50\u5B57\u7B26\u4E32\u7684\u5B57\u7B26\u4E32,\u53EF\u80FD\u4E3Anull")]),s("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[n("{ string }")]),_:1}),n(" open \u2014 \u6807\u8BC6\u5B50\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u5B57\u7B26\u4E32")]),s("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[n("{ string }")]),_:1}),n(" close \u2014 \u6807\u8BC6\u5B50\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u5B57\u7B26\u4E32")])]),k,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[n("{ string[]|null }")]),_:1}),n(" \u4EE5\u6570\u7EC4\u8FD4\u56DE\u6240\u6709\u5339\u914D\u7684\u5B50\u5B57\u7B26\u4E32,\u672A\u5339\u914D\u8FD4\u56DEnull")])]),d])}var v=o(u,[["render",g]]);export{T as __pageData,v as default};
