import{_ as o,r as l,o as c,c as u,a as s,b as t,w as e,d as n,e as p}from"./app.806518b9.js";const T='{"title":"equalsAny","description":"","frontmatter":{},"headers":[{"level":2,"title":"equalsAny","slug":"equalsany"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/equalsAny.md"}',r={},i=p(`<h2 id="equalsany" tabindex="-1">equalsAny <a class="header-anchor" href="#equalsany" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">equalsAny</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>searchStrings<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u6BD4\u8F83\u5B57\u7B26\u4E32,\u662F\u5426\u4E0E\u540E\u9762\u5176\u4E2D\u4E00\u4E2A\u53C2\u6570\u76F8\u540C</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=p(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">equalsAny</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">equalsAny</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">equalsAny</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">equalsAny</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">equalsAny</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">equalsAny</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;DEF&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">equalsAny</span><span class="token punctuation">(</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;DEF&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
</code></pre></div>`,2);function _(h,f,g,b,y,A){const a=l("font");return c(),u("div",null,[i,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u4E32")]),s("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[n("{ ...string[] }")]),_:1}),n(" searchStrings \u2014 \u5C06\u8981\u5339\u914D\u7684\u5B57\u7B26\u4E32\u53C2\u6570\u96C6\u5408")])]),k,s("ul",null,[s("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[n("{ boolean }")]),_:1}),n(" \u5339\u914D\u5168\u7B49\u6210\u529F")])]),d])}var v=o(r,[["render",_]]);export{T as __pageData,v as default};
