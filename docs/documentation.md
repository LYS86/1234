
# 关于本文档

文档中使用一些标签来标记状态：

- <Badge type="tip" text="稳定" vertical="middle" /> 一般不会被更改，并且会保证后向兼容性
- <Badge type="warning" text="实验" vertical="middle" /> 可能会更改或移除。应该谨慎使用这些函数或模块，或者仅用作临时或试验用途。
- <Badge type="danger" text="弃用" vertical="middle" /> 被移除或更改。应该移除对这些函数的使用，以免后续出现意料之外的问题。
- <Badge type="tip" text="v4.1.0+" vertical="middle" /> 版本号，代表该函数在某个版本加入
- <Badge type="tip" text="Android 7+" vertical="middle" /> 安卓版本，低于此版本无效果
- <Badge type="tip" text="Root" vertical="middle" /> 基于 Root 运行
- <Badge type="tip" text="Accessibility" vertical="middle" /> 基于 无障碍 运行
- <Badge type="tip" text="global" vertical="middle" /> 此函数可全局使用


## 开发环境搭建
  
::: important 插件信息
名称: [Auto.js-Autox.js-VSCodeExt](https://marketplace.visualstudio.com/items?itemName=aaroncheng.auto-js-vsce-fixed)   
ID: aaroncheng.auto-js-vsce-fixed   
说明: 用于在pc上vscode中开发autoxjs的自动化脚本的插件。结合webpack自动编译，js自动运行到手机    
版本: 1.110.0   
发布者: aaron cheng 
:::
1.确保您的计算机上安装了 Visual Studio Code，Git ，Node.js。    
2.打开 Visual Studio Code。     
3.点击左侧的扩展图标或按 Ctrl+Shift+X 打开扩展市场。    
4.在搜索框中输入 "aaroncheng.auto-js-vsce-fixed"。  
5.找到插件并进行安装。  
6.下载[webpack-autojs](https://github.com/kkevsekk1/webpack-autojs/archive/refs/heads/master.zip)项目，使用vscode打开项目，在终端中输入以下命令：

```bash
npm i -g webpack webpack-cli --registry=https://registry.npmmirror.com
npm install --registry=https://registry.npmmirror.com 
```

```
- webpack-autojs
    -common             <-- 公共文件
    -types              <-- 代码提示
    -work               <-- 项目文件
    -scriptConfig.js    <-- 配置文件
    -header.txt         <-- 头部文件
    -package.json       <-- 配置文件
    -dist               <-- 编译输出
   
```
我们在 work 目录中新建项目进行开发，编译配置在 scriptConfig.js 中，按照注释修改。   
header.txt 文件内容会原封不动的添加到编译后的js代码头部，可以用来添加注释。   
package.json 文件规定 npm run start 和 npm run build 的命令，无需修改。 

## 代码开发

1. **开启服务**：
   - 在 VSCode 的命令面板中（可以通过按 `Ctrl+Shift+P` 快捷键打开），输入 `开启服务`或`开启服务并监听adb设备` 并选择它。

2. **连接手机**：
   - 确保您的 Android 设备已经开启 USB 调试模式，手机和电脑处于同一 Wi-Fi 网络下。
   - 在 Auto.js 侧边栏中启用连接电脑，然后输入 VSCode 显示的 IP 地址进行连接。
   - 如果使用 USB 连接，确保手机开启了 USB 调试，并使用数据线连接电脑。VSCode 插件将自动识别连接的设备。

3: **运行命令**

在 VSCode 的终端中，导航到您的项目目录，然后运行以下命令来启动开发服务器：

```bash
npm run start
```

- **自动运行**：
  - 如果 `scriptConfig.js` 中的 `watch` 配置设置为 `'rerun'`，每当您保存文件时，VSCode 将自动在连接的 Android 设备上运行最新的脚本。

- **自动部署**：
  - 如果 `scriptConfig.js` 中的 `watch` 配置设置为 `'deploy'`，每当您保存文件时，VSCode 将自动将重新编译的项目保存到手机中。




