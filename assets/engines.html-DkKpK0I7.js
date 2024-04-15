import{_ as t,r as i,o as p,c,d as a,a as n,e}from"./app-C8L7wkMX.js";const o={},l=n("h1",{id:"脚本引擎-engines",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#脚本引擎-engines"},[n("span",null,"脚本引擎-engines")])],-1),u=e(`<p>engines 模块包含了一些与脚本环境、脚本运行、脚本引擎有关的函数，包括运行其他脚本，关闭脚本等。</p><p>例如，获取脚本所在目录：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">toast</span><span class="token punctuation">(</span>engines<span class="token punctuation">.</span><span class="token function">myEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="engines-execscript-name-script-config" tabindex="-1"><a class="header-anchor" href="#engines-execscript-name-script-config"><span>engines.execScript(name, script[, config])</span></a></h2><ul><li><code>name</code> {string} 要运行的脚本名称。这个名称和文件名称无关，只是在任务管理中显示的名称。</li><li><code>script</code> {string} 要运行的脚本内容。</li><li><code>config</code> {Object} 运行配置项 <ul><li><code>delay</code> {number} 延迟执行的毫秒数，默认为 0</li><li><code>loopTimes</code> {number} 循环运行次数，默认为 1。0 为无限循环。</li><li><code>interval</code> {number} 循环运行时两次运行之间的时间间隔，默认为 0</li><li><code>path</code> {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。</li></ul></li></ul><p>在新的脚本环境中运行脚本 script。返回一个<a href="#scriptexecution">ScriptExecution</a>对象。</p><p>所谓新的脚本环境，指定是，脚本中的变量和原脚本的变量是不共享的，并且，脚本会在新的线程中运行。</p><p>最简单的例子如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>engines<span class="token punctuation">.</span><span class="token function">execScript</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;toast(&#39;hello world&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要循环运行，则：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//每隔 3 秒运行一次脚本，循环 10 次</span>
engines<span class="token punctuation">.</span><span class="token function">execScript</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;toast(&#39;hello world&#39;)&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loopTimes</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用字符串来编写脚本非常不方便，可以结合 <code>Function.toString()</code>的方法来执行特定函数:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//注意，这里的变量和脚本主体的变量并不共享</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
engines<span class="token punctuation">.</span><span class="token function">execScript</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;helloWorld();\\n&quot;</span> <span class="token operator">+</span> helloWorld<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要传递变量，则可以把这些封装成一个函数：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token parameter">action<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  args <span class="token operator">=</span> args <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  engines<span class="token punctuation">.</span><span class="token function">execScript</span><span class="token punctuation">(</span>
    action<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    action <span class="token operator">+</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;);\\n&quot;</span> <span class="token operator">+</span> action<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//要执行的函数，是一个简单的加法</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>a <span class="token operator">+</span> args<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//在新的脚本环境中执行 1 + 2</span>
<span class="token function">exec</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="engines-execscriptfile-path-config" tabindex="-1"><a class="header-anchor" href="#engines-execscriptfile-path-config"><span>engines.execScriptFile(path[, config])</span></a></h2><ul><li><code>path</code> {string} 要运行的脚本路径。</li><li><code>config</code> {Object} 运行配置项 <ul><li><code>delay</code> {number} 延迟执行的毫秒数，默认为 0</li><li><code>loopTimes</code> {number} 循环运行次数，默认为 1。0 为无限循环。</li><li><code>interval</code> {number} 循环运行时两次运行之间的时间间隔，默认为 0</li><li><code>path</code> {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。</li></ul></li></ul><p>在新的脚本环境中运行脚本文件 path。返回一个<a href="#scriptexecution">ScriptExecution</a>对象。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>engines<span class="token punctuation">.</span><span class="token function">execScriptFile</span><span class="token punctuation">(</span><span class="token string">&quot;/sdcard/脚本/1.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="engines-execautofile-path-config" tabindex="-1"><a class="header-anchor" href="#engines-execautofile-path-config"><span>engines.execAutoFile(path[, config])</span></a></h2><ul><li><code>path</code> {string} 要运行的录制文件路径。</li><li><code>config</code> {Object} 运行配置项 <ul><li><code>delay</code> {number} 延迟执行的毫秒数，默认为 0</li><li><code>loopTimes</code> {number} 循环运行次数，默认为 1。0 为无限循环。</li><li><code>interval</code> {number} 循环运行时两次运行之间的时间间隔，默认为 0</li><li><code>path</code> {Array} | {string} 指定脚本运行的目录。这些路径会用于 require 时寻找模块文件。</li></ul></li><li><code>return</code> {<a href="#scriptexecution">ScriptExecution</a>}</li></ul><p>在新的脚本环境中运行录制文件 path。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>engines<span class="token punctuation">.</span><span class="token function">execAutoFile</span><span class="token punctuation">(</span><span class="token string">&quot;/sdcard/脚本/1.auto&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="engines-stopall" tabindex="-1"><a class="header-anchor" href="#engines-stopall"><span>engines.stopAll()</span></a></h2><p>停止所有正在运行的脚本。包括当前脚本自身。</p><h2 id="engines-stopallandtoast" tabindex="-1"><a class="header-anchor" href="#engines-stopallandtoast"><span>engines.stopAllAndToast()</span></a></h2><p>停止所有正在运行的脚本并显示停止的脚本数量。包括当前脚本自身。</p><h2 id="engines-myengine" tabindex="-1"><a class="header-anchor" href="#engines-myengine"><span>engines.myEngine()</span></a></h2>`,28),r=e(`<ul><li><code>return</code> {<a href="#scriptengine">ScriptEngine</a>}</li></ul><p>返回当前脚本的脚本引擎对象。</p><p>特别的，该对象可以通过<code>execArgv</code>来获取他的运行参数，包括外部参数、intent 等。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span>engines<span class="token punctuation">.</span><span class="token function">myEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>execArgv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>普通脚本的运行参数通常为空，通过定时任务的广播启动的则可以获取到启动的 intent。</p><h2 id="engines-all" tabindex="-1"><a class="header-anchor" href="#engines-all"><span>engines.all()</span></a></h2><ul><li><code>return</code> {Array}</li></ul><p>返回当前所有正在运行的脚本的脚本引擎<a href="#scriptengine">ScriptEngine</a>的数组。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span>engines<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="scriptexecution" tabindex="-1"><a class="header-anchor" href="#scriptexecution"><span>ScriptExecution</span></a></h1><p>执行脚本时返回的对象，可以通过他获取执行的引擎、配置等，也可以停止这个执行。</p><p>要停止这个脚本的执行，使用<code>exectuion.getEngine().forceStop()</code>.</p><h2 id="scriptexecution-getengine" tabindex="-1"><a class="header-anchor" href="#scriptexecution-getengine"><span>ScriptExecution.getEngine()</span></a></h2><p>返回执行该脚本的脚本引擎对象(<a href="#scriptengine">ScriptEngine</a>)</p><h2 id="scriptexecution-getconfig" tabindex="-1"><a class="header-anchor" href="#scriptexecution-getconfig"><span>ScriptExecution.getConfig()</span></a></h2><p>返回该脚本的运行配置(<a href="#scriptconfig">ScriptConfig</a>)</p><h1 id="scriptengine" tabindex="-1"><a class="header-anchor" href="#scriptengine"><span>ScriptEngine</span></a></h1><p>脚本引擎对象。</p><h2 id="scriptengine-isdestroyed" tabindex="-1"><a class="header-anchor" href="#scriptengine-isdestroyed"><span>ScriptEngine.isDestroyed()</span></a></h2><ul><li>返回 {Boolean}</li></ul><p>检测该脚本是否执行结束</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> e <span class="token operator">=</span> engines<span class="token punctuation">.</span><span class="token function">execScriptFile</span><span class="token punctuation">(</span><span class="token string">&quot;xx.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDestroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scriptengine-forcestop" tabindex="-1"><a class="header-anchor" href="#scriptengine-forcestop"><span>ScriptEngine.forceStop()</span></a></h2><p>停止脚本引擎的执行。</p><h2 id="scriptengine-cwd" tabindex="-1"><a class="header-anchor" href="#scriptengine-cwd"><span>ScriptEngine.cwd()</span></a></h2><ul><li><code>return</code> {string}</li></ul><p>返回脚本执行的路径。对于一个脚本文件而言为这个脚本所在的文件夹；对于其他脚本，例如字符串脚本，则为<code>null</code>或者执行时的设置值。</p><h2 id="scriptengine-getsource" tabindex="-1"><a class="header-anchor" href="#scriptengine-getsource"><span>ScriptEngine.getSource()</span></a></h2><ul><li><code>return</code> <a href="#scriptsource">ScriptSource</a></li></ul><p>返回当前脚本引擎正在执行的脚本对象。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span>engines<span class="token punctuation">.</span><span class="token function">myEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="scriptengine-emit-eventname-args" tabindex="-1"><a class="header-anchor" href="#scriptengine-emit-eventname-args"><span>ScriptEngine.emit(eventName[, ...args])</span></a></h2><ul><li><code>eventName</code> {string} 事件名称</li><li><code>...args</code> {any} 事件参数</li></ul><p>向该脚本引擎发送一个事件，该事件可以在该脚本引擎对应的脚本的 events 模块监听到并在脚本主线程执行事件处理。</p><p>例如脚本 receiver.js 的内容如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//监听 say 事件</span>
events<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toastLog</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//保持脚本运行</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一目录另一脚本可以启动他并发送该事件：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//运行脚本</span>
<span class="token keyword">var</span> e <span class="token operator">=</span> engines<span class="token punctuation">.</span><span class="token function">execScriptFile</span><span class="token punctuation">(</span><span class="token string">&quot;./receiver.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//等待脚本启动</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//向该脚本发送事件</span>
e<span class="token punctuation">.</span><span class="token function">getEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="scriptconfig" tabindex="-1"><a class="header-anchor" href="#scriptconfig"><span>ScriptConfig</span></a></h1><p>脚本执行时的配置。</p><h2 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h2><ul><li><code>return</code> {number}</li></ul><p>延迟执行的毫秒数</p><h2 id="interval" tabindex="-1"><a class="header-anchor" href="#interval"><span>interval</span></a></h2><ul><li><code>return</code> {number}</li></ul><p>循环运行时两次运行之间的时间间隔</p><h2 id="looptimes" tabindex="-1"><a class="header-anchor" href="#looptimes"><span>loopTimes</span></a></h2><ul><li><code>return</code> {number}</li></ul><p>循环运行次数</p><h2 id="getpath" tabindex="-1"><a class="header-anchor" href="#getpath"><span>getPath()</span></a></h2><ul><li><code>return</code> {Array}</li></ul><p>返回一个字符串数组表示脚本运行时模块寻找的路径。</p>`,52);function d(g,k){const s=i("Badge");return p(),c("div",null,[l,a(s,{type:"tip",text:"稳定",vertical:"middle"}),u,a(s,{type:"tip",text:"v4.1.0",vertical:"middle"}),r])}const h=t(o,[["render",d],["__file","engines.html.vue"]]),m=JSON.parse('{"path":"/engines.html","title":"脚本引擎-engines","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"engines.execScript(name, script[, config])","slug":"engines-execscript-name-script-config","link":"#engines-execscript-name-script-config","children":[]},{"level":2,"title":"engines.execScriptFile(path[, config])","slug":"engines-execscriptfile-path-config","link":"#engines-execscriptfile-path-config","children":[]},{"level":2,"title":"engines.execAutoFile(path[, config])","slug":"engines-execautofile-path-config","link":"#engines-execautofile-path-config","children":[]},{"level":2,"title":"engines.stopAll()","slug":"engines-stopall","link":"#engines-stopall","children":[]},{"level":2,"title":"engines.stopAllAndToast()","slug":"engines-stopallandtoast","link":"#engines-stopallandtoast","children":[]},{"level":2,"title":"engines.myEngine()","slug":"engines-myengine","link":"#engines-myengine","children":[]},{"level":2,"title":"engines.all()","slug":"engines-all","link":"#engines-all","children":[]},{"level":2,"title":"ScriptExecution.getEngine()","slug":"scriptexecution-getengine","link":"#scriptexecution-getengine","children":[]},{"level":2,"title":"ScriptExecution.getConfig()","slug":"scriptexecution-getconfig","link":"#scriptexecution-getconfig","children":[]},{"level":2,"title":"ScriptEngine.isDestroyed()","slug":"scriptengine-isdestroyed","link":"#scriptengine-isdestroyed","children":[]},{"level":2,"title":"ScriptEngine.forceStop()","slug":"scriptengine-forcestop","link":"#scriptengine-forcestop","children":[]},{"level":2,"title":"ScriptEngine.cwd()","slug":"scriptengine-cwd","link":"#scriptengine-cwd","children":[]},{"level":2,"title":"ScriptEngine.getSource()","slug":"scriptengine-getsource","link":"#scriptengine-getsource","children":[]},{"level":2,"title":"ScriptEngine.emit(eventName[, ...args])","slug":"scriptengine-emit-eventname-args","link":"#scriptengine-emit-eventname-args","children":[]},{"level":2,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":2,"title":"interval","slug":"interval","link":"#interval","children":[]},{"level":2,"title":"loopTimes","slug":"looptimes","link":"#looptimes","children":[]},{"level":2,"title":"getPath()","slug":"getpath","link":"#getpath","children":[]}],"git":{"updatedTime":1713029763000,"contributors":[{"name":"Lin","email":"yditmxpev@mozmail.com","commits":1}]},"filePathRelative":"engines.md"}');export{h as comp,m as data};