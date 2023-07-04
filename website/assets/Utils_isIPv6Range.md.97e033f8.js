import{_ as o,r as c,o as l,c as i,a as n,b as t,w as e,d as s,e as p}from"./app.a7d6c65a.js";const R='{"title":"isIPv6Range","description":"","frontmatter":{},"headers":[{"level":2,"title":"isIPv6Range","slug":"isipv6range"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"Utils/isIPv6Range.md"}',r={},u=p(`<h2 id="isipv6range" tabindex="-1">isIPv6Range <a class="header-anchor" href="#isipv6range" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">isIPv6Range</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u5728IPv6\u8303\u56F4\u5185</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=n("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[s("\u8FD4\u56DE\u503C "),n("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),f=p(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;::1/1&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;2001:db8:0000:1:1:1:1:1/1&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;::ffff:127.0.0.1/1&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;255.255.255.255&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;1.2.3.4&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;::ffff:287.0.0.1&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;::ffff:287.0.0.1/254&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;fe80::1234%&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;fe80::1234%1%3%4&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isIPv6Range</span><span class="token punctuation">(</span><span class="token string">&#39;fe80%fe80%&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
</code></pre></div>`,2);function g(d,_,v,h,P,b){const a=c("font");return l(),i("div",null,[u,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[s("{ string }")]),_:1}),s(" str \u2014 \u5C06\u8981\u5339\u914D\u7684\u5B57\u7B26\u4E32")])]),k,n("ul",null,[n("li",null,[t(a,{color:"#0eba11"},{default:e(()=>[s("{ boolean }")]),_:1}),s(" \u662F\u5426\u5339\u914D")])]),f])}var T=o(r,[["render",g]]);export{R as __pageData,T as default};