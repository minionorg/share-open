import{_ as o,r as c,o as l,c as r,a as s,b as e,w as t,d as n,e as p}from"./app.103e24fb.js";const C='{"title":"upperCase","description":"","frontmatter":{},"headers":[{"level":2,"title":"upperCase","slug":"uppercase"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"string/upperCase.md"}',u={},i=p(`<h2 id="uppercase" tabindex="-1">upperCase <a class="header-anchor" href="#uppercase" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token function">upperCase</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> string
</code></pre></div><p>\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u957F\u5EA6</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),d=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),_=p(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u83B7\u53D6\u82F1\u6587\u957F\u5EA6</span>
<span class="token function">getStrLength</span><span class="token punctuation">(</span><span class="token string">&#39;abcd&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 4</span>

<span class="token comment">// \u83B7\u53D6\u4E2D\u6587\u957F\u5EA6</span>
<span class="token function">getStrLength</span><span class="token punctuation">(</span><span class="token string">&#39;\u83B7\u53D6\u4E2D\u6587\u957F\u5EA6&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 12</span>

<span class="token comment">// \u83B7\u53D6\u4E2D\u82F1\u6587\u957F\u5EA6\u4E14\u533A\u5206\u4E2D\u6587\u7684\u65F6\u5019</span>
<span class="token function">getStrLength</span><span class="token punctuation">(</span><span class="token string">&#39;\u83B7\u53D6\u4E2D\u82F1abcd\u6587\u957F\u5EA6&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 18</span>

<span class="token comment">// \u83B7\u53D6\u4E2D\u82F1\u6587\u957F\u5EA6\u4E14\u4E0D\u533A\u5206\u4E2D\u6587\u7684\u65F6\u5019</span>
<span class="token function">getStrLength</span><span class="token punctuation">(</span><span class="token string">&#39;\u83B7\u53D6\u4E2D\u82F1abcd\u6587\u957F\u5EA6&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 11</span>

<span class="token comment">// \u8BBE\u7F6E\u5B57\u8282</span>
<span class="token function">getStrLength</span><span class="token punctuation">(</span><span class="token string">&#39;\u83B7\u53D6\u4E2D\u6587\u957F\u5EA6&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 18</span>
</code></pre></div>`,2);function k(h,g,m,f,b,T){const a=c("font");return l(),r("div",null,[i,s("ul",null,[s("li",null,[e(a,{color:"#0eba11"},{default:t(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u5B57\u7B26\u4E32")]),s("li",null,[e(a,{color:"#0eba11"},{default:t(()=>[n("{ boolean }")]),_:1}),n(" [diff=false] \u2014 \u662F\u5426\u533A\u5206\u82F1\u6587\u548C\u975E\u82F1\u6587\u5B57\u7B26\u957F\u5EA6")]),s("li",null,[e(a,{color:"#0eba11"},{default:t(()=>[n("{ number }")]),_:1}),n(" [byte=2] \u2014 \u975E\u82F1\u6587\u5360\u7684\u5B57\u8282")])]),d,s("ul",null,[s("li",null,[e(a,{color:"#0eba11"},{default:t(()=>[n("{ string }")]),_:1}),n(" \u76EE\u6807\u5B57\u7B26\u4E32\u957F\u5EA6")])]),_])}var S=o(u,[["render",k]]);export{C as __pageData,S as default};
