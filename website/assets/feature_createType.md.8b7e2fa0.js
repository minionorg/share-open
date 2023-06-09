import{_ as o,r as c,o as l,c as r,a as n,b as t,w as e,d as a,e as p}from"./app.103e24fb.js";const v='{"title":"createType","description":"","frontmatter":{},"headers":[{"level":2,"title":"createType","slug":"createtype"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"feature/createType.md"}',u={},i=p(`<h2 id="createtype" tabindex="-1">createType <a class="header-anchor" href="#createtype" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token function">createType</span><span class="token punctuation">(</span>type<span class="token operator">:</span> string<span class="token punctuation">)</span>
</code></pre></div><p>\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u7684\u7C7B\u578B\u5224\u65AD\u51FD\u6570</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=n("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[a("\u8FD4\u56DE\u503C "),n("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=p(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">const</span> isNumber <span class="token operator">=</span> <span class="token function">createType</span><span class="token punctuation">(</span><span class="token string">&#39;Number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isString <span class="token operator">=</span> <span class="token function">createType</span><span class="token punctuation">(</span><span class="token string">&#39;String&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; false</span>

<span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; true</span>

<span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; true</span>

<span class="token function">createType</span><span class="token punctuation">(</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; true</span>
</code></pre></div>`,2);function _(h,f,g,m,T,y){const s=c("font");return l(),r("div",null,[i,n("ul",null,[n("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[a("{ string }")]),_:1}),a(" type \u2014 \u7C7B\u578B")])]),k,n("ul",null,[n("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[a("{ (value: any) => boolean }")]),_:1}),a(" \u8FD4\u56DE\u5BF9\u5E94\u7684\u7C7B\u578B\u5224\u65AD\u51FD\u6570")])]),d])}var N=o(u,[["render",_]]);export{v as __pageData,N as default};