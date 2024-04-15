import{_ as s,r as a,o as t,c,d as o,a as e,e as i}from"./app-C8L7wkMX.js";const d={},l=e("h1",{id:"base64-编码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base64-编码"},[e("span",null,"Base64 编码")])],-1),p=i(`<p>提供基本的 Base64 转换函数。</p><h2 id="base64-encode-str-encoding-utf-8" tabindex="-1"><a class="header-anchor" href="#base64-encode-str-encoding-utf-8"><span>$base64.encode(str[, encoding = &#39;utf-8&#39;])</span></a></h2><ul><li><code>str</code> {string} 要编码的字符串</li><li><code>encoding</code> {string} 可选，字符编码</li></ul><p>将字符串使用 Base64 编码并返回编码后的字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span>$base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;autox.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 日志输出 YXV0b3guanM=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="base64-decode-str-encoding-utf-8" tabindex="-1"><a class="header-anchor" href="#base64-decode-str-encoding-utf-8"><span>$base64.decode(str[, encoding = &#39;utf-8&#39;])</span></a></h2><ul><li><code>str</code> {string} 要解码的字符串</li><li><code>encoding</code> {string} 可选，字符编码</li></ul><p>将字符串使用 Base64 解码并返回解码后的字符串。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span>$base64<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token string">&quot;YXV0b3guanM=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 日志输出 autox.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function u(r,g){const n=a("Badge");return t(),c("div",null,[l,o(n,{type:"tip",text:"稳定",vertical:"middle"}),p])}const b=s(d,[["render",u],["__file","base64.html.vue"]]),h=JSON.parse(`{"path":"/base64.html","title":"Base64 编码","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"$base64.encode(str[, encoding = 'utf-8'])","slug":"base64-encode-str-encoding-utf-8","link":"#base64-encode-str-encoding-utf-8","children":[]},{"level":2,"title":"$base64.decode(str[, encoding = 'utf-8'])","slug":"base64-decode-str-encoding-utf-8","link":"#base64-decode-str-encoding-utf-8","children":[]}],"git":{"updatedTime":1713029763000,"contributors":[{"name":"Lin","email":"yditmxpev@mozmail.com","commits":1}]},"filePathRelative":"base64.md"}`);export{b as comp,h as data};