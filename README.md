# xiaoyao_mpvue

> A Mpvue project

## Build Setup

``` bash
# 初始化项目

cd xiaoyao_mpvue

# 安装依赖
npm install

# 开发时构建
npm dev

# 启动服务器
cd xiaoyao_server
npm start

#启动项目
cd xiaoyao_mpvue
npm run dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
