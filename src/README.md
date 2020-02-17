## 介绍
这是一个新页面模板生成器

🚀 快速：创建一个新页面通常小于2s。

🍉 可扩展：支持自定义模板。一款程序搞定所有项目的模板创建需求。

😄 省心：自动添加日期后缀。

## 初始化
```shell script
git clone http://git.jollycorp.com:8088/2652/jollymart-cli.git
cd jollymart-cli
npm run setup
```

## 使用例子
在项目**`根目录`**下执行下面的命令。

创建一个名为 nativeGmapSearch20190217 的Jollymart新页面
```shell script
jm create nativeGmapSearch
```

创建一个名为 nativeGmapSearch20190217 的Jollymart新页面
```shell script
jm create nativeGmapSearch
```

选项：

以上所有命令中，jm`可以被替换为 `jollymart` `jc` `jollychic` 中的任意一个。

## 如何定制属于自己的模板
定制方法：
直接修改template中的文件即可，比如修改.tsx文件中的内容，添加常用的图片等。

**程序运行过程**
当你运行 `jm create [pageName] --template jollymart` 时
程序会读取 `--template` 参数，加载 jollymart-cli/src/template/jollymart 目录下的模板文件，
并将{{pageName}}以及在config.ts中的config.variables中定义的变量作替换操作，输出至
`${config.output}/[pageName]`目录下。

