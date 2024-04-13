import{_ as e,r as o,o as l,c,a as n,d as s,b as t,e as p}from"./app-C4JbmGK9.js";const i={},u=n("h1",{id:"关于本文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关于本文档"},[n("span",null,"关于本文档")])],-1),r=n("p",null,"文档中使用一些标签来标记状态：",-1),d=p(`<h2 id="images-detectscolor-image-color-x-y-threshold-16-algorithm-diff" tabindex="-1"><a class="header-anchor" href="#images-detectscolor-image-color-x-y-threshold-16-algorithm-diff"><span>images.detectsColor(image, color, x, y[, threshold = 16, algorithm = &quot;diff&quot;])</span></a></h2><p>images 表示全局函数，也代表一个模块，detectsColor 表示带调用 images 模块的 detectsColor 函数，方括号代表可选参数，threshold = 16 表示 threshold 的默认值是 16</p><ul><li><code>image</code> {Image}</li></ul><p>{}内为 image 的数据类型</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>images<span class="token punctuation">.</span><span class="token function">detectsColor</span><span class="token punctuation">(</span><span class="token function">captureScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;#112233&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//相当于</span>
images<span class="token punctuation">.</span><span class="token function">detectsColor</span><span class="token punctuation">(</span><span class="token function">captureScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;#112233&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token string">&quot;rgb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="console-log-data-args" tabindex="-1"><a class="header-anchor" href="#console-log-data-args"><span>console.log(data,[...args])</span></a></h2><p>...args 表示这是一个可变参数，处理 data 参数以外，还接受多个 args 参数</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>调用有可选参数及默认值的函数时请不要写上方括号和等于号。</strong></p>`,9);function m(g,k){const a=o("Badge");return l(),c("div",null,[u,r,n("ul",null,[n("li",null,[s(a,{type:"tip",text:"稳定",vertical:"middle"}),t(" 在未来的更新中这些模块已有的函数一般不会被更改，会保证后向兼容性。")]),n("li",null,[s(a,{type:"warning",text:"实验",vertical:"middle"}),t(" 在未来的更新中可能会更改或移除。应该谨慎使用这些函数或模块，或者仅用作临时或试验用途。")]),n("li",null,[s(a,{type:"danger",text:"弃用",vertical:"middle"}),t(" 在未来的更新中将很快会被移除或更改。应该在脚本中移除对这些函数的使用，以免后续出现意料之外的问题。")]),n("li",null,[s(a,{type:"tip",text:"v4.1.0+",vertical:"middle"}),t(" 版本号，代表该函数在某个版本加入，v：版本，数字：版本号，+：后续版本")]),n("li",null,[s(a,{type:"tip",text:"Android 7+",vertical:"middle"}),t(" 安卓版本，低于此版本无效果")]),n("li",null,[s(a,{type:"tip",text:"Root",vertical:"middle"}),t(" 基于 Root 运行")]),n("li",null,[s(a,{type:"tip",text:"无障碍",vertical:"middle"}),t(" 基于 无障碍 运行")])]),d])}const v=e(i,[["render",m],["__file","documentation.html.vue"]]),f=JSON.parse('{"path":"/documentation.html","title":"关于本文档","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"images.detectsColor(image, color, x, y[, threshold = 16, algorithm = \\"diff\\"])","slug":"images-detectscolor-image-color-x-y-threshold-16-algorithm-diff","link":"#images-detectscolor-image-color-x-y-threshold-16-algorithm-diff","children":[]},{"level":2,"title":"console.log(data,[...args])","slug":"console-log-data-args","link":"#console-log-data-args","children":[]}],"git":{"updatedTime":1713029763000,"contributors":[{"name":"Lin","email":"yditmxpev@mozmail.com","commits":1}]},"filePathRelative":"documentation.md"}');export{v as comp,f as data};
