<script setup lang="ts" name="Index">
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

defineProps<{ msg: string }>()

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}

const count = ref<number>(0)

// import.meta.env.MODE: {string} 应用运行的模式。
// import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由base 配置项决定。
// import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
// import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
// import.meta.env.SSR: {boolean} 应用是否运行在服务器渲染环境

console.log(import.meta.env.VITE_APP_WEB_URL)
</script>

<template>
  <p>
    Edit
    <code>pages/Index.vue</code>
    to test hot module replacement.
  </p>
  <div>
    用户名:{{ mainStore.name }}
    <br />
    长度:{{ mainStore.nameLength }}
  </div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <hr />
  <p>{{ count }}</p>
  <button @click="() => count++">count++</button>
</template>

<style scoped lang="scss">
code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: $test-color;
}
</style>
