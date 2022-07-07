import { defineConfig, ConfigEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
  return {
    plugins: [
      vue(),
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      // script setup语法糖增强插件
      VueSetupExtend(),
      AutoImport({
        // targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: ['vue', 'vue-router'],
        // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
        // dts: 'src/auto-import.d.ts'
        // custom resolvers
        // 可以在这自定义自己的东西，比如接口api的引入，工具函数等等
        // see https://github.com/antfu/unplugin-auto-import/pull/23/
        resolvers: [
          /* ... */
        ],
        // 声明文件生成位置和文件名称
        dts: './src/auto-imports.d.ts',
      }),
      // https://github.com/vuejs/core/pull/3399
      Components({
        // 指定组件位置，默认是src/components
        dirs: ['src/components'],
        // valid file extensions for components.
        // 组件的有效文件扩展名。
        extensions: ['vue'],

        // search for subdirectories
        // 搜索子目录
        deep: true,

        // resolvers for custom components
        // 自定义组件的解析器
        resolvers: [],

        // generate `components.d.ts` global declarations,
        // also accepts a path for custom filename
        // 生成 `components.d.ts` 全局声明，
        // 配置文件生成位置, 也接受自定义文件名的路径
        dts: './src/components.d.ts',

        // Allow subdirectories as namespace prefix for components.
        // 允许子目录作为组件的命名空间前缀。
        directoryAsNamespace: false,

        // 忽略命名空间前缀的子目录路径
        // 当`directoryAsNamespace: true` 时有效
        // Subdirectory paths for ignoring namespace prefixes
        // works when `directoryAsNamespace: true`
        globalNamespaces: [],

        // auto import for directives
        // default: `true` for Vue 3, `false` for Vue 2
        // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
        // To install Babel, run: `npm install -D @babel/parser @babel/traverse`
        // 自动导入指令
        // 默认值：Vue 3 的`true`，Vue 2 的`false`
        // 需要 Babel 来为 Vue 2 进行转换，出于性能考虑，它默认处于禁用状态。
        directives: true,

        // filters for transforming targets
        include: [/.vue$/, /.vue?vue/],
        exclude: [/[\/]node_modules[\/]/, /[\/].git[\/]/, /[\/].nuxt[\/]/],
      }),
      process.env.REPORT
        ? visualizer({
            open: true,
            gzipSize: true,
            filename: path.resolve(__dirname, 'dist/stats.html'),
          })
        : null,
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/main.scss";',
        },
      },
    },
    resolve: {
      // 配置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      https: false,
      proxy: {},
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      minify: 'terser',
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
    },
  }
})
