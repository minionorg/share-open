import{_ as e,r as c,o as i,c as l,a as n,b as t,w as p,d as s,e as o}from"./app.a4ee4820.js";const M='{"title":"wrapIfMissing","description":"","frontmatter":{},"headers":[{"level":2,"title":"wrapIfMissing","slug":"wrapifmissing"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/wrapIfMissing.md"}',r={},u=o(`<h2 id="wrapifmissing" tabindex="-1">wrapIfMissing <a class="header-anchor" href="#wrapifmissing" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">wrapIfMissing</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">wrapWith</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> string 
</code></pre></div><p>\u5982\u679C\u7ED9\u5B9A\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u6216\u7ED3\u5C3E\u7F3A\u5C11\u5B57\u7B26\u4E32\uFF0C\u5219\u7528\u5B57\u7B26\u4E32\u5305\u88F9\u8BE5\u5B57\u7B26\u4E32</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=n("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[s("\u8FD4\u56DE\u503C "),n("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),g=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;any&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;any&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;ab&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;xabx&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&quot;ab&quot;&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;&quot;ab&quot;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&quot;ab&quot;&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;&#39;ab&#39;&quot;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;abcd&#39;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&quot;&#39;abcd&#39;&quot;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;&quot;abcd&quot;&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;\\&#39;&quot;abcd&quot;\\&#39;&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;abcd&#39;&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;&quot;\\&#39;abcd\\&#39;&quot;&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;a/b/c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;/a/b/c/&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;/a/b/c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;/a/b/c/&#39;</span>
<span class="token function">wrapIfMissing</span><span class="token punctuation">(</span><span class="token string">&#39;a/b/c/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">&#39;/a/b/c/&#39;</span>
</code></pre></div>`,2);function d(f,_,h,b,w,q){const a=c("font");return i(),l("div",null,[u,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ string }")]),_:1}),s(" str \u2014 \u8981\u5305\u88C5\u7684\u5B57\u7B26\u4E32\u53EF\u4EE5\u662Fnull")]),n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ string }")]),_:1}),s(" wrapWith \u2014 \u5C06\u5305\u88C5\u7684\u5B57\u7B26")])]),k,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ string }")]),_:1}),s(" \u5305\u88F9\u540E\u7684\u5B57\u7B26\u4E32")])]),g])}var T=e(r,[["render",d]]);export{M as __pageData,T as default};
