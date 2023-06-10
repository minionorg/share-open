import{_ as e,r as l,o as r,c,a as s,b as p,w as t,d as n,e as o}from"./app.33b585d4.js";const v='{"title":"isFloat","description":"","frontmatter":{},"headers":[{"level":2,"title":"isFloat","slug":"isfloat"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"NumberUtils/isFloat.md"}',u={},i=o(`<h2 id="isfloat" tabindex="-1">isFloat <a class="header-anchor" href="#isfloat" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">isFloat</span><span class="token punctuation">(</span>str<span class="token operator">:</span> string<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> number<span class="token punctuation">;</span> max<span class="token operator">:</span> number<span class="token punctuation">;</span> lt<span class="token operator">:</span> number<span class="token punctuation">;</span> gt<span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u6D6E\u70B9\u578B\u6570\u5B57</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),k=s("a",{href:"http://options.gt",target:"_blank",rel:"noopener noreferrer"},"options.gt",-1),_=s("a",{href:"http://options.lt",target:"_blank",rel:"noopener noreferrer"},"options.lt",-1),b=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;123.123&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;3.888&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span><span class="token number">3.7</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;3.92&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span><span class="token number">3.7</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;0.1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span><span class="token number">0.1</span><span class="token punctuation">,</span><span class="token literal-property property">max</span><span class="token operator">:</span><span class="token number">1.0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span><span class="token number">0.1</span><span class="token punctuation">,</span><span class="token literal-property property">max</span><span class="token operator">:</span><span class="token number">1.0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;9.9&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">gt</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">5.5</span><span class="token punctuation">,</span><span class="token literal-property property">lt</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">gt</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">5.5</span><span class="token punctuation">,</span><span class="token literal-property property">lt</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;9.99999&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">5.5</span><span class="token punctuation">,</span><span class="token literal-property property">max</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token literal-property property">gt</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">5.5</span><span class="token punctuation">,</span><span class="token literal-property property">lt</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isFloat</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">5.5</span><span class="token punctuation">,</span><span class="token literal-property property">max</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token literal-property property">gt</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">5.5</span><span class="token punctuation">,</span><span class="token literal-property property">lt</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
</code></pre></div>`,2);function m(f,y,h,g,F,x){const a=l("font");return r(),c("div",null,[i,s("ul",null,[s("li",null,[p(a,{color:"#0eba11"},{default:t(()=>[n("{ string }")]),_:1}),n(" str \u2014 \u5C06\u8981\u68C0\u67E5\u7684\u5B57\u7B26\u4E32")]),s("li",null,[p(a,{color:"#0eba11"},{default:t(()=>[n("{ number }")]),_:1}),n(" options.min \u2014 \u5927\u4E8E\u6216\u7B49\u4E8E\u6700\u5C0F\u503C")]),s("li",null,[p(a,{color:"#0eba11"},{default:t(()=>[n("{ number }")]),_:1}),n(" options.max \u2014 \u5C0F\u4E8E\u6216\u7B49\u4E8E\u6700\u5927\u503C")]),s("li",null,[p(a,{color:"#0eba11"},{default:t(()=>[n("{ number }")]),_:1}),n(),k,n(" \u2014 \u5927\u4E8E\u6700\u5C0F\u503C")]),s("li",null,[p(a,{color:"#0eba11"},{default:t(()=>[n("{ number }")]),_:1}),n(),_,n(" \u2014 \u5C0F\u4E8E\u6700\u5927\u503C")])]),b,s("ul",null,[s("li",null,[p(a,{color:"#0eba11"},{default:t(()=>[n("{ boolean }")]),_:1}),n(" \u662F\u5426\u7B26\u5408")])]),d])}var V=e(u,[["render",m]]);export{v as __pageData,V as default};
