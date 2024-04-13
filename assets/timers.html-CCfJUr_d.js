import{_ as s,r as e,o as t,c,d as l,a,e as o}from"./app-C4JbmGK9.js";const i={},p=a("h1",{id:"timer-定时器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#timer-定时器"},[a("span",null,"Timer - 定时器")])],-1),d=o(`<p><code>timers</code> 模块暴露了一个全局的 API，用于在某个未来时间段调用一个预定函数。</p><p>由于定时器函数是全局的，因此使用该 API 无需调用 <code>timers.XXXXX</code>。</p><p>Auto.js 中的计时器函数实现了与 Web 浏览器提供的定时器类似的 API，除了它使用了一个不同的内部实现。它是基于 Android Looper-Handler 消息循环机制构建的，其实现机制与 Node.js 近似。</p><p>例如，要在 5 秒后发出消息 &quot;hello&quot;:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，这些定时器仍然是单线程的。如果脚本主体有耗时操作或死循环，则设定的定时器不能被及时执行，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//这里的语句会在15秒后执行而不是5秒后</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//暂停10秒</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//这里的语句永远不会被执行</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//死循环</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setinterval-callback-delay-args" tabindex="-1"><a class="header-anchor" href="#setinterval-callback-delay-args"><span>setInterval(callback, delay[, ...args])</span></a></h2><ul><li><code>callback</code> {Function} 当定时器到点时要调用的函数。</li><li><code>delay</code> {number} 调用 <code>callback</code> 之前要等待的毫秒数。</li><li><code>...args</code> {any} 当调用 <code>callback</code> 时要传入的可选参数。</li></ul><p>预定每隔 <code>delay</code> 毫秒重复执行的 <code>callback</code>。 返回一个用于 <code>clearInterval()</code> 的 ID。</p><p>当 <code>delay</code> 小于 0 时，<code>delay</code> 会被设为 0。</p><h2 id="settimeout-callback-delay-args" tabindex="-1"><a class="header-anchor" href="#settimeout-callback-delay-args"><span>setTimeout(callback, delay[, ...args])</span></a></h2><ul><li><code>callback</code> {Function} 当定时器到点时要调用的函数。</li><li><code>delay</code> {number} 调用 <code>callback</code> 之前要等待的毫秒数。</li><li><code>...args</code> {any} 当调用 <code>callback</code> 时要传入的可选参数。</li></ul><p>预定在 <code>delay</code> 毫秒之后执行的单次 <code>callback</code>。 返回一个用于 <code>clearTimeout()</code> 的 ID。</p><p><code>callback</code> 可能不会精确地在 <code>delay</code> 毫秒被调用。 Auto.js 不能保证回调被触发的确切时间，也不能保证它们的顺序。 回调会在尽可能接近所指定的时间上调用。</p><p>当 <code>delay</code> 小于 0 时，<code>delay</code> 会被设为 0。</p><h2 id="setimmediate-callback-args" tabindex="-1"><a class="header-anchor" href="#setimmediate-callback-args"><span>setImmediate(callback[, ...args])</span></a></h2><ul><li><code>callback</code> {Function} 在 Looper 循环的当前回合结束时要调用的函数。</li><li><code>...args</code> {any} 当调用 <code>callback</code> 时要传入的可选参数。</li></ul><p>预定立即执行的 <code>callback</code>，它是在 I/O 事件的回调之后被触发。 返回一个用于 <code>clearImmediate()</code> 的 ID。</p><p>当多次调用 <code>setImmediate()</code> 时，<code>callback</code> 函数会按照它们被创建的顺序依次执行。 每次事件循环迭代都会处理整个回调队列。 如果一个立即定时器是被一个正在执行的回调排入队列的，则该定时器直到下一次事件循环迭代才会被触发。</p><p><code>setImmediate()</code>、<code>setInterval()</code> 和 <code>setTimeout()</code> 方法每次都会返回表示预定的计时器的 ID。 它们可用于取消定时器并防止触发。</p><h2 id="clearinterval-id" tabindex="-1"><a class="header-anchor" href="#clearinterval-id"><span>clearInterval(id)</span></a></h2><ul><li><code>id</code> {number} 一个 <code>setInterval()</code> 返回的 ID。</li></ul><p>取消一个由 <code>setInterval()</code> 创建的循环定时任务。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//每5秒就发出一次hello</span>
<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//1分钟后取消循环</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cleartimeout-id" tabindex="-1"><a class="header-anchor" href="#cleartimeout-id"><span>clearTimeout(id)</span></a></h2><ul><li><code>id</code> {number} 一个 <code>setTimeout()</code> 返回的 ID。</li></ul><p>取消一个由 <code>setTimeout()</code> 创建的定时任务。</p><h2 id="clearimmediate-id" tabindex="-1"><a class="header-anchor" href="#clearimmediate-id"><span>clearImmediate(id)</span></a></h2><ul><li><code>id</code> {number} 一个 <code>setImmediate()</code> 返回的 ID。</li></ul><p>取消一个由 <code>setImmediate()</code> 创建的 Immediate 对象。</p>`,34);function u(r,m){const n=e("Badge");return t(),c("div",null,[p,l(n,{type:"tip",text:"稳定",vertical:"middle"}),d])}const v=s(i,[["render",u],["__file","timers.html.vue"]]),b=JSON.parse('{"path":"/timers.html","title":"Timer - 定时器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"setInterval(callback, delay[, ...args])","slug":"setinterval-callback-delay-args","link":"#setinterval-callback-delay-args","children":[]},{"level":2,"title":"setTimeout(callback, delay[, ...args])","slug":"settimeout-callback-delay-args","link":"#settimeout-callback-delay-args","children":[]},{"level":2,"title":"setImmediate(callback[, ...args])","slug":"setimmediate-callback-args","link":"#setimmediate-callback-args","children":[]},{"level":2,"title":"clearInterval(id)","slug":"clearinterval-id","link":"#clearinterval-id","children":[]},{"level":2,"title":"clearTimeout(id)","slug":"cleartimeout-id","link":"#cleartimeout-id","children":[]},{"level":2,"title":"clearImmediate(id)","slug":"clearimmediate-id","link":"#clearimmediate-id","children":[]}],"git":{"updatedTime":1713029763000,"contributors":[{"name":"Lin","email":"yditmxpev@mozmail.com","commits":1}]},"filePathRelative":"timers.md"}');export{v as comp,b as data};
