import{_ as p,r as c,o as r,c as l,a as n,b as t,w as e,d as s,e as o}from"./app.a4ee4820.js";const v='{"title":"trimToEmpty","description":"","frontmatter":{},"headers":[{"level":2,"title":"trimToEmpty","slug":"trimtoempty"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/trimToEmpty.md"}',i={},u=o(`<h2 id="trimtoempty" tabindex="-1">trimToEmpty <a class="header-anchor" href="#trimtoempty" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">trimToEmpty</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> string 
</code></pre></div><p>\u79FB\u9664\u5B57\u7B26\u4E32\u524D\u540E\u7A7A\u683C, \u5982\u679Cnull\u8F93\u5165\uFF0C\u5219\u4E3A\u7A7A\u5B57\u7B26\u4E32</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),d=n("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[s("\u8FD4\u56DE\u503C "),n("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),_=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">trimToEmpty</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">trimToEmpty</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">trimToEmpty</span><span class="token punctuation">(</span><span class="token string">&#39;     &#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">trimToEmpty</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token function">trimToEmpty</span><span class="token punctuation">(</span><span class="token string">&#39;    abc    &#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
</code></pre></div>`,2);function k(m,h,T,g,f,y){const a=c("font");return r(),l("div",null,[u,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[s("{ string }")]),_:1}),s(" str \u2014 \u8981\u4FEE\u526A\u7684\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u4E3Anull")])]),d,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[s("{ undefined }")]),_:1}),s(" {string} \u4FEE\u526A\u540E\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\u679Cnull\u8F93\u5165\uFF0C\u5219\u4E3A\u7A7A\u5B57\u7B26\u4E32")])]),_])}var b=p(i,[["render",k]]);export{v as __pageData,b as default};