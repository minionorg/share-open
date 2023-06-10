import{_ as e,r as c,o as l,c as r,a as s,b as t,w as p,d as n,e as o}from"./app.33b585d4.js";const T='{"title":"stripEnd","description":"","frontmatter":{},"headers":[{"level":2,"title":"stripEnd","slug":"stripend"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/stripEnd.md"}',i={},u=o(`<h2 id="stripend" tabindex="-1">stripEnd <a class="header-anchor" href="#stripend" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">stripEnd</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">stripChars</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> string 
</code></pre></div><p>\u4ECE\u5B57\u7B26\u4E32\u7684\u7ED3\u5C3E\u53BB\u9664\u4E00\u7EC4\u5B57\u7B26\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token keyword">null</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;abc&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;abc&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;abc&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;abc&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;abc&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;yxabc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;xyz&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;yxabc&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;abcyx&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;xyz&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;abc&#39;</span>
<span class="token function">stripEnd</span><span class="token punctuation">(</span><span class="token string">&#39;120.00&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;.0&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;12&#39;</span>
</code></pre></div>`,2);function _(g,h,f,b,E,x){const a=c("font");return l(),r("div",null,[u,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u8981\u4ECE\u4E2D\u5220\u9664\u5B57\u7B26\u7684\u5B57\u7B26\u4E32,\u53EF\u4EE5\u4E3Anull")]),s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ string }")]),_:1}),n(" stripChars \u2014 \u8981\u5220\u9664\u7684\u5B57\u7B26,\u9ED8\u8BA4\u4E3Anull")])]),k,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[n("{ string }")]),_:1}),n(" \u5265\u79BB\u7684\u5B57\u7B26\u4E32")])]),d])}var v=e(i,[["render",_]]);export{T as __pageData,v as default};