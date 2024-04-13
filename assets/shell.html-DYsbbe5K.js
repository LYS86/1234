import{_ as o,r as n,o as p,c,d as s,a as e,b as a,e as t}from"./app-C4JbmGK9.js";const r={},u=e("h1",{id:"shell-函数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shell-函数"},[e("span",null,"shell 函数")])],-1),d=t(`<p>shell 即 Unix Shell，在类 Unix 系统提供与操作系统交互的一系列命令。</p><p>很多程序可以用来执行 shell 命令，例如终端模拟器。</p><p>在 Auto.js 大致等同于用 adb 执行命令 &quot;adb shell&quot;。</p><p>其实现包括两种方式：</p><ul><li>通过<code>java.lang.Runtime.exec</code>执行(shell, Tap, Home 等函数)</li><li>通过内嵌终端模拟器执行(RootAutomator, Shell 等对象)</li></ul><h2 id="shell-cmd-root" tabindex="-1"><a class="header-anchor" href="#shell-cmd-root"><span>shell(cmd[, root])</span></a></h2><ul><li><code>cmd</code> {string} 要执行的命令</li><li><code>root</code> {Boolean} 是否以 root 权限运行，默认为 false。</li></ul><p>一次性执行命令 cmd, 并返回命令的执行结果。返回对象的其属性如下:</p><ul><li><code>code</code> {number} 返回码。执行成功时为 0，失败时为非 0 的数字。</li><li><code>result</code> {string} 运行结果(stdout 输出结果)</li><li><code>error</code> {string} 运行的错误信息(stderr 输出结果)。例如执行需要 root 权限的命令但没有授予 root 权限会返回错误信息&quot;Permission denied&quot;。</li></ul><p>示例（强制停止微信）：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;am force-stop com.tencent.mm&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;执行成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string">&quot;执行失败！请到控制台查看错误信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell"><span>Shell</span></a></h1><blockquote><p>稳定性: 稳定</p></blockquote><p>shell 函数通过用来一次性执行单条命令并获取结果。如果有多条命令需要执行，用 Shell 对象的效率更高。这是因为，每次运行 shell 函数都会打开一个单独的 shell 进程并在运行结束后关闭他，这个过程需要一定的时间；而 Shell 对象自始至终使用同一个 shell 进程。</p><h2 id="new-shell-root" tabindex="-1"><a class="header-anchor" href="#new-shell-root"><span>new Shell(root)</span></a></h2><ul><li><code>root</code> {Boolean} 是否以 root 权限运行一个 shell 进程，默认为 false。这将会影响其后使用该 Shell 对象执行的命令的权限</li></ul><p>Shell 对象的&quot;构造函数&quot;。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> sh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shell</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//强制停止微信</span>
sh<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">&quot;am force-stop com.tencent.mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sh<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-exec-cmd" tabindex="-1"><a class="header-anchor" href="#shell-exec-cmd"><span>Shell.exec(cmd)</span></a></h2><ul><li><code>cmd</code> {string} 要执行的命令</li></ul><p>执行命令 cmd。该函数不会返回任何值。</p><p>注意，命令执行是&quot;异步&quot;的、非阻塞的。也就是不会等待命令完成后才继续向下执行。</p><p>尽管这样的设计使用起来有很多不便之处，但受限于终端模拟器，暂时没有解决方式；如果后续能找到解决方案，则将提供<code>Shell.execAndWaitFor</code>函数。</p><h2 id="shell-exit" tabindex="-1"><a class="header-anchor" href="#shell-exit"><span>Shell.exit()</span></a></h2><p>直接退出 shell。正在执行的命令会被强制退出。</p><h2 id="shell-exitandwaitfor" tabindex="-1"><a class="header-anchor" href="#shell-exitandwaitfor"><span>Shell.exitAndWaitFor()</span></a></h2><p>执行&quot;exit&quot;命令并等待执行命令执行完成、退出 shell。</p><p>此函数会执行 exit 命令来正常退出 shell。</p><h2 id="shell-setcallback-callback" tabindex="-1"><a class="header-anchor" href="#shell-setcallback-callback"><span>Shell.setCallback(callback)</span></a></h2><ul><li><code>callback</code> {Object} 回调函数</li></ul><p>设置该 Shell 的回调函数，以便监听 Shell 的输出。可以包括以下属性：</p><ul><li><code>onOutput</code> {Function} 每当 shell 有新的输出时便会调用该函数。其参数是一个字符串。</li><li><code>onNewLine</code> {Function} 每当 shell 有新的一行输出时便会调用该函数。其参数是一个字符串(不包括最后的换行符)。</li></ul><p>例如:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> sh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sh<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">onNewLine</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">line</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//有新的一行输出时打印到控制台</span>
    <span class="token function">log</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//循环输入命令</span>
  <span class="token keyword">var</span> cmd <span class="token operator">=</span> dialogs<span class="token punctuation">.</span><span class="token function">rawInput</span><span class="token punctuation">(</span><span class="token string">&quot;请输入要执行的命令，输入exit退出&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cmd <span class="token operator">==</span> <span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//执行命令</span>
  sh<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
sh<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="附录-shell-命令简介" tabindex="-1"><a class="header-anchor" href="#附录-shell-命令简介"><span>附录: shell 命令简介</span></a></h1>`,35),h={href:"https://developer.android.com/studio/command-line/adb.html#shellcommands",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="am-命令" tabindex="-1"><a class="header-anchor" href="#am-命令"><span>am 命令</span></a></h2><p>am 命令即 Activity Manager 命令，用于管理应用程序活动、服务等。</p><p><strong>以下命令均以&quot;am &quot;开头，例如<code>shell(&#39;am start -p com.tencent.mm&#39;);</code>(启动微信)</strong></p><h3 id="start-options-intent" tabindex="-1"><a class="header-anchor" href="#start-options-intent"><span>start [options] intent</span></a></h3><p>启动 intent 指定的 Activity(应用程序活动)。<br> 请参阅 <a href="#shell_intent">intent 参数的规范</a>。</p><p>选项包括：</p><ul><li>-D：启用调试。</li><li>-W：等待启动完成。</li><li>--start-profiler file：启动分析器并将结果发送到 file。</li><li>-P file：类似于 --start-profiler，但当应用进入空闲状态时分析停止。</li><li>-R count：重复 Activity 启动 count 次数。在每次重复前，将完成顶部 Activity。</li><li>-S：启动 Activity 前强行停止目标应用。</li><li>--opengl-trace：启用 OpenGL 函数的跟踪。</li><li>--user user_id | current：指定要作为哪个用户运行；如果未指定，则作为当前用户运行。</li></ul><h3 id="startservice-options-intent" tabindex="-1"><a class="header-anchor" href="#startservice-options-intent"><span>startservice [options] intent</span></a></h3><p>启动 intent 指定的 Service(服务)。<br> 请参阅 <a href="#shell_intent">intent 参数的规范</a>。<br> 选项包括：</p><ul><li>--user user_id | current：指定要作为哪个用户运行；如果未指定，则作为当前用户运行。</li></ul><h3 id="force-stop-package" tabindex="-1"><a class="header-anchor" href="#force-stop-package"><span>force-stop package</span></a></h3><p>强行停止与 package（<a href="#%E5%BA%94%E7%94%A8%E5%8C%85%E5%90%8D">应用包名</a>）关联的所有应用。</p><h3 id="kill-options-package" tabindex="-1"><a class="header-anchor" href="#kill-options-package"><span>kill [options] package</span></a></h3><p>终止与 package（<a href="#%E5%BA%94%E7%94%A8%E5%8C%85%E5%90%8D">应用包名</a>）关联的所有进程。此命令仅终止可安全终止且不会影响用户体验的进程。<br> 选项包括：</p><ul><li>--user user_id | all | current：指定将终止其进程的用户；如果未指定，则终止所有用户的进程。</li></ul><h3 id="kill-all" tabindex="-1"><a class="header-anchor" href="#kill-all"><span>kill-all</span></a></h3><p>终止所有后台进程。</p><h3 id="broadcast-options-intent" tabindex="-1"><a class="header-anchor" href="#broadcast-options-intent"><span>broadcast [options] intent</span></a></h3><p>发出广播 intent。 请参阅 <a href="#shell_intent">intent 参数的规范</a>。</p><p>选项包括：</p><ul><li>[--user user_id | all | current]：指定要发送到的用户；如果未指定，则发送到所有用户。</li></ul><h3 id="instrument-options-component" tabindex="-1"><a class="header-anchor" href="#instrument-options-component"><span>instrument [options] component</span></a></h3><p>使用 Instrumentation 实例启动监控。通常，目标 component 是表单 test_package/runner_class。<br> 选项包括：</p><ul><li>-r：输出原始结果（否则对 report_key_streamresult 进行解码）。与 [-e perf true] 结合使用以生成性能测量的原始输出。</li><li>-e name value：将参数 name 设为 value。对于测试运行器，通用表单为 -e testrunner_flag value[,value...]。</li><li>-p file：将分析数据写入 file。</li><li>-w：先等待仪器完成，然后再返回。测试运行器需要使用此选项。</li><li>--no-window-animation：运行时关闭窗口动画。</li><li>--user user_id | current：指定仪器在哪个用户中运行；如果未指定，则在当前用户中运行。</li><li>profile start process file 启动 process 的分析器，将结果写入 file。</li><li>profile stop process 停止 process 的分析器。</li></ul><h3 id="dumpheap-options-process-file" tabindex="-1"><a class="header-anchor" href="#dumpheap-options-process-file"><span>dumpheap [options] process file</span></a></h3><p>转储 process 的堆，写入 file。</p><p>选项包括：</p><ul><li>--user [user_id|current]：提供进程名称时，指定要转储的进程用户；如果未指定，则使用当前用户。</li><li>-n：转储原生堆，而非托管堆。</li><li>set-debug-app [options] package 将应用 package 设为调试。</li></ul><p>选项包括：</p><ul><li>-w：应用启动时等待调试程序。</li><li>--persistent：保留此值。</li><li>clear-debug-app 使用 set-debug-app 清除以前针对调试用途设置的软件包。</li></ul><h3 id="monitor-options-启动对崩溃或-anr-的监控" tabindex="-1"><a class="header-anchor" href="#monitor-options-启动对崩溃或-anr-的监控"><span>monitor [options] 启动对崩溃或 ANR 的监控</span></a></h3><p>选项包括：</p><ul><li>--gdb：在崩溃/ANR 时在给定端口上启动 gdbserv。</li></ul><h3 id="screen-compat-on-off-package" tabindex="-1"><a class="header-anchor" href="#screen-compat-on-off-package"><span>screen-compat {on|off} package</span></a></h3><p>控制 package 的屏幕兼容性模式。</p><h3 id="display-size-reset-widthxheight" tabindex="-1"><a class="header-anchor" href="#display-size-reset-widthxheight"><span>display-size [reset|widthxheight]</span></a></h3><p>替换模拟器/设备显示尺寸。此命令对于在不同尺寸的屏幕上测试您的应用非常有用，它支持使用大屏设备模仿小屏幕分辨率（反之亦然）。<br> 示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;am display-size 1280x800&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="display-density-dpi" tabindex="-1"><a class="header-anchor" href="#display-density-dpi"><span>display-density dpi</span></a></h3><p>替换模拟器/设备显示密度。此命令对于在不同密度的屏幕上测试您的应用非常有用，它支持使用低密度屏幕在高密度环境环境上进行测试（反之亦然）。<br> 示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;am display-density 480&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="to-uri-intent" tabindex="-1"><a class="header-anchor" href="#to-uri-intent"><span>to-uri intent</span></a></h3><p>将给定的 intent 规范以 URI 的形式输出。 请参阅 <a href="#shell_intent">intent 参数的规范</a>。</p><h3 id="to-intent-uri-intent" tabindex="-1"><a class="header-anchor" href="#to-intent-uri-intent"><span>to-intent-uri intent</span></a></h3><p>将给定的 intent 规范以 intent:URI 的形式输出。 请参阅 intent 参数的规范。</p><h3 id="intent-参数的规范" tabindex="-1"><a class="header-anchor" href="#intent-参数的规范"><span>intent 参数的规范</span></a></h3><p>对于采用 intent 参数的 am 命令，您可以使用以下选项指定 intent：</p><ul><li>-a action<br> 指定 intent 操作，如“android.intent.action.VIEW”。此指定只能声明一次。</li><li>-d data_uri<br> 指定 intent 数据 URI，如“content://contacts/people/1”。此指定只能声明一次。</li><li>-t mime_type<br> 指定 intent MIME 类型，如“image/png”。此指定只能声明一次。</li><li>-c category<br> 指定 intent 类别，如“android.intent.category.APP_CONTACTS”。</li><li>-n component<br> 指定带有软件包名称前缀的组件名称以创建显式 intent，如“com.example.app/.ExampleActivity”。</li><li>-f flags<br> 将标志添加到 setFlags() 支持的 intent。</li><li>--esn extra_key<br> 添加一个 null extra。URI intent 不支持此选项。</li><li>-e|--es extra_key extra_string_value<br> 添加字符串数据作为键值对。</li><li>--ez extra_key extra_boolean_value<br> 添加布尔型数据作为键值对。</li><li>--ei extra_key extra_int_value<br> 添加整数型数据作为键值对。</li><li>--el extra_key extra_long_value<br> 添加长整型数据作为键值对。</li><li>--ef extra_key extra_float_value<br> 添加浮点型数据作为键值对。</li><li>--eu extra_key extra_uri_value<br> 添加 URI 数据作为键值对。</li><li>--ecn extra_key extra_component_name_value<br> 添加组件名称，将其作为 ComponentName 对象进行转换和传递。</li><li>--eia extra_key extra_int_value[,extra_int_value...]<br> 添加整数数组。</li><li>--ela extra_key extra_long_value[,extra_long_value...]<br> 添加长整型数组。</li><li>--efa extra_key extra_float_value[,extra_float_value...]<br> 添加浮点型数组。</li><li>--grant-read-uri-permission<br> 包含标志 FLAG_GRANT_READ_URI_PERMISSION。</li><li>--grant-write-uri-permission<br> 包含标志 FLAG_GRANT_WRITE_URI_PERMISSION。</li><li>--debug-log-resolution<br> 包含标志 FLAG_DEBUG_LOG_RESOLUTION。</li><li>--exclude-stopped-packages<br> 包含标志 FLAG_EXCLUDE_STOPPED_PACKAGES。</li><li>--include-stopped-packages<br> 包含标志 FLAG_INCLUDE_STOPPED_PACKAGES。</li><li>--activity-brought-to-front<br> 包含标志 FLAG_ACTIVITY_BROUGHT_TO_FRONT。</li><li>--activity-clear-top<br> 包含标志 FLAG_ACTIVITY_CLEAR_TOP。</li><li>--activity-clear-when-task-reset<br> 包含标志 FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET。</li><li>--activity-exclude-from-recents<br> 包含标志 FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS。</li><li>--activity-launched-from-history<br> 包含标志 FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY。</li><li>--activity-multiple-task<br> 包含标志 FLAG_ACTIVITY_MULTIPLE_TASK。</li><li>--activity-no-animation<br> 包含标志 FLAG_ACTIVITY_NO_ANIMATION。</li><li>--activity-no-history<br> 包含标志 FLAG_ACTIVITY_NO_HISTORY。</li><li>--activity-no-user-action<br> 包含标志 FLAG_ACTIVITY_NO_USER_ACTION。</li><li>--activity-previous-is-top<br> 包含标志 FLAG_ACTIVITY_PREVIOUS_IS_TOP。</li><li>--activity-reorder-to-front<br> 包含标志 FLAG_ACTIVITY_REORDER_TO_FRONT。</li><li>--activity-reset-task-if-needed<br> 包含标志 FLAG_ACTIVITY_RESET_TASK_IF_NEEDED。</li><li>--activity-single-top<br> 包含标志 FLAG_ACTIVITY_SINGLE_TOP。</li><li>--activity-clear-task<br> 包含标志 FLAG_ACTIVITY_CLEAR_TASK。</li><li>--activity-task-on-home<br> 包含标志 FLAG_ACTIVITY_TASK_ON_HOME。</li><li>--receiver-registered-only<br> 包含标志 FLAG_RECEIVER_REGISTERED_ONLY。</li><li>--receiver-replace-pending<br> 包含标志 FLAG_RECEIVER_REPLACE_PENDING。</li><li>--selector<br> 需要使用 -d 和 -t 选项以设置 intent 数据和类型。</li></ul><h4 id="uri-component-package" tabindex="-1"><a class="header-anchor" href="#uri-component-package"><span>URI component package</span></a></h4><p>如果不受上述某一选项的限制，您可以直接指定 URI、软件包名称和组件名称。当参数不受限制时，如果参数包含一个“:”（冒号），则此工具假定参数是一个 URI；如果参数包含一个“/”（正斜杠），则此工具假定参数是一个组件名称；否则，此工具假定参数是一个软件包名称。</p><h2 id="应用包名" tabindex="-1"><a class="header-anchor" href="#应用包名"><span>应用包名</span></a></h2><p>所谓应用包名，是唯一确定应用的标识。例如微信的包名是&quot;com.tencent.mm&quot;, QQ 的包名是&quot;com.tencent.mobileqq&quot;。<br> 要获取一个应用的包名，可以通过函数<code>getPackageName(appName)</code>获取。参见帮助-&gt;其他一般函数。</p><h2 id="pm-命令" tabindex="-1"><a class="header-anchor" href="#pm-命令"><span>pm 命令</span></a></h2><p>pm 命令用于管理应用程序，例如卸载应用、冻结应用等。<br><strong>以下命令均以&quot;pm &quot;开头，例如&quot;shell(&quot;pm disable com.tencent.mm&quot;);&quot;(冻结微信)</strong></p><h3 id="list-packages-options-filter" tabindex="-1"><a class="header-anchor" href="#list-packages-options-filter"><span>list packages [options] filter</span></a></h3><p>输出所有软件包，或者，仅输出包名称包含 filter 中的文本的软件包。<br> 选项：</p><ul><li>-f：查看它们的关联文件。</li><li>-d：进行过滤以仅显示已停用的软件包。</li><li>-e：进行过滤以仅显示已启用的软件包。</li><li>-s：进行过滤以仅显示系统软件包。</li><li>-3：进行过滤以仅显示第三方软件包。</li><li>-i：查看软件包的安装程序。</li><li>-u：也包括卸载的软件包。</li><li>--user user_id：要查询的用户空间。</li></ul><h3 id="list-permission-groups" tabindex="-1"><a class="header-anchor" href="#list-permission-groups"><span>list permission-groups</span></a></h3><p>输出所有已知的权限组。</p><h3 id="list-permissions-options-group" tabindex="-1"><a class="header-anchor" href="#list-permissions-options-group"><span>list permissions [options] group</span></a></h3><p>输出所有已知权限，或者，仅输出 group 中的权限。<br> 选项：</p><ul><li>-g：按组加以组织。</li><li>-f：输出所有信息。</li><li>-s：简短摘要。</li><li>-d：仅列出危险权限。</li><li>-u：仅列出用户将看到的权限。</li></ul><h3 id="list-instrumentation-options" tabindex="-1"><a class="header-anchor" href="#list-instrumentation-options"><span>list instrumentation [options]</span></a></h3><p>列出所有测试软件包。<br> 选项：</p><ul><li>-f：列出用于测试软件包的 APK 文件。</li><li>target_package：列出仅用于此应用的测试软件包。</li></ul><h3 id="list-features" tabindex="-1"><a class="header-anchor" href="#list-features"><span>list features</span></a></h3><p>输出系统的所有功能。</p><h3 id="list-libraries" tabindex="-1"><a class="header-anchor" href="#list-libraries"><span>list libraries</span></a></h3><p>输出当前设备支持的所有库。</p><h3 id="list-users" tabindex="-1"><a class="header-anchor" href="#list-users"><span>list users</span></a></h3><p>输出系统上的所有用户。</p><h3 id="path-package" tabindex="-1"><a class="header-anchor" href="#path-package"><span>path package</span></a></h3><p>输出给定 package 的 APK 的路径。</p><h3 id="install-options-path" tabindex="-1"><a class="header-anchor" href="#install-options-path"><span>install [options] path</span></a></h3><p>将软件包（通过 path 指定）安装到系统。<br> 选项：</p><ul><li>-l：安装具有转发锁定功能的软件包。</li><li>-r：重新安装现有应用，保留其数据。</li><li>-t：允许安装测试 APK。</li><li>-i installer_package_name：指定安装程序软件包名称。</li><li>-s：在共享的大容量存储（如 sdcard）上安装软件包。</li><li>-f：在内部系统内存上安装软件包。</li><li>-d：允许版本代码降级。</li><li>-g：授予应用清单文件中列出的所有权限。</li></ul><h3 id="uninstall-options-package" tabindex="-1"><a class="header-anchor" href="#uninstall-options-package"><span>uninstall [options] package</span></a></h3><p>从系统中卸载软件包。<br> 选项：</p><ul><li>-k：移除软件包后保留数据和缓存目录。</li></ul><h3 id="clear-package" tabindex="-1"><a class="header-anchor" href="#clear-package"><span>clear package</span></a></h3><p>删除与软件包关联的所有数据。</p><h3 id="enable-package-or-component" tabindex="-1"><a class="header-anchor" href="#enable-package-or-component"><span>enable package_or_component</span></a></h3><p>启用给定软件包或组件（作为“package/class”写入）。</p><h3 id="disable-package-or-component" tabindex="-1"><a class="header-anchor" href="#disable-package-or-component"><span>disable package_or_component</span></a></h3><p>停用给定软件包或组件（作为“package/class”写入）。</p><h3 id="disable-user-options-package-or-component" tabindex="-1"><a class="header-anchor" href="#disable-user-options-package-or-component"><span>disable-user [options] package_or_component</span></a></h3><p>选项：</p><ul><li>--user user_id：要停用的用户。</li></ul><h3 id="grant-package-name-permission" tabindex="-1"><a class="header-anchor" href="#grant-package-name-permission"><span>grant package_name permission</span></a></h3><p>向应用授予权限。在运行 Android 6.0（API 级别 23）及更高版本的设备上，可以是应用清单中声明的任何权限。在运行 Android 5.1（API 级别 22）和更低版本的设备上，必须是应用定义的可选权限。</p><h3 id="revoke-package-name-permission" tabindex="-1"><a class="header-anchor" href="#revoke-package-name-permission"><span>revoke package_name permission</span></a></h3><p>从应用中撤销权限。在运行 Android 6.0（API 级别 23）及更高版本的设备上，可以是应用清单中声明的任何权限。在运行 Android 5.1（API 级别 22）和更低版本的设备上，必须是应用定义的可选权限。</p><h3 id="set-install-location-location" tabindex="-1"><a class="header-anchor" href="#set-install-location-location"><span>set-install-location location</span></a></h3><p>更改默认安装位置。位置值：</p><ul><li>0：自动—让系统决定最佳位置。</li><li>1：内部—安装在内部设备存储上。</li><li>2：外部—安装在外部介质上。</li></ul><blockquote><p>注：此命令仅用于调试目的；使用此命令会导致应用中断和其他意外行为。</p></blockquote><h3 id="get-install-location" tabindex="-1"><a class="header-anchor" href="#get-install-location"><span>get-install-location</span></a></h3><p>返回当前安装位置。返回值：</p><ul><li>0 [auto]：让系统决定最佳位置。</li><li>1 [internal]：安装在内部设备存储上</li><li>2 [external]：安装在外部介质上</li></ul><h3 id="set-permission-enforced-permission-true-false" tabindex="-1"><a class="header-anchor" href="#set-permission-enforced-permission-true-false"><span>set-permission-enforced permission [true|false]</span></a></h3><p>指定是否应强制执行给定的权限。</p><h3 id="trim-caches-desired-free-space" tabindex="-1"><a class="header-anchor" href="#trim-caches-desired-free-space"><span>trim-caches desired_free_space</span></a></h3><p>减少缓存文件以达到给定的可用空间。</p><h3 id="create-user-user-name" tabindex="-1"><a class="header-anchor" href="#create-user-user-name"><span>create-user user_name</span></a></h3><p>使用给定的 user_name 创建新用户，输出新用户的标识符。</p><h3 id="remove-user-user-id" tabindex="-1"><a class="header-anchor" href="#remove-user-user-id"><span>remove-user user_id</span></a></h3><p>移除具有给定的 user_id 的用户，删除与该用户关联的所有数据。</p><h3 id="get-max-users" tabindex="-1"><a class="header-anchor" href="#get-max-users"><span>get-max-users</span></a></h3><p>输出设备支持的最大用户数。</p><h2 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令"><span>其他命令</span></a></h2><h3 id="进行屏幕截图" tabindex="-1"><a class="header-anchor" href="#进行屏幕截图"><span>进行屏幕截图</span></a></h3><p>screencap 命令是一个用于对设备显示屏进行屏幕截图的 shell 实用程序。在 shell 中，此语法为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>screencap filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;screencap /sdcard/screen.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列表文件" tabindex="-1"><a class="header-anchor" href="#列表文件"><span>列表文件</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ls filepath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">shell</span><span class="token punctuation">(</span><span class="token string">&quot;ls /system/bin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,119);function m(g,v){const l=n("Badge"),i=n("ExternalLinkIcon");return p(),c("div",null,[u,s(l,{type:"tip",text:"稳定",vertical:"middle"}),d,e("p",null,[a("以下关于 shell 命令的资料来自"),e("a",h,[a("AndroidStudio 用户指南：Shell 命令"),s(i)]),a("。")]),k])}const _=o(r,[["render",m],["__file","shell.html.vue"]]),f=JSON.parse('{"path":"/shell.html","title":"shell 函数","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"shell(cmd[, root])","slug":"shell-cmd-root","link":"#shell-cmd-root","children":[]},{"level":2,"title":"new Shell(root)","slug":"new-shell-root","link":"#new-shell-root","children":[]},{"level":2,"title":"Shell.exec(cmd)","slug":"shell-exec-cmd","link":"#shell-exec-cmd","children":[]},{"level":2,"title":"Shell.exit()","slug":"shell-exit","link":"#shell-exit","children":[]},{"level":2,"title":"Shell.exitAndWaitFor()","slug":"shell-exitandwaitfor","link":"#shell-exitandwaitfor","children":[]},{"level":2,"title":"Shell.setCallback(callback)","slug":"shell-setcallback-callback","link":"#shell-setcallback-callback","children":[]},{"level":2,"title":"am 命令","slug":"am-命令","link":"#am-命令","children":[{"level":3,"title":"start [options] intent","slug":"start-options-intent","link":"#start-options-intent","children":[]},{"level":3,"title":"startservice [options] intent","slug":"startservice-options-intent","link":"#startservice-options-intent","children":[]},{"level":3,"title":"force-stop package","slug":"force-stop-package","link":"#force-stop-package","children":[]},{"level":3,"title":"kill [options] package","slug":"kill-options-package","link":"#kill-options-package","children":[]},{"level":3,"title":"kill-all","slug":"kill-all","link":"#kill-all","children":[]},{"level":3,"title":"broadcast [options] intent","slug":"broadcast-options-intent","link":"#broadcast-options-intent","children":[]},{"level":3,"title":"instrument [options] component","slug":"instrument-options-component","link":"#instrument-options-component","children":[]},{"level":3,"title":"dumpheap [options] process file","slug":"dumpheap-options-process-file","link":"#dumpheap-options-process-file","children":[]},{"level":3,"title":"monitor [options] 启动对崩溃或 ANR 的监控","slug":"monitor-options-启动对崩溃或-anr-的监控","link":"#monitor-options-启动对崩溃或-anr-的监控","children":[]},{"level":3,"title":"screen-compat {on|off} package","slug":"screen-compat-on-off-package","link":"#screen-compat-on-off-package","children":[]},{"level":3,"title":"display-size [reset|widthxheight]","slug":"display-size-reset-widthxheight","link":"#display-size-reset-widthxheight","children":[]},{"level":3,"title":"display-density dpi","slug":"display-density-dpi","link":"#display-density-dpi","children":[]},{"level":3,"title":"to-uri intent","slug":"to-uri-intent","link":"#to-uri-intent","children":[]},{"level":3,"title":"to-intent-uri intent","slug":"to-intent-uri-intent","link":"#to-intent-uri-intent","children":[]},{"level":3,"title":"intent 参数的规范","slug":"intent-参数的规范","link":"#intent-参数的规范","children":[]}]},{"level":2,"title":"应用包名","slug":"应用包名","link":"#应用包名","children":[]},{"level":2,"title":"pm 命令","slug":"pm-命令","link":"#pm-命令","children":[{"level":3,"title":"list packages [options] filter","slug":"list-packages-options-filter","link":"#list-packages-options-filter","children":[]},{"level":3,"title":"list permission-groups","slug":"list-permission-groups","link":"#list-permission-groups","children":[]},{"level":3,"title":"list permissions [options] group","slug":"list-permissions-options-group","link":"#list-permissions-options-group","children":[]},{"level":3,"title":"list instrumentation [options]","slug":"list-instrumentation-options","link":"#list-instrumentation-options","children":[]},{"level":3,"title":"list features","slug":"list-features","link":"#list-features","children":[]},{"level":3,"title":"list libraries","slug":"list-libraries","link":"#list-libraries","children":[]},{"level":3,"title":"list users","slug":"list-users","link":"#list-users","children":[]},{"level":3,"title":"path package","slug":"path-package","link":"#path-package","children":[]},{"level":3,"title":"install [options] path","slug":"install-options-path","link":"#install-options-path","children":[]},{"level":3,"title":"uninstall [options] package","slug":"uninstall-options-package","link":"#uninstall-options-package","children":[]},{"level":3,"title":"clear package","slug":"clear-package","link":"#clear-package","children":[]},{"level":3,"title":"enable package_or_component","slug":"enable-package-or-component","link":"#enable-package-or-component","children":[]},{"level":3,"title":"disable package_or_component","slug":"disable-package-or-component","link":"#disable-package-or-component","children":[]},{"level":3,"title":"disable-user [options] package_or_component","slug":"disable-user-options-package-or-component","link":"#disable-user-options-package-or-component","children":[]},{"level":3,"title":"grant package_name permission","slug":"grant-package-name-permission","link":"#grant-package-name-permission","children":[]},{"level":3,"title":"revoke package_name permission","slug":"revoke-package-name-permission","link":"#revoke-package-name-permission","children":[]},{"level":3,"title":"set-install-location location","slug":"set-install-location-location","link":"#set-install-location-location","children":[]},{"level":3,"title":"get-install-location","slug":"get-install-location","link":"#get-install-location","children":[]},{"level":3,"title":"set-permission-enforced permission [true|false]","slug":"set-permission-enforced-permission-true-false","link":"#set-permission-enforced-permission-true-false","children":[]},{"level":3,"title":"trim-caches desired_free_space","slug":"trim-caches-desired-free-space","link":"#trim-caches-desired-free-space","children":[]},{"level":3,"title":"create-user user_name","slug":"create-user-user-name","link":"#create-user-user-name","children":[]},{"level":3,"title":"remove-user user_id","slug":"remove-user-user-id","link":"#remove-user-user-id","children":[]},{"level":3,"title":"get-max-users","slug":"get-max-users","link":"#get-max-users","children":[]}]},{"level":2,"title":"其他命令","slug":"其他命令","link":"#其他命令","children":[{"level":3,"title":"进行屏幕截图","slug":"进行屏幕截图","link":"#进行屏幕截图","children":[]},{"level":3,"title":"列表文件","slug":"列表文件","link":"#列表文件","children":[]}]}],"git":{"updatedTime":1713029763000,"contributors":[{"name":"Lin","email":"yditmxpev@mozmail.com","commits":1}]},"filePathRelative":"shell.md"}');export{_ as comp,f as data};
