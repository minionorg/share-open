import{_ as e,r as l,o as c,c as u,a as s,b as t,w as p,d as n,e as o}from"./app.103e24fb.js";const T='{"title":"stripAll","description":"","frontmatter":{},"headers":[{"level":2,"title":"stripAll","slug":"stripall"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/stripAll.md"}',i={},r=o(`<h2 id="stripall" tabindex="-1">stripAll <a class="header-anchor" href="#stripall" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">stripAll</span><span class="token punctuation">(</span>strs<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">stripChars</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> 
</code></pre></div><p>\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5B57\u7B26\u4E32\u5143\u7D20\u7684\u5F00\u5934\u548C\u7ED3\u5C3E\u53BB\u9664\u4E00\u7EC4\u5B57\u7B26\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">stripAll</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">stripAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token function">stripAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;  abc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span>
<span class="token function">stripAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;abc  &#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
<span class="token function">stripAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;abc  &#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;yz&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;abc  &#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
<span class="token function">stripAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;yabcz&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;yz&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
</code></pre></div>`,2);function _(h,g,f,b,A,y){const a=l("font");return c(),u("div",null,[r,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ undefined }")]),_:1}),n(" strs \u2014 \u8981\u4ECE\u4E2D\u5220\u9664\u5B57\u7B26\u7684\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4E3A null")]),s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ string }")]),_:1}),n(" stripChars \u2014 \u8981\u5220\u9664\u7684\u5B57\u7B26\uFF0C\u9ED8\u8BA4\u4E3Anull\uFF0Cnull \u88AB\u89C6\u4E3A\u7A7A\u683C")])]),k,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ undefined }")]),_:1}),n(" {string[]} \u5220\u9664\u540E\u7684\u6570\u7EC4")])]),d])}var v=e(i,[["render",_]]);export{T as __pageData,v as default};
