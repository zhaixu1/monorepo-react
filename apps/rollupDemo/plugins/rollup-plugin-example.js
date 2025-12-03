// 自定义插件
export default function rollupPluginExample() {
    return {
        name: 'my-rollup-plugin',
        resolveId( source ) {
            if(source === 'virtual-module') {
                return source;
            }
            return null;
        },
        load( id ) {
            if(id === 'virtual-module') {
                return 'export default "This is a virtual module";';
            }
            return null;
        },
    }
}