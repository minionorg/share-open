import{_ as n,o as s,c as a,e as o}from"./app.a7d6c65a.js";const m='{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B"},{"level":3,"title":"\u5B89\u88C5 @minionorg/share","slug":"\u5B89\u88C5-minionorg-share"},{"level":3,"title":"\u4F7F\u7528 @minionorg/share","slug":"\u4F7F\u7528-minionorg-share"}],"relativePath":"guide/quickstart.md"}',t={},e=o(`<h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h2><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 @minionorg/share\u3002\u8BF7\u4E00\u5B9A\u8981\u9605\u8BFB\u5B8C\u624D\u8FDB\u884C\u4F7F\u7528\uFF01</p><h3 id="\u5B89\u88C5-minionorg-share" tabindex="-1">\u5B89\u88C5 @minionorg/share <a class="header-anchor" href="#\u5B89\u88C5-minionorg-share" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @minionorg/share --save-dev
</code></pre></div><h3 id="\u4F7F\u7528-minionorg-share" tabindex="-1">\u4F7F\u7528 @minionorg/share <a class="header-anchor" href="#\u4F7F\u7528-minionorg-share" aria-hidden="true">#</a></h3><h4 id="\u4F7F\u7528es6-module\u6A21\u5F0F" tabindex="-1">\u4F7F\u7528ES6 module\u6A21\u5F0F <a class="header-anchor" href="#\u4F7F\u7528es6-module\u6A21\u5F0F" aria-hidden="true">#</a></h4><p>\u5B8C\u6574\u5F15\u5165</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> share <span class="token keyword">from</span> <span class="token string">&#39;@minionorg/share&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> share <span class="token keyword">from</span> <span class="token string">&#39;@minionorg/share&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6309\u9700\u5F15\u5165</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> NumberUtils <span class="token keyword">from</span> <span class="token string">&#39;@minionorg/share/NumberUtils&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NumberUtils<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> share <span class="token keyword">from</span> <span class="token string">&#39;@minionorg/share/NumberUtils/isInteger&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="\u4F7F\u7528commonjs\u6A21\u5F0F" tabindex="-1">\u4F7F\u7528CommonJs\u6A21\u5F0F <a class="header-anchor" href="#\u4F7F\u7528commonjs\u6A21\u5F0F" aria-hidden="true">#</a></h4><p>\u5B8C\u6574\u5F15\u5165</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> share <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@minionorg/share/index.es.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6309\u9700\u5F15\u5165</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> NumberUtils <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@minionorg/share/NumberUtils/index.es.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>NumberUtils<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token keyword">const</span> isInteger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@minionorg/share/NumberUtils/isInteger/index.es.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,15),p=[e];function c(i,r,l,u,k,d){return s(),a("div",null,p)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
