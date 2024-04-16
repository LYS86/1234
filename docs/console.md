# 控制台-console

<Badge type="tip" text="稳定" vertical="middle" />
::: note
该模块提供了一个和 Web 浏览器中相似的用于调试的控制台。用于输出一些调试信息、中间结果等。
:::

## console.show(autoHide)
- `autoHide` {boolean} 当程序结束的时候是否自动隐藏

显示控制台。**需要悬浮窗权限**。

## console.hide()

隐藏控制台悬浮窗。

## console.clear()

清空控制台。

## console.log(...args)
<Badge type="tip" text="global" vertical="middle" />

- `args` {any}

打印到控制台，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 [printf(3)][printf(3)] 中的代替值（参数都会传给 util.format()）。

```js
let  count = 5;
console.log(count);
log(count);
console.log("count: %d", count);
console.log("count:", count, count);
```

详见 util.format()。

## console.verbose(...args)
- `args` {any}

与 console.log 类似，但输出结果以灰色字体显示。输出优先级低于 log，用于输出观察性质的信息。

## console.info(...args)

- `args` {any}


与 console.log 类似，但输出结果以绿色字体显示。输出优先级高于 log, 用于输出重要信息。

## console.warn(...args)

- `args` {any}


与 console.log 类似，但输出结果以蓝色字体显示。输出优先级高于 info, 用于输出警告信息。

## console.error(...args)
<Badge type="tip" text="global" vertical="middle" />

- `args` {any}


与 console.log 类似，但输出结果以红色字体显示。输出优先级高于 warn, 用于输出错误信息。

## console.assert(value, message)

- `value` {any} 要断言的布尔值
- `message` {string} 输出的信息

断言。如果 value 为 false 则输出错误信息 message 并停止脚本运行。

```js
var a = 1 + 1;
console.assert(a == 3, "加法出错啦");
```

## console.time([label='default'])

- `label` {String} 计时器标签

启动一个计时器，用于计算一个操作的持续时间。
计时器由一个唯一的 `label` 标识。
若`label`重复，则会覆盖上一个同名`label`的计时器。  
以同名 `label`调用 `console.timeEnd()` 来停止计时器，并以毫秒为单位将持续时间输出到控制台。

## console.timeEnd([label='default'])

- `label` {String} 计时器标签

停止并删除计时器，并打印结果到控制台。如果不存在标签指定的计时器则会打印 `NaNms`。

```js
console.time("求和");
var sum = 0;
for (let i = 0; i < 100000; i++) {
  sum += i;
}
console.timeEnd("求和");
// 打印 求和: xxx ms
```

## console.trace(...args)

- `args` {any}

与 console.log 类似，同时会打印出调用这个函数所在的调用栈信息（即当前运行的文件、行数等信息）。

## console.input(...args)

- `args` {any}

与console.log一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串用`eval`计算后返回。

**部分机型可能会有控制台不显示输入框的情况，属于 bug。**


## console.rawInput(...args)

- `args` {any}

与 console.log 一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串直接返回。

**部分机型可能会有控制台不显示输入框的情况，属于 bug。**


## console.setSize(w, h)

- `w` {number} 宽度
- `h` {number} 高度

设置控制台的大小，单位像素。


## console.setPosition(x, y)

- `x` {number} 横坐标
- `y` {number} 纵坐标

设置控制台的位置，单位像素。


## console.setGlobalLogConfig(config)

- `config` {Object} 日志配置，可选的项有：
  - `file` {string} 日志文件路径，将会把日志写入该文件中
  - `maxFileSize` {number} 最大文件大小，单位字节，默认为 512 \* 1024 (512KB)
  - `rootLevel` {string} 写入的日志级别，默认为"ALL"（所有日志），可以为"OFF"(关闭), "DEBUG", "INFO", "WARN", "ERROR", "FATAL"等。
  - `maxBackupSize` {number} 日志备份文件最大数量，默认为 5
  - `filePattern` {string} 日志写入格式，参见[PatternLayout][patternlayout]

设置日志保存的路径和配置。例如把日志保存到"/sdcard/1.txt":

```js
console.setGlobalLogConfig({
  file: "/sdcard/1.txt",
});
```

## console.print(...args)
<Badge type="tip" text="global" vertical="middle" />

- `args` {any}

相当于`log`。

## console.setTitle(title,color,size)

<Badge type="tip" text="v4.2.5+" vertical="middle" />

- `title` {string} 标题
- `color` {string} 颜色值 #AARRGGBB
- `size` {number} 标题高度，字号会随高度变化，单位是 dp

设置标题名称，字体颜色，标题栏高度

```js
console.show();
console.setTitle("中文", "#ff11ee00", 30);
console.setTitle("中文");
console.setTitle("中文", "#ff11ee00");
```

## console.setLogSize(size)

<Badge type="tip" text="v4.2.5+" vertical="middle" />

- `size` {number} 字号大小，单位是 dp 或 sp 20 以内比较合适

设置 log 字号大小。**需要在显示控制台之后才能设置，否则空指针**


## console.setCanInput(can)

<Badge type="tip" text="v4.2.5+" vertical="middle" />

- `can` {boolean} 

控制 console 是否可以输入文字


## console.setBackgroud(color)

<Badge type="tip" text="v4.2.5+" vertical="middle" />

- `color` {string} 颜色值 #AARRGGBB

设置 console 背景色,**需要在显示控制台之后才能设置，否则空指针**

```js
console.setBackgroud("#33ef0000");
```

## console.setMaxLines(maxLines)

<Badge type="tip" text="v5.0.2+" vertical="middle" />

- `maxLines` {number} 最大行数

设置 console 显示最大行数，默认-1，不限 ，超出行数系统会清空，从 0 开始显示
不限制，显示列表过长，android 内存又不足，系统会回收 console 的引用，即 console 将不显示。

```js
console.setMaxLines(500);
```
## console.setBackgroud(color)
<Badge type="danger" text="弃用" vertical="middle" />

## console.setBackground(color)

- `color` {string} 颜色值 #AARRGGBB

设置控制台背景色,**需要在显示控制台之后才能设置，否则空指针**

[printf(3)]: http://man7.org/linux/man-pages/man3/printf.3.html
[patternlayout]: http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/PatternLayout.html
