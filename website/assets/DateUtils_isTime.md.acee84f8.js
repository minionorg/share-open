import{_ as e,r as c,o as l,c as r,a as n,b as t,w as p,d as s,e as o}from"./app.103e24fb.js";const v='{"title":"isTime","description":"","frontmatter":{},"headers":[{"level":2,"title":"isTime","slug":"istime"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"DateUtils/isTime.md"}',i={},u=o(`<h2 id="istime" tabindex="-1">isTime <a class="header-anchor" href="#istime" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">isTime</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;HH:MM:SS&#39;</span><span class="token punctuation">;</span> mode<span class="token operator">:</span> <span class="token number">24</span> <span class="token operator">|</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u6821\u9A8C\u65F6\u95F4\u683C\u5F0F</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=n("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[s("\u8FD4\u56DE\u503C "),n("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;00:00:00&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;23:59:03&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;9:00:12&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;00:00&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;HH:MM&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;23:59&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;HH:MM&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;9:00&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;HH:MM&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;12:59:59 PM&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isTime</span><span class="token punctuation">(</span><span class="token string">&#39;2:34:45 AM&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre></div>`,2);function _(m,f,h,T,g,b){const a=c("font");return l(),r("div",null,[u,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ string }")]),_:1}),s(" str \u2014 \u6821\u9A8C\u7684\u5B57\u7B26\u4E32")]),n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ string }")]),_:1}),s(" options.format \u2014 \u6821\u9A8C\u683C\u5F0F")]),n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ mode }")]),_:1}),s(" options.mode \u2014 12\u5C0F\u65F6\u5236\u8FD8\u662F24\u5C0F\u65F6\u5236")])]),k,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:p(()=>[s("{ boolean }")]),_:1}),s(" \u7B26\u5408\u5219\u4E3A\u771F")])]),d])}var M=e(i,[["render",_]]);export{v as __pageData,M as default};
