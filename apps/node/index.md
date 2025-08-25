#

## 浏览器内核

### 浏览器内核都有哪些
1. webkit  用于Safari，Google Chrome之前也在使用
2. blink  是Webkit的一个分支，Google开发，目前应用于Google Chrome、Edge、Opera等；

### 浏览器内核和JS引擎的关系
浏览器内核包含JS引擎

### JS引擎有哪些
JSCore, V8 分别对应webkit 和 Blink

#### V8的工作原理
Parse(解析器)、lgnition(解释器)、TurboFan(优化编译器)都是V8引擎的内置模块


Parse模块会将JavaScript代码转换成AST（抽象语法树），这是因为解释器并不直接认识JavaScript代码；
Ignition是一个解释器，会将AST转换成ByteCode（字节码）；
TurboFan是一个编译器，可以将字节码编译为CPU可以直接执行的机器码；


## 全局对象

### global对象
nodejs的顶层对象是 global， 浏览器的顶层对象是window

### process 对象

process.env 
process.argv: 命令行参数数组






