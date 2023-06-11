import{_ as p,r as c,o as i,c as l,a as s,b as o,w as t,d as n,e}from"./app.806518b9.js";const v='{"title":"isAsciiControl","description":"","frontmatter":{},"headers":[{"level":2,"title":"isAsciiControl","slug":"isasciicontrol"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"CharUtils/isAsciiControl.md"}',r={},u=e(`<h2 id="isasciicontrol" tabindex="-1">isAsciiControl <a class="header-anchor" href="#isasciicontrol" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">isAsciiControl</span><span class="token punctuation">(</span>ch<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u68C0\u67E5\u5B57\u7B26\u662F\u5426\u4E3A7\u4F4DASCII\u7801\u4E2D\u7684\u63A7\u5236\u5B57\u7B26\u6216\u901A\u4FE1\u4E13\u7528\u5B57\u7B26</p><p>\u8D44\u6599:https://zh.wikipedia.org/wiki/ASCII</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,5),d=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),k=e(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">isAsciiControl</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isAsciiControl</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isAsciiControl</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isAsciiControl</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
<span class="token function">isAsciiControl</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">true</span>
<span class="token function">isAsciiControl</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;copy;&#39;</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token boolean">false</span>
</code></pre></div>`,2);function _(h,f,A,C,g,b){const a=c("font");return i(),l("div",null,[u,s("ul",null,[s("li",null,[o(a,{color:"#0eba11"},{default:t(()=>[n("{ string }")]),_:1}),n(" ch \u2014 \u8981\u68C0\u67E5\u7684\u5B57\u7B26")])]),d,s("ul",null,[s("li",null,[o(a,{color:"#0eba11"},{default:t(()=>[n("{ boolean }")]),_:1}),n(" \u5982\u679C\u5C0F\u4E8E32\u6216\u7B49\u4E8E127,\u5219\u4E3A\u771F")])]),k])}var m=p(r,[["render",_]]);export{v as __pageData,m as default};
