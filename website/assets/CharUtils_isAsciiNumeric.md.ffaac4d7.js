import{_ as c,r as i,o as p,c as l,a as s,b as e,w as t,d as a,e as o}from"./app.a7d6c65a.js";const T='{"title":"isAsciiNumeric","description":"","frontmatter":{},"headers":[{"level":2,"title":"isAsciiNumeric","slug":"isasciinumeric"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"CharUtils/isAsciiNumeric.md"}',r={},u=o(`<h2 id="isasciinumeric" tabindex="-1">isAsciiNumeric <a class="header-anchor" href="#isasciinumeric" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> <span class="token function">isAsciiNumeric</span><span class="token punctuation">(</span>ch<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> boolean 
</code></pre></div><p>\u68C0\u67E5\u5B57\u7B26\u662F\u5426\u4E3A7\u4F4DASCII\u7801\u4E2D\u7684\u6570\u5B57</p><p>\u8D44\u6599:https://zh.wikipedia.org/wiki/ASCII</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,5),d=s("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[a("\u8FD4\u56DE\u503C "),s("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),k=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">isAsciiNumeric</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isAsciiNumeric</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isAsciiNumeric</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token function">isAsciiNumeric</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isAsciiNumeric</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>  <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token function">isAsciiNumeric</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;copy;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre></div>`,2);function _(h,f,m,A,g,N){const n=i("font");return p(),l("div",null,[u,s("ul",null,[s("li",null,[e(n,{color:"#0eba11"},{default:t(()=>[a("{ string }")]),_:1}),a(" ch \u2014 \u5B57\u7B26")])]),d,s("ul",null,[s("li",null,[e(n,{color:"#0eba11"},{default:t(()=>[a("{ boolean }")]),_:1}),a(" \u5982\u679C\u4ECB\u4E8E48\u548C57\u4E4B\u95F4(\u542B),\u5219\u4E3A\u771F")])]),k])}var v=c(r,[["render",_]]);export{T as __pageData,v as default};
