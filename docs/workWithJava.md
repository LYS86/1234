# WorkWithJava

::: tip 提示
本内容由Ai整理，内容可能存在错误，请注意核查    
原文地址：[Rhino 文档](https://p-bakker.github.io/rhino/tutorials/scripting_java),一个由 Rhino 维护者使用 GitHub Pages 部署的 Rhino 文档网站    
[官方 issues 关于原 Rhino 文档地址 404 的讨论](https://github.com/mozilla/rhino/issues/954#issuecomment-949763810)
:::

本文展示了如何使用Rhino超越JavaScript进入Java的世界。Scripting Java有许多用途。它允许我们通过利用许多可用的Java库快速编写强大的脚本。我们可以通过编写脚本来测试Java类。我们还可以使用脚本辅助Java开发，用于探索性编程。探索性编程是通过编写使用它的快速程序来了解库或API的功能的过程。正如我们将看到的，脚本使这个过程变得更容易。

注意，ECMA标准没有涵盖与Java（或任何外部对象系统）的通信。因此，本章涵盖的所有功能都应被视为扩展。


## 访问Java包和类

每段Java代码都是一个类的一部分。每个Java类都是一个包的一部分。然而，在JavaScript中，脚本存在于任何包层次结构之外。那么，我们如何访问Java包中的类呢？

Rhino定义了一个名为`Packages`的顶级变量。`Packages`变量的属性是所有顶级Java包，如`java`和`com`。例如，我们可以访问`java`包的值：

```javascript
js> Packages.java
[JavaPackage java]
```

作为便捷的快捷方式，Rhino定义了一个等同于`Packages.java`的顶级变量`java`。因此，前面的示例可以更简短：

```javascript
js> java
[JavaPackage java]
```

我们可以通过沿着包层次结构向下访问Java类：

```javascript
js> java.io.File
[JavaClass java.io.File]
```

如果你的脚本经常访问许多不同的Java类，每次都使用类的完整包名称可能会变得尴尬。Rhino提供了一个名为`importPackage`的顶级函数，其作用与Java的`import`声明相同。例如，我们可以导入`java.io`包中的所有类，并仅使用名称`File`访问类`java.io.File`：

```javascript
js> importPackage(java.io)
js> File
[JavaClass java.io.File]
```

这里`importPackage(java.io)`使`java.io`包中的所有类（如`File`）在顶层可用。它的效果等同于Java声明`import java.io.*;`。

需要注意的是，Java隐式地导入`java.lang.*`，而Rhino则不这样做。原因是JavaScript有自己的顶级对象`Boolean`、`Math`、`Number`、`Object`和`String`，它们与`java.lang`包中定义的类不同。由于这个冲突，最好不使用`importPackage`导入`java.lang`包。

需要注意的一件事是Rhino在指定Java包或类名时的错误处理。如果访问了`java.MyClass`，Rhino尝试加载一个名为`java.MyClass`的类。如果加载失败，它假设`java.MyClass`是一个包名，并且不会报告错误：

```javascript
js> java.MyClass
[JavaPackage java.MyClass]
```

只有当你尝试将此对象用作类时，才会报告错误。

### 外部包和类

外部包和类也可以在Rhino中使用。确保你的`.jar`或`.class`文件在你的类路径上，然后你可以将它们导入到你的JavaScript应用程序中。这些包可能不在`java`包中，因此你需要在包名前加上“`Packages.`”。例如，要导入`org.mozilla.javascript`包，你可以使用`importPackage()`如下：

```javascript
$ java org.mozilla.javascript.tools.shell.Main
js> importPackage(Packages.org.mozilla.javascript);
js> Context.currentContext;
org.mozilla.javascript.Context@bb6ab6
```

有时，你会看到示例使用包的完全限定名而不是使用`importPackage()`方法导入。这也是可以接受的，只是需要更多的打字。使用完全限定名，上述示例将如下所示：

```javascript
$ java org.mozilla.javascript.tools.shell.Main
js> jsPackage = Packages.org.mozilla.javascript;
[JavaPackage org.mozilla.javascript]
js> jsPackage.Context.currentContext;
org.mozilla.javascript.Context@bb6ab6
```

或者，如果你想从包中只导入一个类，你可以使用`importClass()`方法。上述示例可以表示为：

```javascript
$ java org.mozilla.javascript.tools.shell.Main
js> importClass(Packages.org.mozilla.javascript.Context);
js> Context.currentContext;
org.mozilla.javascript.Context@bb6ab6
```

## 使用Java

现在我们可以访问Java类了，下一个合乎逻辑的步骤是创建一个对象。这和Java中的操作一样，使用`new`运算符：

```javascript
js> new java.util.Date()
Thu Jan 24 16:18:17 EST 2002
```

如果我们将新对象存储在JavaScript变量中，然后我们可以在其上调用方法：

```javascript
js> f = new java.io.File("test.txt")
test.txt
js> f.exists()
true
js> f.getName()
test.txt
```

静态方法和字段可以从类对象本身访问：

```javascript
js> java.lang.Math.PI
3.141592653589793
js> java.lang.Math.cos(0)
1
```

在JavaScript中，与Java不同，方法本身是一个对象，可以被评估也可以被调用。如果我们只查看方法对象本身，我们可以看到方法的各种重载形式：

```javascript
js> f.listFiles
function listFiles() {/* 
java.io.File[] listFiles()
java.io.File[] listFiles(java.io.FilenameFilter)
java.io.File[] listFiles(java.io.FileFilter)
*/}
```

此输出显示`File`类定义了三个重载方法`listFiles`：一个不接受参数的，另一个带有`FilenameFilter`参数的，以及第三个带有`FileFilter`参数的。所有方法都返回一个`File`对象数组。能够查看Java方法的参数和返回类型在探索性编程中特别有用，在那里我们可能正在调查一个方法，并且不确定参数或返回类型。

探索性编程的另一个有用功能是能够查看为对象定义的所有方法和字段。使用JavaScript的`for..in`构造，我们可以打印出所有这些值：

```javascript
js> for (i in f) { print(i) }
exists
parentFile
mkdir
toString
wait
_[44 others]_
```

不仅列出了`File`类的方法，还列出了从基类`java.lang.Object`继承的方法（如`wait`）。这使得在处理深层继承层次结构中的对象时更加容易，因为你可以看到该对象可用的所有方法。

Rhino通过允许直接通过属性名称访问JavaBeans的属性提供了另一个便利。一个名为`foo`的JavaBean属性由`getFoo`和`setFoo`方法定义。同样，一个同名的布尔属性可以通过`isFoo`方法定义。例如，以下代码实际上调用了`File`对象的`getName`和`isDirectory`方法。

```javascript
js> f.name
test.txt
js> f.directory
false
```

## 调用重载方法

基于参数类型选择要调用的方法的过程称为_重载解析_。在Java中，重载解析是在编译时执行的，而在Rhino中则是在运行时执行的。鉴于JavaScript使用动态类型，这个差异是不可避免的，如第2章所讨论的：由于变量的类型直到运行时才知道，只有在那时才能进行重载解析。

作为一个例子，考虑以下Java类，它定义了许多重载方法并调用它们。

```java
public class Overload {
    public String f(Object o) { return "f(Object)"; }
    public String f(String s) { return "f(String)"; }
    public String f(int i) { return "f(int)"; }

    public String g(String s, int i) { return "g(String,int)"; }
    public String g(int i, String s) { return "g(int,String)"; }

    public static void main(String[] args) {
        Overload o = new Overload();
        Object[] a = new Object[] { new Integer(3), "hi", Overload.class };
        for (int i = 0; i != a.length; ++i)
            System.out.println(o.f(a[i]));
    }
}
```

当我们编译并执行程序时，它产生以下输出：

```
f(Object)
f(Object)
f(Object)
```

然而，如果我们编写一个类似的脚本

```javascript
var o = new Packages.Overload();
var a = [3, "hi", Packages.Overload];
for (var i = 0; i != a.length; ++i)
    print(o.f(a[i]));
```

并执行它，我们得到以下输出：

```
f(int)
f(String)
f(Object)
```

因为Rhino在运行时选择重载方法，它会调用与参数更匹配的更具体类型。与此同时，Java在编译时根据参数类型选择重载方法。

尽管这有利于为每个调用选择可能更匹配的方法，但它确实对性能有影响，因为每次调用都需要做更多的工作。在实际应用中 

Kimi: ，这种性能成本并不明显。

由于重载解析发生在运行时，它可能在运行时失败。例如，如果我们用两个整数调用`Overload`的方法`g`，我们会得到一个错误，因为两种形式的方法都不比另一种更接近于参数类型：

```javascript
js> o.g(3,4)
js:"<stdin>", line 2: The choice of Java method Overload.g
matching JavaScript argument types (number,number) is ambiguous;
candidate methods are:
class java.lang.String g(java.lang.String,int)
class java.lang.String g(int,java.lang.String)
```

有关重载语义的更精确定义，请参见Java方法重载和LiveConnect 3。

## 实现Java接口

现在我们可以访问Java类，创建Java对象，并访问这些对象的字段、方法和属性，我们手中有了很大的力量。然而，在一些情况下，这还不够：Java中的许多API通过提供接口来工作，客户端必须实现这些接口。一个例子是`Thread`类：它的构造函数接受一个`Runnable`，其中包含一个将在新线程启动时调用的单一方法`run`。

为了满足这一需求，Rhino提供了创建实现接口的新Java对象的能力。首先，我们必须用与Java接口所需的方法名称相匹配的函数属性定义一个JavaScript对象。要实现`Runnable`，我们只需要定义一个不带参数的单一方法`run`。如果你还记得第3章，可以使用`{propertyName: value}`表示法定义一个带有`run`方法的JavaScript对象。我们可以在这里结合函数表达式使用该语法：

```javascript
js> obj = { run: function () { print("\nrunning"); } }
[object Object]
js> obj.run()
running
```

现在，我们可以通过构造一个`Runnable`来创建一个实现`Runnable`接口的对象：

```javascript
js> r = new java.lang.Runnable(obj);
[object JavaObject]
```

在Java中，不可能在接口上使用`new`运算符，因为没有可用的实现。这里Rhino从JavaScript对象`obj`中获取实现。现在我们有了一个实现`Runnable`的对象，我们可以创建一个`Thread`并运行它。我们为`run`定义的函数将在新线程上被调用。

```javascript
js> t = new java.lang.Thread(r)
Thread[Thread-2,5,main]
js> t.start()
js>
running
```

最终的`js`提示和新线程的输出可能出现在任何顺序，这取决于线程调度。

在幕后，Rhino为实现`Runnable`的新Java类生成字节码，并将所有调用转发到其`run`方法的关联JavaScript对象。实现此类的对象称为_Java适配器_。因为转发到JavaScript发生在运行时，所以可能延迟定义实现接口的方法，直到它们被调用。虽然省略必需的方法对于大型编程来说是不良实践，但对于小型脚本和探索性编程来说很有用。

## JavaAdapter构造函数

在前一节中，我们使用Java接口和`new`运算符创建了Java适配器。这种方法有其局限性：无法实现多个接口，也不能扩展非抽象类。因此，有一个`JavaAdapter`构造函数。

`JavaAdapter`构造函数的语法是：

```javascript
new JavaAdapter(javaIntfOrClass, [javaIntf, ..., javaIntf,] javascriptObject)
```

这里`javaIntfOrClass`是要实现的接口或要扩展的类，`javaIntf`是额外要实现的接口。`javascriptObject`是包含将从Java适配器调用的方法的JavaScript对象。

实践中很少需要直接调用`JavaAdapter`构造函数。大多数时候，使用`new`运算符的先前语法就足够了。

> 要使用JavaAdapter特性或优化级别为0或更高，Rhino必须在允许定义类加载器的安全管理器下运行。

## JavaScript函数作为Java接口

通常我们需要实现只有一个方法的接口，如前一个`Runnable`示例或提供各种事件侦听器实现时。为了便于此，Rhino允许在期望此类接口时传递JavaScript函数。该函数被调用为接口方法的实现。

这是一个简化的`Runnable`示例：

```javascript
js> t = java.lang.Thread(function () { print("\nrunning"); });
Thread[Thread-0,5,main]
js> t.start()
js>
running
```

Rhino还允许使用JavaScript函数作为具有多个方法的Java接口的实现，如果所有方法具有相同的签名。在调用函数时，Rhino将方法的名称作为额外的参数传递。函数可以使用它来区分它是被哪个方法调用的：

```javascript
js> var frame = new Packages.javax.swing.JFrame();
js> frame.addWindowListener(function(event, methodName) {
        if (methodName == "windowClosing") {
            print("Calling System.exit()...");
            java.lang.System.exit(0);
        }
    });
js> frame.setSize(100, 100);
js> frame.visible = true;
true
js> Calling System.exit()...
```

## 创建Java数组

Rhino没有为创建Java数组提供特殊语法。您必须使用`java.lang.reflect.Array`类为此目的服务。要创建一个包含五个Java字符串的数组，您将进行以下调用：

```javascript
js> a = java.lang.reflect.Array.newInstance(java.lang.String, 5);
[Ljava.lang.String;@7ffe01
```

要创建原始类型的数组，我们必须使用`java.lang`包中相关对象类中定义的特殊TYPE字段。例如，要创建一个字节数组，我们必须使用特殊字段`java.lang.Byte.TYPE`：

```javascript
js> a = java.lang.reflect.Array.newInstance(java.lang.Character.TYPE, 2);
[C@7a84e4
```

然后可以在任何允许该类型Java数组的地方使用结果值。

```javascript
js> a[0] = 104
104
js> a[1] = 105
105
js> new java.lang.String(a)
hi
```

## Java字符串和JavaScript字符串

需要牢记的是，Java字符串和JavaScript字符串是**不同的**。Java字符串是类型`java.lang.String`的实例，并具有该类定义的所有方法。JavaScript字符串具有`String.prototype`定义的方法。最常见的陷阱是`length`，它是Java字符串的一个方法，也是JavaScript字符串的一个动态属性：

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

Rhino在减少两种类型之间的差异方面提供了一些帮助。首先，您可以将JavaScript字符串传递给需要Java字符串的Java方法，Rhino将执行转换。我们实际上在前面示例中的`java.lang.String`构造函数调用中看到了这个特性。

Rhino还允许将JavaScript方法提供给Java字符串，如果java.lang.String类尚未定义它们。例如：

```javascript
js> javaString.match(/a.*/)
ava
```

## JavaImporter构造函数

`JavaImporter`是一个新全局构造函数，允许在脚本Java时省略显式的包名称：

```javascript
var SwingGui = JavaImporter(Packages.javax.swing,
                            Packages.javax.swing.event,
                            Packages.javax.swing.border,
                            java.awt.event,
                            java.awt.Point,
                            java.awt.Rectangle,
                            java.awt.Dimension);
...
with (SwingGui) {
    var mybutton = new JButton(test);
    var mypoint = new Point(10, 10);
    var myframe = new JFrame();
...
}
```

以前，这种功能仅适用于使用`org.mozilla.javascript.ImporterTopLevel`类作为顶级作用域的嵌入。该类为脚本提供了额外的`importPackage()`和`importClass()`全局函数，但它们的广泛使用倾向于用Java类的名称污染全局名称空间，并防止加载的类进行垃圾回收。

有关详细信息，请参见Bugzilla 245882。

## Java异常

Java方法抛出的异常可以被JavaScript代码使用try...catch语句捕获。Rhino将Java异常包装在具有以下属性的错误对象中：

- `javaException`：Java方法抛出的原始异常
- `rhinoException`：由Rhino运行时包装的异常

`instanceof`运算符可以用来查询异常的类型：

```javascript
try {
    java.lang.Class.forName("NonExistingClass");
} catch (e) {
    if (e.javaException instanceof java.lang.ClassNotFoundException) {
       print("Class not found");
    }
}
```

Rhino还支持try...catch语句的扩展，允许定义条件捕获异常：

```javascript
function classForName(name) {
    try {
        return java.lang.Class.forName(name);
    } catch (e if e.javaException instanceof java.lang.ClassNotFoundException) {
        print("Class " + name + " not found");
    } catch (e if e.javaException instanceof java.lang.NullPointerException) {
        print("Class name is null");
    }
}

classForName("NonExistingClass");
classForName(null);
```

## 限制

### LiveConnect

如果JavaObject的字段名称与方法名称冲突，该字段的值将被延迟检索，并且可能会被后续赋值以反直觉的方式影响：

```javascript
javaObj.fieldAndMethod = 5;
var field = javaObj.fieldAndMethod;
javaObj.fieldAndMethod = 7;
// now, field == 7
```

你可以通过在获取其值时强制将字段值转换为JavaScript类型来解决这个问题：

```javascript
javaObj.fieldAndMethod = 5;
var field = javaObj.fieldAndMethod + 0; // force conversion now
javaObj.fieldAndMethod = 7;
// now, field == 5
```

### JSObject

Rhino **不支持** `netscape.javascript.JSObject` 类。 

