import{_ as e,r as c,o as u,c as l,a,b as p,w as t,d as n,e as o}from"./app.103e24fb.js";const v='{"title":"add","description":"","frontmatter":{},"headers":[{"level":2,"title":"add","slug":"add"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"\u6848\u4F8B","slug":"\u6848\u4F8B"}],"relativePath":"ArrayUtils/add.md"}',r={},k=o(`<h2 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-hidden="true">#</a></h2><div class="language-js"><pre><code> add<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> 
</code></pre></div><p>\u6570\u7EC4\u6DFB\u52A0\u5143\u7D20</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>`,4),i=a("h3",{id:"\u8FD4\u56DE\u503C",tabindex:"-1"},[n("\u8FD4\u56DE\u503C "),a("a",{class:"header-anchor",href:"#\u8FD4\u56DE\u503C","aria-hidden":"true"},"#")],-1),d=o(`<h3 id="\u6848\u4F8B" tabindex="-1">\u6848\u4F8B <a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">throw</span> TypeError
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">throw</span> TypeError
</code></pre></div>`,2);function _(m,b,h,f,y,T){const s=c("font");return u(),l("div",null,[k,a("ul",null,[a("li",null,[p(s,{color:"#0eba11"},{default:t(()=>[n("{ array }")]),_:1}),n(" array \u2014 \u5C06\u8981\u6DFB\u52A0\u7684\u6570\u7EC4")]),a("li",null,[p(s,{color:"#0eba11"},{default:t(()=>[n("{ any }")]),_:1}),n(" item \u2014 \u5C06\u8981\u6DFB\u52A0\u7684\u5143\u7D20")]),a("li",null,[p(s,{color:"#0eba11"},{default:t(()=>[n("{ number }")]),_:1}),n(" index \u2014 \u6DFB\u52A0\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u53C2\u6570")])]),i,a("ul",null,[a("li",null,[p(s,{color:"#0eba11"},{default:t(()=>[n("{ array }")]),_:1}),n(" \u8FD4\u56DE\u65B0\u7684\u6570\u7EC4")])]),d])}var x=e(r,[["render",_]]);export{v as __pageData,x as default};
