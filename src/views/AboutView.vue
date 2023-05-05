<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ counterStore.count }}</h1>
    <button @click="changeState">changeState</button>

    <h2>轮播的数据</h2>
    <ul>
      <template v-for="item in homeStore.banners" :key="item">
        <li>{{ item }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useCounterStore } from "@/stores/counter"
import { useHomeStore } from "@/stores/home"

const counterStore = useCounterStore()

const changeState = () => {
  counterStore.incrementCount(10)
}

const homeStore = useHomeStore()

homeStore.fetchHomeData().then((res) => {
  console.log("异步请求操作已完成", res)
})
</script>

<style scoped></style>
