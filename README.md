# 更方便定制element-ui主题

## Start

``` bash
git clone git@github.com:taixw2/make-element-ui-theme.git et
cd et && npm install
```

## Develop

``` bash
# serve with hot reload at localhost:8080
npm run dev

# 这一步会使用webpack检测css的变动以及使用gulp输出编译后的css
# 初次启动会提醒./theme/index.css没有找到，
# 等到 watch element theme 结束后再次刷新就OK了

```

## Build

``` bash
# build for production with minification
npm run build

#会在当前目录生成一个theme目录，直接引用该目录下的Index.css即可
improt ./theme/index.css

```

## 增加自定义变量
1. 使用当期目录下的element-theme-default
  需要修改node_modules/element-theme/lib/config.js中的themePath的路径

2. 或者直接修改node_modules/element-theme-default/中的样式文件
