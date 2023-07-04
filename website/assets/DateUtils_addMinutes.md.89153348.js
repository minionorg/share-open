import{_ as o,r as c,o as l,c as u,a,b as t,w as e,d as n,e as p}from"./app.a7d6c65a.js";const v='{"title":"addMinutes","description":"","frontmatter":{},"headers":[{"level":2,"title":"addMinutes","slug":"addminutes"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"DateUtils/addMinutes.md"}',i={},r=p(`<h2 id="addminutes" tabindex="-1">addMinutes <a class="header-anchor" href="#addminutes" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">addMinutes</span><span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">,</span> <span class="token literal-property property">number</span><span class="token operator">:</span> number <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Date 
</code></pre></div><p>\u65E5\u671F\u6DFB\u52A0\u5206\u949F</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),d=a("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),a("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),k=p(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>constdate<span class="token operator">=</span><span class="token function">newDate</span><span class="token punctuation">(</span><span class="token string">&#39;2023-06-01T12:00:00&#39;</span><span class="token punctuation">)</span>
<span class="token function">addMinutes</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token function">newDate</span><span class="token punctuation">(</span><span class="token string">&#39;2023-06-01T12:30:00&#39;</span><span class="token punctuation">)</span>
<span class="token function">addMinutes</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token function">newDate</span><span class="token punctuation">(</span><span class="token string">&#39;2023-06-01T11:45:00&#39;</span><span class="token punctuation">)</span>
<span class="token function">addMinutes</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token function">newDate</span><span class="token punctuation">(</span><span class="token string">&#39;2023-06-01T12:00:00&#39;</span><span class="token punctuation">)</span>
<span class="token function">addMinutes</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span><span class="token string">&#39;45&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token function">newDate</span><span class="token punctuation">(</span><span class="token string">&#39;2023-06-01T12:45:00&#39;</span><span class="token punctuation">)</span>
<span class="token function">addMinutes</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span><span class="token string">&#39;-10&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token function">newDate</span><span class="token punctuation">(</span><span class="token string">&#39;2023-06-01T11:50:00&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,2);function _(h,f,g,T,m,b){const s=c("font");return l(),u("div",null,[r,a("ul",null,[a("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[n("{ Date }")]),_:1}),n(" date \u2014 \u65E5\u671F")]),a("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[n("{ number|string }")]),_:1}),n(" number \u2014 \u5206\u949F\u6570")])]),d,a("ul",null,[a("li",null,[t(s,{color:"#0eba11"},{default:e(()=>[n("{ Date }")]),_:1}),n(" \u7ECF\u8FC7\u5206\u949F\u540E\u7684\u65E5\u671F")])]),k])}var M=o(i,[["render",_]]);export{v as __pageData,M as default};