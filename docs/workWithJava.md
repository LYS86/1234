# WorkWithJava

::: tip 提示
本内容由Ai整理，内容可能存在错误，请注意核查    
原文地址：[Rhino 文档](https://p-bakker.github.io/rhino/),一个由 Rhino 维护者使用 GitHub Pages 部署的 Rhino 文档网站    
[官方 issues 关于原 Rhino 文档地址 404 的讨论](https://github.com/mozilla/rhino/issues/954#issuecomment-949763810)
:::


# Scripting Java with Rhino

Rhino是一个JavaScript引擎，它允许JavaScript代码与Java代码相互操作。以下是使用Rhino进行Java脚本编程的一些关键点。

## 访问Java包和类

在JavaScript中，脚本存在于任何包层级之外。Rhino定义了一个名为`Packages`的顶层变量，它包含了所有顶级Java包，例如`java`和`com`。

```javascript
js> Packages.java
[JavaPackage java]

js> java
[JavaPackage java]
```

可以使用`importPackage`函数来导入整个包中的所有类，类似于Java中的`import`声明。

```javascript
js> importPackage(java.io)
js> File
[JavaClass java.io.File]
```

## 与Java一起工作

创建Java对象的方式与Java中相同，使用`new`操作符。

```javascript
js> new java.util.Date()
Thu Jan 24 16:18:17 EST 2002
```

可以调用对象的方法：

```javascript
js> f = new java.io.File("test.txt")
test.txt
js> f.exists()
true
js> f.getName()
test.txt
```

静态方法和字段可以直接从类对象本身访问。

```javascript
js> java.lang.Math.PI
3.141592653589793
js> java.lang.Math.cos(0)
1
```

## 调用重载方法

Rhino在运行时执行重载解析，根据传递给方法的参数类型选择最合适的方法。

## 实现Java接口

Rhino允许使用JavaScript对象来实现Java接口。

```javascript
js> obj = { run: function () { print("\nrunning"); } }
[object Object]

js> r = new java.lang.Runnable(obj);
[object JavaObject]
```

## JavaAdapter构造函数

`JavaAdapter`构造函数允许实现一个接口或扩展一个类，并提供一个JavaScript对象来包含将被Java适配器调用的方法。

## JavaScript函数作为Java接口

Rhino允许将JavaScript函数作为Java接口的实现。

```javascript
js> t = java.lang.Thread(function () { print("\nrunning"); });
Thread[Thread-0,5,main]
js> t.start()
```

## 创建Java数组

Rhino没有为创建Java数组提供特殊语法，必须使用`java.lang.reflect.Array`类。

```javascript
js> a = java.lang.reflect.Array.newInstance(java.lang.String, 5);
[Ljava.lang.String;@7ffe01
```

## Java字符串和JavaScript字符串

Java字符串和JavaScript字符串不是相同的。Java字符串是`java.lang.String`类型的实例，而JavaScript字符串具有`String.prototype`定义的方法。

```javascript
js> javaString = new java.lang.String("Java")
Java
js> jsString = "JavaScript"
JavaScript
js> javaString.length()
4
js> jsString.length
10
```

## JavaImporter构造函数

`JavaImporter`是一个全局构造函数，它允许在脚本Java时省略显式的包名。

```javascript
var SwingGui = JavaImporter(Packages.javax.swing, ...);
with (SwingGui) {
    var mybutton = new JButton(test);
    var mypoint = new Point(10, 10);
    var myframe = new JFrame();
    ...
}
```

## Java异常

Java方法抛出的异常可以被JavaScript代码捕获。

```javascript
try {
    java.lang.Class.forName("NonExistingClass");
} catch (e) {
    if (e.javaException instanceof java.lang.ClassNotFoundException) {
       print("Class not found");
    }
}
```

## 限制

### LiveConnect

如果Java对象的字段名与方法名冲突，该字段的值将被延迟检索，并且可能会被后续赋值影响。

### JSObject

Rhino不支持`netscape.javascript.JSObject`类。
