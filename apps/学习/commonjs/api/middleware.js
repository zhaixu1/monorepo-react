class Middleware {
    constructor() {
        this.middlewares = [];
    }

    use(middleware) {
        this.middlewares.push(middleware);
    }


    run(ctx) {
        debugger
        const finalNext = async () => {
            console.log('执行finalNext');
            return ctx
        }
        debugger
        const middlewareChain = this.middlewares.reduceRight((next, middleware) => {
            console.log('next', next);
            console.log('middleware', middleware);
            
            return async () => {
                await middleware(ctx, next);
            }
        }, finalNext)

        console.log('middlewareChain', middlewareChain);
        

        return middlewareChain()
    }

}


const app = new Middleware();

app.use(async (ctx, next) => {
    console.log('middleware 1');
    next()
})

app.use(async (ctx, next) => {
    console.log('middleware 2');
     next();
})


app.run({
    name: '张三'
})