# vue3 + ts + vite

## init project

```
yarn create @vitejs/app vue3-ts-vite --template=vue-ts
```

## eslint + prettier

```
npm init @eslint/config
```

## husky + lint-staged + commitlint

```
npm i mrm -D
npx mrm lint-staged
```

## Plugins

- @vitejs/plugin-vue 提供 Vue 3 单文件组件支持
- @vitejs/plugin-vue-jsx 提供 Vue 3 JSX 支持（通过 专用的 Babel 转换插件）
- @vitejs/plugin-legacy 为打包后的文件提供传统浏览器兼容性支持
- vite-plugin-compression 使用 gzip 或者 brotli 来压缩资源
- vite-plugin-style-import
- vite-plugin-mock
- vite-plugin-compression
- vite-plugin-vue-setup-extend
- vite-plugin-environment
- unplugin-vue-components 组件的按需自动导入
- unplugin-auto-import/vite vue3 插件自动引入
- vue-global-api
