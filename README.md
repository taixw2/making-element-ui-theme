# 更方便定制element-ui主题

饿了么提供了许多优秀的组件，但是其组件的风格一直备受诟病，
于是基于element-ui提供的主题工具，`./element-theme` `element-theme-default`
对几乎所有组件的尺寸进行了缩小，以及对色彩线条阴影等进行了些许调整。


## 开始

``` bash
git clone git@github.com:taixw2/make-element-ui-theme.git et
cd et && npm install
```

## 开发模式

``` bash
npm run dev

# 这一步会使用webpack检测css的变动以及使用gulp输出编译后的css
# 初次启动会提示 ./theme/index.css错误，可以忽略这个错误，因为此时gulp还没有编译编译完成，

```

## 生成

``` bash
npm run build

#会在dest目录生成一个theme目录，直接引用该目录下的index.css即可
improt ./dist/theme/index.css

```

## 增加自定义变量
1. 使用当期目录下的element-theme-default
  需要修改node_modules/element-theme/lib/config.js中的themePath的路径

2. 或者直接修改node_modules/element-theme-default/中的样式文件


## 主题预览 ：
[https://taixw2.github.io/element-ui/index.html#/form](https://taixw2.github.io/element-ui/index.html#/form)
## 引入该主题
#### 安装
``` bash
npm install element-thin-ui --save
```
#### 引入
``` bash
require("element-thin-ui/index.css");
#或者
import "element-thin-ui/index.css";
```
