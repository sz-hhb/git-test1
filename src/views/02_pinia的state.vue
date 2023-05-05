<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>name: {{ name }}</h1>
    <h1>age: {{ age }}</h1>
    <h1>level: {{ level }}</h1>
    <button @click="changeState">改变</button>
    <button @click="resetState">重置</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()
const { name, age, level } = storeToRefs(userStore)

const changeState = () => {
  // userStore.name = "coder"
  // userStore.age = 12
  // userStore.level = 100

  userStore.$patch({
    name: "coder",
    age: 12,
    level: 100
  })
}

const resetState = () => {
  userStore.$reset()
}
</script>

<style scoped></style>
