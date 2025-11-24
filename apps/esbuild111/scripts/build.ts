const esbuild = require('esbuild');
const path = require('path');

// 通用配置
const commonConfig = {
    entryPoints: [path.resolve(__dirname, '../src/index.ts')],
    bundle: true, // 开启打包
    minify: true, // 开启压缩
    sourcemap: true, // 开启源码映射
    target: 'esnext', // 目标浏览器
    plugins: [], // 插件
}

async function build() {
    console.log('构建中...');

    try{
        await esbuild.build({
            ...commonConfig,
            format: 'cjs',
            outfile: 'dist/index.js'
        });

        await esbuild.build({
            ...commonConfig,
            format: 'esm',
            outfile: 'dist/index.esm.js'
        })
        console.log('构建成功');
    }catch(error){
        console.error('构建失败', error);
        process.exit(1);
    }
}

if(process.argv.includes('--watch')){
    build();
}else{
    build();
}