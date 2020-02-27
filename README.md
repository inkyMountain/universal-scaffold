## 介绍
这是一个新页面模板生成器

🚀 快速：创建一个新页面通常小于2s。

🍉 可扩展：支持自定义模板。一款程序搞定所有项目的模板创建需求。

😄 省心：自动添加日期后缀。

## 初始化
```
git clone git@github.com:inkyMountain/universal-scaffold.git
cd universal-scaffold
npm run setup
```

## 使用例子
在项目**`根目录`**下执行下面的命令。

创建一个名为 nativeGmapSearch20190217 的新页面
```
jm create nativeGmapSearch
```

## 如何定制属于自己的模板
定制方法：
直接修改template中的文件即可，比如修改.tsx文件中的内容，添加常用的图片等。

**程序运行过程**

当你运行 `jm create [pageName] --template ` 时
程序会读取 `--template` 参数，加载 src/template/ 目录下的模板文件，
并将{{pageName}}以及在config.ts中的config.variables中定义的变量作替换操作，输出至
`${config.output}/[pageName]`目录下。
