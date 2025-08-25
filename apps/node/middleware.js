class Middleware {
    constructor() {
      this.middlewares = [];
    }
  
    use(fn) {
      this.middlewares.push(fn);
    }
  
    run(req, res) {
  
    // 目标：将中间件数组转换为嵌套的函数链，后续中间件作为参数 (next) 传递给前一个中间件。
      // [m1, m2, m3]
      // m3(m2(m1))
      const chain = this.middlewares.reduceRight(
        (next, middleware) => () => middleware(req, res, next),
        () => res.end('Not Found')
      );
      chain();
    }
  }
  
  // 使用示例
  const app = new Middleware();
  app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
  });
  app.use((req, res) => {
    res.end('Hello from Middleware');
  });
  
  const server = http.createServer((req, res) => app.run(req, res)).listen(3000, () => {
      console.log('3000')
    });



    