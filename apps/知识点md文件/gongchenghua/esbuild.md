# esbuild

vite 使用esbuild 进行本地构建， 运行模块打包，编译，压缩操作 =》 预构建

1. 极速构建 go 编写，可以多核线程编译
    - 功能全面，支持打包，压缩ts jsx source map css
    - go 线程之间同享内容空间，更高效的内存使用率，更高效的运行性能。
2. 全量定制：比如使用babel进行转换，使用terser进行压缩，使用postcss进行css转换

esbuild 尽可能减少string 到ast的转换 

## 相关配置/

1. build 构建,一次性构建
2. context 持久化构建上下文，开发环境下可以监听文件变化，进行增量构建，提升性能  ctx.rebuild()
3. watch 监听文件变化，进行增量构建 await ctx.watch()
4. serve 启动服务，进行开发环境构建
5. loader 自定义加载器,开启对应配置
6. plugins 自定义插件
