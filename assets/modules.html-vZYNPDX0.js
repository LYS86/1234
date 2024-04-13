import{_ as s,r as a,o as n,c,a as e,b as d,d as t,e as p}from"./app-C4JbmGK9.js";const l={},i={id:"module-模块",tabindex:"-1"},r={class:"header-anchor",href:"#module-模块"},u=p(`<p>AutoX.js 中的 <code>module</code> 模块是一个遵守 CommonJS 规范的模块系统实现，用于在脚本中加载和导出模块。</p><h2 id="exports" tabindex="-1"><a class="header-anchor" href="#exports"><span><code>exports</code></span></a></h2><p><code>exports</code> 是一个空对象，用于将模块内的函数、变量和对象导出为模块的公共接口。可以将需要导出的内容直接赋值给 <code>exports</code> 对象的属性，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 导出 add 函数</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>exports</code> 是 <code>module.exports</code> 的引用，即 <code>exports = module.exports</code>。如果直接给 <code>exports</code> 赋值，相当于断开了 <code>exports</code> 对 <code>module.exports</code> 的引用，导出的就不再是 <code>exports</code> 中定义的内容。换句话说，只能给 <code>exports</code> 添加属性，不能给 <code>exports</code> 赋新值。</li></ul><h2 id="module-exports" tabindex="-1"><a class="header-anchor" href="#module-exports"><span><code>module.exports</code></span></a></h2><p><code>module.exports</code> 属性指定了模块默认导出的对象。当导入一个模块时，实际上是导入该模块的 <code>module.exports</code> 对象。如果希望导出的是一个自定义对象或者函数，可以将其直接赋值给 <code>module.exports</code>，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 导出一个函数</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="require-id" tabindex="-1"><a class="header-anchor" href="#require-id"><span><code>require(id)</code></span></a></h2><p><code>require()</code> 函数用于加载其他模块或 JSON，并返回导出内容。参数 <code>id</code> 是要加载的模块名称或路径，支持相对路径和绝对路径。</p><ul><li><code>id</code> {String}</li></ul><p>当加载模块时，会按以下顺序查找文件，直到找到为止：</p><ol><li>当前目录及其子目录 <code>node_modules</code> 文件夹。</li><li>若未找到，则向上查找，直到到达文件系统的根目录</li><li>若还是找不到，则尝试查找 <code>/node_modules</code> 和 <code>/node_libraries</code> 文件夹。</li><li>如果 <code>id</code> 是内置模块的名称，且不存在同名文件，则直接加载内置模块。例如：<code>let console = require(&#39;__console__&#39;)</code>。Autox.js 还内置了 <code>lodash.js</code> 库。</li></ol><p>如果按确切的文件名没有找到模块，会尝试添加以下拓展名再加载：<code>.js</code>、<code>.json</code>。</p><p>找不到则作为目录解析，尝试加载以下文件：</p><ol><li>该目录下的 <code>package.json</code>，并根据 <code>package.json</code> 文件中的 <code>main</code> 字段加载指定入口点。例如：如果 <code>package.json</code> 中的 <code>main</code> 字段指定为 <code>&#39;src/index.js&#39;</code>，则会加载 <code>id/src/index.js</code>。</li><li>如果 <code>package.json</code> 文件不存在或者 <code>main</code> 字段无效，则会默认加载该目录下的 <code>index.js</code> 文件。</li></ol><p><code>.json</code> 文件被解析为 JSON 文本文件，并返回一个 JavaScript 对象。</p><p>值得注意的是，当存在循环依赖的情况时，可以通过在函数内仅引用需使用的部分进行避免。同时，我们也应该在设计模块之间的依赖时，尽量避免出现循环依赖。</p>`,18);function m(x,k){const o=a("Badge");return n(),c("div",null,[e("h1",i,[e("a",r,[e("span",null,[d("module (模块) "),t(o,{type:"tip",text:"稳定",vertical:"middle"})])])]),u])}const h=s(l,[["render",m],["__file","modules.html.vue"]]),_=JSON.parse('{"path":"/modules.html","title":"module (模块)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"exports","slug":"exports","link":"#exports","children":[]},{"level":2,"title":"module.exports","slug":"module-exports","link":"#module-exports","children":[]},{"level":2,"title":"require(id)","slug":"require-id","link":"#require-id","children":[]}],"git":{"updatedTime":1713029763000,"contributors":[{"name":"Lin","email":"yditmxpev@mozmail.com","commits":1}]},"filePathRelative":"modules.md"}');export{h as comp,_ as data};
