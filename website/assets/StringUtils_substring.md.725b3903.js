import{_ as o,r as c,o as l,c as r,a as s,b as t,w as p,d as n,e}from"./app.103e24fb.js";const x='{"title":"substring","description":"","frontmatter":{},"headers":[{"level":2,"title":"substring","slug":"substring"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/substring.md"}',u={},i=e(`<h2 id="substring" tabindex="-1">substring <a class="header-anchor" href="#substring" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">substring</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span> string 
</code></pre></div><p>\u4ECE\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u4E2D\u83B7\u53D6\u4E00\u4E2A\u5B50\u4E32\uFF0C\u907F\u514D\u51FA\u73B0\u5F02\u5E38</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),b=e(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;ab&#39;</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span>
<span class="token function">substring</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;ab&#39;</span>
</code></pre></div>`,2);function d(g,_,h,m,f,T){const a=c("font");return l(),r("div",null,[i,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u4ECE\u5B57\u7B26\u4E32\u4E2D\u83B7\u53D6\u5B50\u5B57\u7B26\u4E32\uFF0C\u53EF\u80FD\u4E3Anull")]),s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ number }")]),_:1}),n(" start \u2014 \u5F00\u59CB\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u8D1F\u6570\u8868\u793A\u4ECE\u5B57\u7B26\u4E32\u672B\u5C3E\u5F00\u59CB\u5012\u6570\u52A0\u4E0A\u5B57\u7B26\u4E32\u957F\u5EA6")]),s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ number }")]),_:1}),n(" end \u2014 \u7ED3\u675F\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A0\uFF0C\u8D1F\u6570\u8868\u793A\u4ECE\u5B57\u7B26\u4E32\u672B\u5C3E\u5F00\u59CB\u5012\u6570\u52A0\u4E0A\u5B57\u7B26\u4E32\u957F\u5EA6")])]),k,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ string }")]),_:1}),n(" \u6839\u636E\u5F00\u59CB\u548C\u7ED3\u675F\u4F4D\u7F6E\u83B7\u53D6\u5B57\u7B26\u4E32\uFF0C\u53EF\u80FD\u8FD4\u56DEnull")])]),b])}var S=o(u,[["render",d]]);export{x as __pageData,S as default};
