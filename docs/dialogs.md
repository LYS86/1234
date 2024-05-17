# 对话框-dialogs

<Badge type="tip" text="稳定" vertical="middle" />
::: note
dialogs 模块提供了简单的对话框支持，可以通过对话框和用户进行交互。
:::

::: tip
对话框在 ui 模式下需使用回调函数或者[Promise][promise]的形式。
```js
"ui";
//回调形式
confirm("要清除所有缓存吗?", null, function (clear) {
  if (clear) {
    alert("清除成功!");
  }
});
//Promise形式
confirm("要清除所有缓存吗?").then((clear) => {
  if (clear) {
    alert("清除成功!");
  }
});
```
:::
## dialogs.alert(title[, content, callback])

<Badge text="global" type="tip"/>

- `title` {string} 对话框的标题。
- `content` {string} 可选，对话框的内容。默认为空。
- `callback` {function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个只包含“确定”按钮的提示对话框。直至用户点击确定脚本才继续运行。    
在 ui 模式下该函数返回一个`Promise`。例如:

```js
"ui";
alert("嘿嘿嘿").then(() => {
  //当点击确定后会执行这里
});
```

## dialogs.confirm(title[, content, callback])

<Badge text="global" type="tip"/>

- `title` {string} 对话框的标题。
- `content` {string} 可选，对话框的内容。默认为空。
- `callback` {function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。
- `return` {boolean}

显示一个包含“确定”和“取消”按钮的提示对话框。如果用户点击“确定”则返回 `true` ，否则返回 `false` 。

在 ui 模式下该函数返回一个`Promise`。

## dialogs.rawInput(title[, prefill, callback])

<Badge text="global" type="tip"/>

- `title` {string} 对话框的标题。
- `prefill` {string} 输入框的初始内容，可选，默认为空。
- `callback` {function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。
- `return` {string}

显示一个包含输入框的对话框，等待用户输入内容，并在用户点击确定时将输入的字符串返回。如果用户取消了输入，返回 null。

在 ui 模式下该函数返回一个`Promise`。

## dialogs.input(title[, prefill, callback])

等效于 `eval(dialogs.rawInput(title, prefill, callback))`, 该函数和 rawInput 的区别在于，会把输入的字符串用 eval 计算一遍再返回，返回的可能不是字符串。

可以用该函数输入数字、数组等。例如：

```js
var age = dialogs.input("请输入您的年龄", "18");
// new Date().getYear() + 1900 可获取当前年份
var year = new Date().getYear() + 1900 - age;
alert("您的出生年份是" + year);
```

在 ui 模式下该函数返回一个`Promise`。

## dialogs.prompt(title[, prefill, callback])

相当于 `dialogs.rawInput()`;

## dialogs.select(title, items, callback)

- `title` {string} 对话框的标题。
- `items` {string[]} 对话框的选项列表，是一个字符串数组。
- `callback` {function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。
- `return` {number}

显示一个带有选项列表的对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。

```js
var options = ["选项A", "选项B", "选项C", "选项D"];
var i = dialogs.select("请选择一个选项", options);
if (i >= 0) {
  toast("您选择的是" + options[i]);
} else {
  toast("您取消了选择");
}
```

在 ui 模式下该函数返回一个`Promise`。

## dialogs.singleChoice(title, items[, index, callback])

- `title` {string} 对话框的标题。
- `items` {string[]} 对话框的选项列表，是一个字符串数组。
- `index` {number} 对话框的初始选项的位置，默认为 0。
- `callback` {function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。
- `return` {number}

显示一个单选列表对话框，等待用户选择，返回用户选择的选项索引(0 ~ item.length - 1)。如果用户取消了选择，返回-1。

在 ui 模式下该函数返回一个`Promise`。

## dialogs.multiChoice(title, items[, indices, callback])

- `title` {string} 对话框的标题。
- `items` {string[]} 对话框的选项列表，是一个字符串数组。
- `indices` {Array} 选项列表中初始选中的项目索引的数组，默认为空数组。
- `callback` {function} 回调函数，可选。当用户点击确定时被调用,一般用于 ui 模式。

显示一个多选列表对话框，等待用户选择，返回用户选择的选项索引的数组。如果用户取消了选择，返回`[]`。

在 ui 模式下该函数返回一个`Promise`。

## dialogs.build(properties)

- `properties` {Object} 对话框属性，用于配置对话框。
- `return` {Dialog}

创建一个可自定义的对话框，例如：

```js
dialogs
  .build({
    //对话框标题
    title: "发现新版本",
    //对话框内容
    content: "更新日志: 新增了若干了BUG",
    //确定键内容
    positive: "下载",
    //取消键内容
    negative: "取消",
    //中性键内容
    neutral: "到浏览器下载",
    //勾选框内容
    checkBoxPrompt: "不再提示",
  })
  .on("positive", () => {
    //监听确定键
    toast("开始下载....");
  })
  .on("neutral", () => {
    //监听中性键
    app.openUrl("https://www.autojs.org");
  })
  .on("check", (checked) => {
    //监听勾选框
    log(checked);
  })
  .show();
```

选项 properties 可供配置的项目为:

- `title` {string} 对话框标题
- `titleColor` {string} | {number} 对话框标题的颜色
- `buttonRippleColor` {string} | {number} 对话框按钮的波纹效果颜色
- `icon` {string} | {Image} 对话框的图标，是一个 URL 或者图片对象
- `content` {string} 对话框文字内容
- `contentColor`{string} | {number} 对话框文字内容的颜色
- `contentLineSpacing`{number} 对话框文字内容的行高倍数，1.0 为一倍行高
- `items` {Array} 对话框列表的选项
- `itemsColor` {string} | {number} 对话框列表的选项的文字颜色
- `itemsSelectMode` {string} 对话框列表的选项选择模式，可以为:
  - `select` 普通选择模式
  - `single` 单选模式
  - `multi` 多选模式
- `itemsSelectedIndex` {number} | {Array} 对话框列表中预先选中的项目索引，如果是单选模式为一个索引；多选模式则为数组
- `positive` {string} 对话框确定按钮的文字内容(最右边按钮)
- `positiveColor` {string} | {number} 对话框确定按钮的文字颜色(最右边按钮)
- `neutral` {string} 对话框中立按钮的文字内容(最左边按钮)
- `neutralColor` {string} | {number} 对话框中立按钮的文字颜色(最左边按钮)
- `negative` {string} 对话框取消按钮的文字内容(确定按钮左边的按钮)
- `negativeColor` {string} | {number} 对话框取消按钮的文字颜色(确定按钮左边的按钮)
- `checkBoxPrompt` {string} 勾选框文字内容
- `checkBoxChecked` {boolean} 勾选框是否勾选
- `progress` {Object} 配置对话框进度条的对象：
  - `max` {number} 进度条的最大值，如果为-1 则为无限循环的进度条
  - `horizontal` {boolean} 如果为 true, 则对话框无限循环的进度条为水平进度条
  - `showMinMax` {boolean} 是否显示进度条的最大值和最小值
- `cancelable` {boolean} 对话框是否可取消，如果为 false，则对话框只能用代码手动取消
- `canceledOnTouchOutside` {boolean} 对话框是否在点击对话框以外区域时自动取消，默认为 true
- `inputHint` {string} 对话框的输入框的输入提示
- `inputPrefill` {string} 对话框输入框的默认输入内容

通过这些选项可以自定义一个对话框，并通过监听返回的 Dialog 对象的按键、输入事件来实现交互。下面是一些例子。

模拟 alert 对话框：

```js
dialogs
  .build({
    title: "你好",
    content: "今天也要元气满满哦",
    positive: "好的",
  })
  .show();
```

模拟 confirm 对话框:

```js
dialogs
  .build({
    title: "你好",
    content: "请问你是笨蛋吗?",
    positive: "是的",
    negative: "我是大笨蛋",
  })
  .on("positive", () => {
    alert("哈哈哈笨蛋");
  })
  .on("negative", () => {
    alert("哈哈哈大笨蛋");
  })
  .show();
```

模拟单选框:

```js
dialogs
  .build({
    title: "单选",
    items: ["选项1", "选项2", "选项3", "选项4"],
    itemsSelectMode: "single",
    itemsSelectedIndex: 3,
  })
  .on("single_choice", (index, item) => {
    toast("您选择的是" + item);
  })
  .show();
```

"处理中"对话框:

```js
var d = dialogs
  .build({
    title: "下载中...",
    progress: {
      max: -1,
    },
    cancelable: false,
  })
  .show();

setTimeout(() => {
  d.dismiss();
}, 3000);
```

输入对话框:

```js
dialogs
  .build({
    title: "请输入您的年龄",
    inputPrefill: "18",
  })
  .on("input", (input) => {
    var age = parseInt(input);
    toastLog(age);
  })
  .show();
```

使用这个函数来构造对话框，一个明显的不同是需要使用回调函数而不能像 dialogs 其他函数一样同步地返回结果；但也可以通过 threads 模块的方法来实现。例如显示一个输入框并获取输入结果为：

```js
var input = threads.disposable();
dialogs
  .build({
    title: "请输入您的年龄",
    inputPrefill: "18",
  })
  .on("input", (text) => {
    input.setAndNotify(text);
  })
  .show();
var age = parseInt(input.blockedGet());
tosatLog(age);
```

# Dialog

`dialogs.build()`返回的对话框对象，内置一些事件用于响应用户的交互，也可以获取对话框的状态和信息。

## Dialog.on(event,callback)
- `event` {string} 要监听的事件
- `callback` {function} 事件触发执行的回调函数

监听事件



| 事件名         | 回调参数                                                     | 描述                                                                           |
|----------------|----------------------------------------------------------|--------------------------------------------------------------------------------|
| `show`         | `dialog` {Dialog}                                        | 对话框显示时触发                                                              |
| `cancel`       | `dialog` {Dialog}                                        | 对话框被取消时触发                                                            |
| `dismiss`      | `dialog` {Dialog}                                        | 对话框消失时触发                                                              |
| `positive`     | `dialog` {Dialog}                                        | 确定按钮按下时触发                                                            |
| `negative`     | `dialog` {Dialog}                                        | 取消按钮按下时触发                                                            |
| `neutral`      | `dialog` {Dialog}                                        | 中性按钮按下时触发                                                            |
| `any`          | `dialog` {Dialog}, `action` {string}                     | 任意按钮按下时触发，`action`可能的值为`positive`、`negative`、`neutral`        |
| `item_select`  | `index` {number}, `item` {Object}, `dialog` {Dialog}     | 对话框列表项目被点击选中时触发，`itemsSelectMode` 为 "select"                  |
| `single_choice`| `index` {number}, `item` {Object}, `dialog` {Dialog}     | 对话框单选列表项目被选中并点击确定时触发，`itemsSelectMode` 为 "single"        |
| `multi_choice` | `indices` {Array}, `items` {Array}, `dialog` {Dialog}    | 对话框多选列表项目被选中并点击确定时触发，`itemsSelectMode` 为 "multi"         |
| `input`        | `text` {string}, `dialog` {Dialog}                       | 带有输入框的对话框点击确定时触发                                              |
| `input_change` | `text` {string}, `dialog` {Dialog}                       | 对话框的输入框文本发生变化时触发                                              |

请根据您的需求选择相应的事件进行使用

## dialog.getProgress()

- 返回 {number}

获取当前进度条的进度值，是一个整数

## dialog.getMaxProgress()

- 返回 {number}

获取当前进度条的最大进度值，是一个整数

## dialog.getActionButton(action)

- `action` {string} 动作，包括:
  - `positive`
  - `negative`
  - `neutral`

[promise]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
