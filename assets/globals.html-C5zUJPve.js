import{_ as c,r as p,o as l,c as r,d as a,a as s,b as n,w as u,e as t}from"./app-C4JbmGK9.js";const d={},k=s("h1",{id:"全局变量与函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#全局变量与函数"},[s("span",null,"全局变量与函数")])],-1),m=t(`<ul><li>exports</li><li>module</li><li>require()</li></ul><p>以下的对象是特定于 Auto.js 的。 有些内置对象是 JavaScript 语言本身的一部分，它们也是全局的。</p><p>一些模块中的函数为了使用方便也可以直接全局使用，这些函数在此不再赘述。例如 timers 模块的 setInterval, setTimeout 等函数。</p><h2 id="sleep-n" tabindex="-1"><a class="header-anchor" href="#sleep-n"><span>sleep(n)</span></a></h2><ul><li><code>n</code> {number} 毫秒数</li></ul><p>暂停运行 n<strong>毫秒</strong>的时间。1 秒等于 1000 毫秒。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//暂停5毫秒</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="currentpackage" tabindex="-1"><a class="header-anchor" href="#currentpackage"><span>currentPackage()</span></a></h2><ul><li><code>return</code> {string}</li></ul><p>返回最近一次监测到的正在运行的应用的包名，一般可以认为就是当前正在运行的应用的包名。</p><p>此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。</p><h2 id="currentactivity" tabindex="-1"><a class="header-anchor" href="#currentactivity"><span>currentActivity()</span></a></h2><ul><li><code>return</code> {string}</li></ul><p>返回最近一次监测到的正在运行的 Activity 的名称，一般可以认为就是当前正在运行的 Activity 的名称。</p><p>此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。</p><h2 id="setclip-text" tabindex="-1"><a class="header-anchor" href="#setclip-text"><span>setClip(text)</span></a></h2><ul><li><code>text</code> {string} 文本</li></ul><p>设置剪贴板内容。此剪贴板即系统剪贴板，在一般应用的输入框中&quot;粘贴&quot;既可使用。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">setClip</span><span class="token punctuation">(</span><span class="token string">&quot;剪贴板文本&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="getclip" tabindex="-1"><a class="header-anchor" href="#getclip"><span>getClip()</span></a></h2><ul><li><code>return</code> {string}</li></ul><p>返回系统剪贴板的内容。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;剪贴板内容为:&quot;</span> <span class="token operator">+</span> <span class="token function">getClip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="toast-message" tabindex="-1"><a class="header-anchor" href="#toast-message"><span>toast(message)</span></a></h2><ul><li><code>message</code> {string} 要显示的信息</li></ul><p>以气泡显示信息 message 几秒。(具体时间取决于安卓系统，一般都是 2 秒)</p><p>注意，连续显示多个 toast 时，会排队显示，即使脚本已经结束，toast 可能仍然会显示。例如:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行这段程序以后，会很快执行完成，且不断弹出消息，在任务管理中关闭所有脚本也无法停止。 要保证气泡消息才继续执行可以用：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> _toast_ <span class="token operator">=</span> toast<span class="token punctuation">;</span>
<span class="token function-variable function">toast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">_toast_</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者修改 toast 函数：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">importClass</span><span class="token punctuation">(</span>android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>Toast<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> toast <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> toast <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">showText</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> msg <span class="token operator">=</span> msg<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>toast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      toast <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">makeText</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> Toast<span class="token punctuation">.</span><span class="token constant">LENGTH_SHORT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      toast<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> showText<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> toast<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toastlog-message" tabindex="-1"><a class="header-anchor" href="#toastlog-message"><span>toastLog(message)</span></a></h2><ul><li><code>message</code> {string} 要显示的信息</li></ul><p>相当于<code>toast(message);log(message)</code>。显示信息 message 并在控制台中输出。参见 console.log。</p><h2 id="waitforactivity-activity-period-200" tabindex="-1"><a class="header-anchor" href="#waitforactivity-activity-period-200"><span>waitForActivity(activity[, period = 200])</span></a></h2><ul><li><code>activity</code> {String} Activity 名称</li><li><code>period</code> {Number} 轮询等待间隔（毫秒）</li></ul><p>等待指定的 Activity 出现，period 为检查 Activity 的间隔。</p><h2 id="waitforpackage-package-period-200" tabindex="-1"><a class="header-anchor" href="#waitforpackage-package-period-200"><span>waitForPackage(package[, period = 200])</span></a></h2><ul><li><code>package</code> {String} 包名</li><li><code>period</code> {Number} 轮询等待间隔（毫秒）</li></ul><p>等待指定的应用出现。例如<code>waitForPackage(&quot;com.tencent.mm&quot;)</code>为等待当前界面为微信。</p><h2 id="exit" tabindex="-1"><a class="header-anchor" href="#exit"><span>exit()</span></a></h2><p>立即停止脚本运行。</p><p>立即停止是通过抛出<code>ScriptInterrupttedException</code>来实现的，因此如果用<code>try...catch</code>把 exit()函数的异常捕捉，则脚本不会立即停止，仍会运行几行后再停止。</p><h2 id="random-min-max" tabindex="-1"><a class="header-anchor" href="#random-min-max"><span>random(min, max)</span></a></h2><ul><li><code>min</code> {number} 随机数产生的区间下界</li><li><code>max</code> {number} 随机数产生的区间上界</li><li><code>return</code> {number}</li></ul><p>返回一个在[min...max]之间的随机数。例如 random(0, 2)可能产生 0, 1, 2。</p><h2 id="random" tabindex="-1"><a class="header-anchor" href="#random"><span>random()</span></a></h2><ul><li><code>return</code> {number}</li></ul><p>返回在(0-1)的随机浮点数。</p><h2 id="requiresapi-api" tabindex="-1"><a class="header-anchor" href="#requiresapi-api"><span>requiresApi(api)</span></a></h2><ul><li><code>api</code> {Number} Android 版本号</li></ul><p>表示此脚本需要 Android API 版本达到指定版本才能运行。例如<code>requiresApi(19)</code>表示脚本需要在 Android 4.4 以及以上运行。</p><p>调用该函数时会判断运行脚本的设备系统的版本号，如果没有达到要求则抛出异常。</p><p>可以参考以下 Android API 和版本的对照表:</p><table><thead><tr><th>API Level</th><th>SDK 版本</th><th>发布日期</th></tr></thead><tbody><tr><td>15</td><td>4.0.3</td><td>2011 年 12 月</td></tr><tr><td>16</td><td>4.1</td><td>2012 年 7 月</td></tr><tr><td>17</td><td>4.2</td><td>2012 年 11 月</td></tr><tr><td>18</td><td>4.3</td><td>2013 年 7 月</td></tr><tr><td>19</td><td>4.4</td><td>2013 年 10 月</td></tr><tr><td>21</td><td>5.0</td><td>2014 年 11 月</td></tr><tr><td>22</td><td>5.1</td><td>2015 年 3 月</td></tr><tr><td>23</td><td>6.0</td><td>2015 年 10 月</td></tr><tr><td>24</td><td>7.0</td><td>2016 年 8 月</td></tr><tr><td>25</td><td>7.1</td><td>2016 年 12 月</td></tr><tr><td>26</td><td>8.0</td><td>2017 年 8 月</td></tr><tr><td>27</td><td>8.1</td><td>2017 年 12 月</td></tr><tr><td>28</td><td>9.0</td><td>2018 年 8 月</td></tr><tr><td>29</td><td>10.0</td><td>2019 年 9 月</td></tr><tr><td>30</td><td>11.0</td><td>2020 年 9 月</td></tr><tr><td>31</td><td>12.0</td><td>2021 年 8 月</td></tr></tbody></table>`,57),v={href:"https://source.android.com/docs/setup/about/build-numbers?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="requiresautojsversion-version" tabindex="-1"><a class="header-anchor" href="#requiresautojsversion-version"><span>requiresAutojsVersion(version)</span></a></h2><ul><li><code>version</code> {string} | {number} Auto.js 的版本或版本号</li></ul><p>表示此脚本需要 Auto.js 版本达到指定版本才能运行。例如<code>requiresAutojsVersion(&quot;3.0.0 Beta&quot;)</code>表示脚本需要在 Auto.js 3.0.0 Beta 以及以上运行。</p><p>调用该函数时会判断运行脚本的 Auto.js 的版本号，如果没有达到要求则抛出异常。</p><p>version 参数可以是整数表示版本号，例如<code>requiresAutojsVersion(250)</code>；也可以是字符串格式表示的版本，例如&quot;3.0.0 Beta&quot;, &quot;3.1.0 Alpha4&quot;, &quot;3.2.0&quot;等。</p><p>可以通过<code>app.autojs.versionCode</code>和<code>app.autojs.versionName</code>获取当前的 Auto.js 版本号和版本。</p><h2 id="runtime-requestpermissions-permissions" tabindex="-1"><a class="header-anchor" href="#runtime-requestpermissions-permissions"><span>runtime.requestPermissions(permissions)</span></a></h2><ul><li><code>permissions</code> {Array} 权限的字符串数组</li></ul><p>动态申请安卓的权限。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//请求GPS权限</span>
runtime<span class="token punctuation">.</span><span class="token function">requestPermissions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;access_fine_location&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>尽管安卓有很多权限，但必须写入 Manifest 才能动态申请，为了防止权限的滥用，目前 Auto.js 只能额外申请两个权限：</p><ul><li><code>access_fine_location</code> GPS 权限</li><li><code>record_audio</code> 录音权限</li></ul><p>您可以通过 APK 编辑器来增加 Auto.js 以及 Auto.js 打包的应用的权限。</p>`,13),g={href:"https://developer.android.com/guide/topics/permissions/overview",target:"_blank",rel:"noopener noreferrer"},b=t(`<h2 id="runtime-loadjar-path" tabindex="-1"><a class="header-anchor" href="#runtime-loadjar-path"><span>runtime.loadJar(path)</span></a></h2><ul><li><code>path</code> {string} jar 文件路径</li></ul><p>加载目标 jar 文件，加载成功后将可以使用该 Jar 文件的类。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 加载jsoup.jar</span>
runtime<span class="token punctuation">.</span><span class="token function">loadJar</span><span class="token punctuation">(</span><span class="token string">&quot;./jsoup.jar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用jsoup解析html</span>
<span class="token function">importClass</span><span class="token punctuation">(</span>org<span class="token punctuation">.</span>jsoup<span class="token punctuation">.</span>Jsoup<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>Jsoup<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>files<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token string">&quot;./test.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={href:"https://jsoup.org/download",target:"_blank",rel:"noopener noreferrer"},f=t('<h2 id="runtime-loaddex-path" tabindex="-1"><a class="header-anchor" href="#runtime-loaddex-path"><span>runtime.loadDex(path)</span></a></h2><ul><li><code>path</code> {string} dex 文件路径</li></ul><p>加载目标 dex 文件，加载成功后将可以使用该 dex 文件的类。</p><p>因为加载 jar 实际上是把 jar 转换为 dex 再加载的，因此加载 dex 文件会比 jar 文件快得多。可以使用 Android SDK 的 build tools 的 dx 工具把 jar 转换为 dex。</p><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context"><span>context</span></a></h2><p>全局变量。一个 android.content.Context 对象。</p><p>注意该对象为 ApplicationContext，因此不能用于界面、对话框等的创建。</p>',7);function j(_,y){const o=p("Badge"),i=p("RouteLink"),e=p("ExternalLinkIcon");return l(),r("div",null,[k,a(o,{type:"tip",text:"稳定",vertical:"middle"}),s("p",null,[n("全局变量和函数在所有模块中均可使用。 但以下变量的作用域只在模块内，详见 "),a(i,{to:"/modules.html"},{default:u(()=>[n("module")]),_:1}),n("：")]),m,s("p",null,[s("a",v,[n("Android API 版本"),a(e)])]),h,s("p",null,[n("安卓所有的权限列表参见"),s("a",g,[n("Permissions Overview"),a(e)]),n("。（并没有用）")]),b,s("p",null,[n("(jsoup 是一个 Java 实现的解析 Html DOM 的库，可以在"),s("a",x,[n("Jsoup"),a(e)]),n("下载)")]),f])}const w=c(d,[["render",j],["__file","globals.html.vue"]]),A=JSON.parse('{"path":"/globals.html","title":"全局变量与函数","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"sleep(n)","slug":"sleep-n","link":"#sleep-n","children":[]},{"level":2,"title":"currentPackage()","slug":"currentpackage","link":"#currentpackage","children":[]},{"level":2,"title":"currentActivity()","slug":"currentactivity","link":"#currentactivity","children":[]},{"level":2,"title":"setClip(text)","slug":"setclip-text","link":"#setclip-text","children":[]},{"level":2,"title":"getClip()","slug":"getclip","link":"#getclip","children":[]},{"level":2,"title":"toast(message)","slug":"toast-message","link":"#toast-message","children":[]},{"level":2,"title":"toastLog(message)","slug":"toastlog-message","link":"#toastlog-message","children":[]},{"level":2,"title":"waitForActivity(activity[, period = 200])","slug":"waitforactivity-activity-period-200","link":"#waitforactivity-activity-period-200","children":[]},{"level":2,"title":"waitForPackage(package[, period = 200])","slug":"waitforpackage-package-period-200","link":"#waitforpackage-package-period-200","children":[]},{"level":2,"title":"exit()","slug":"exit","link":"#exit","children":[]},{"level":2,"title":"random(min, max)","slug":"random-min-max","link":"#random-min-max","children":[]},{"level":2,"title":"random()","slug":"random","link":"#random","children":[]},{"level":2,"title":"requiresApi(api)","slug":"requiresapi-api","link":"#requiresapi-api","children":[]},{"level":2,"title":"requiresAutojsVersion(version)","slug":"requiresautojsversion-version","link":"#requiresautojsversion-version","children":[]},{"level":2,"title":"runtime.requestPermissions(permissions)","slug":"runtime-requestpermissions-permissions","link":"#runtime-requestpermissions-permissions","children":[]},{"level":2,"title":"runtime.loadJar(path)","slug":"runtime-loadjar-path","link":"#runtime-loadjar-path","children":[]},{"level":2,"title":"runtime.loadDex(path)","slug":"runtime-loaddex-path","link":"#runtime-loaddex-path","children":[]},{"level":2,"title":"context","slug":"context","link":"#context","children":[]}],"git":{"updatedTime":1713029763000,"contributors":[{"name":"Lin","email":"yditmxpev@mozmail.com","commits":1}]},"filePathRelative":"globals.md"}');export{w as comp,A as data};
