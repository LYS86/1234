import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";


export default defineUserConfig({
  lang: 'zh-CN',

  title: 'AutoX',
  description: 'AutoX 文档',

  theme: defaultTheme({
    logo: './logo.png',
    repo: "https://github.com/kkevsekk1/AutoX",
    navbar: [
      {
        text: "API", 
        children: [
          {
            "text": "应用交互-app",
            "link": "app.md"
          },
          {
            "text": "Base64 编码",
            "link": "base64.md"
          },
          {
            "text": "Canvas",
            "link": "canvas.md"
          },
          {
            "text": "颜色-colors",
            "link": "colors.md"
          },
          {
            "text": "控制台-console",
            "link": "console.md"
          },
          {
            "text": "协程",
            "link": "continuation.md"
          },
          {
            "text": "基于坐标的触摸模拟",
            "link": "coordinatesBasedAutomation.md"
          },
          {
            "text": "加密-crypto",
            "link": "crypto.md"
          },
          {
            "text": "设备信息-device",
            "link": "device.md"
          },
          {
            "text": "对话框-dialogs",
            "link": "dialogs.md"
          },
          {
            "text": "关于本文档",
            "link": "documentation.md"
          },
          {
            "text": "脚本引擎-engines",
            "link": "engines.md"
          },
          {
            "text": "事件与监听-events",
            "link": "events.md"
          },
          {
            "text": "文件系统-files",
            "link": "files.md"
          },
          {
            "text": "悬浮窗-floaty",
            "link": "floaty.md"
          },
          {
            "text": "全局变量与函数",
            "link": "globals.md"
          },
          {
            "text": "ML kit OCR",
            "link": "gmlkit.md"
          },
          {
            "text": "网络请求-http",
            "link": "http.md"
          },
          {
            "text": "图色模块-Images",
            "link": "images.md"
          },
          {
            "text": "按键模拟",
            "link": "keys.md"
          },
          {
            "text": "多媒体-media ",
            "link": "media.md"
          },
          {
            "text": "module (模块)",
            "link": "modules.md"
          },
          {
            "text": "综述 ",
            "link": "overview.md"
          },
          {
            "text": "paddle",
            "link": "paddle.md"
          },
          {
            "text": "Q & A",
            "link": "qa.md"
          },
         
          {
            "text": "传感器-sensors",
            "link": "sensors.md"
          },
          {
            "text": "shell 函数",
            "link": "shell.md"
          },
          {
            "text": "Storages",
            "link": "storages.md"
          },
          {
            "text": "Tessract/>",
            "link": "Tessract.md"
          },
          {
            "text": "线程-threads",
            "link": "threads.md"
          },
          {
            "text": "Timer - 定时器",
            "link": "timers.md"
          },
          {
            "text": "用户界面: UI ",
            "link": "ui.md"
          },
          {
            "text": "Util",
            "link": "util.md"
          },
          {
            "text": "websocket",
            "link": "websocket.md"
          },
          {
            "text": "WebView 与 HTML",
            "link": "webViewAndHtml.md"
          },
          {
            "text": "基于控件的操作",
            "link": "widgetsBasedAutomation.md"
          },
          {
            "text": "WorkWithJava",
            "link": "workWithJava.md"
          },
          {
            "text": "压缩与解压",
            "link": "zips.md"
          }
        ]
      },
      {
        text: "文档",
        link: "/documentation.md",
      },
      {
        text: "简介",
        link: "/overview.md",
      },
    ],


  }),



  bundler: viteBundler(),

  plugins: [
    mdEnhancePlugin({
      // 你的选项
      hint: true,
    }),
  ],
});
