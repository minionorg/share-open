import{_ as p,r as l,o as c,c as r,a as s,b as e,w as t,d as n,e as o}from"./app.806518b9.js";const I='{"title":"equalsAnyIgnoreCase","description":"","frontmatter":{},"headers":[{"level":2,"title":"equalsAnyIgnoreCase","slug":"equalsanyignorecase"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"StringUtils/equalsAnyIgnoreCase.md"}',u={},i=o(`<h2 id="equalsanyignorecase" tabindex="-1">equalsAnyIgnoreCase <a class="header-anchor" href="#equalsanyignorecase" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">equalsAnyIgnoreCase</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>searchStrings<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u6BD4\u8F83\u5B57\u7B26\u4E32,\u662F\u5426\u4E0E\u540E\u9762\u5176\u4E2D\u4E00\u4E2A\u53C2\u6570\u76F8\u540C(\u5FFD\u7565\u5927\u5C0F\u5199)</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">equalsAnyIgnoreCase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">equalsAnyIgnoreCase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">equalsAnyIgnoreCase</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">equalsAnyIgnoreCase</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">equalsAnyIgnoreCase</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;def&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">equalsAnyIgnoreCase</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ABC&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;DEF&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
</code></pre></div>`,2);function _(g,h,f,b,y,A){const a=l("font");return c(),r("div",null,[i,s("ul",null,[s("li",null,[e(a,{color:"#0eba11"},{default:t(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u8981\u6BD4\u8F83\u7684\u5B57\u7B26\u4E32")]),s("li",null,[e(a,{color:"#0eba11"},{default:t(()=>[n("{ ...string[] }")]),_:1}),n(" searchStrings \u2014 \u5C06\u8981\u5339\u914D\u7684\u5B57\u7B26\u4E32\u53C2\u6570\u96C6\u5408")])]),k,s("ul",null,[s("li",null,[e(a,{color:"#0eba11"},{default:t(()=>[n("{ boolean }")]),_:1}),n(" \u5339\u914D\u6210\u529F")])]),d])}var q=p(u,[["render",_]]);export{I as __pageData,q as default};
