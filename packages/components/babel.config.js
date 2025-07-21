module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
        '@babel/preset-typescript', // 使用ts
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        'babel-plugin-styled-components', // 使用 styled-components
    ],
}