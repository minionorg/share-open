import{_ as o,r as c,o as l,c as i,a as n,b as t,w as p,d as s,e}from"./app.103e24fb.js";const v='{"title":"isDate","description":"","frontmatter":{},"headers":[{"level":2,"title":"isDate","slug":"isdate"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"DateUtils/isDate.md"}',u={},r=e(`<h2 id="isdate" tabindex="-1">isDate <a class="header-anchor" href="#isdate" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">isDate</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string <span class="token operator">|</span> Date<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;YYYY/MM/DD&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">delimiters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">strictMode</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u6821\u9A8C\u65E5\u671F\u683C\u5F0F\u662F\u5426\u7B26\u5408</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=n("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[s("\u8FD4\u56DE\u503C "),n("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=e(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2014</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2014-03-15&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token string">&#39;2020/02/29&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token string">&#39;15072002&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-30&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token string">&#39;2019-02-29&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token string">&#39;2019-04-31&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token string">&#39;2020/03-15&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre></div>`,2);function _(f,D,b,h,g,m){const a=c("font");return l(),i("div",null,[r,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ string | Date }")]),_:1}),s(" str \u2014 \u5C06\u8981\u6821\u9A8C\u7684\u5B57\u7B26\u4E32")]),n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ string }")]),_:1}),s(" options.format \u2014 \u65E5\u671F\u683C\u5F0F,\u9ED8\u8BA4\u4E3A'YYYY/MM/DD'")]),n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ undefined }")]),_:1}),s(" options.delimiters \u2014 \u65E5\u671F\u683C\u5F0F\u91CC\u9762\u7684\u5206\u9694\u7B26,\u9ED8\u8BA4\u4E3A['/', '-']")]),n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ boolean }")]),_:1}),s(" options.strictMode \u2014 \u662F\u5426\u4E25\u683C\u9075\u5B88\u89C4\u8303,\u9ED8\u8BA4\u4E3Afalse")])]),k,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ boolean }")]),_:1}),s(" \u7B26\u5408\u89C4\u8303\u5219\u8FD4\u56DE\u771F")])]),d])}var y=o(u,[["render",_]]);export{v as __pageData,y as default};
