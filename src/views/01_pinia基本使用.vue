<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ counterStore.count }}</h1>
    <h1>{{ count }}</h1>
    <button @click="incrementCount">count+1</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useCounterStore } from "@/stores/counter"

const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)

const incrementCount = () => {
  counterStore.count++
}

console.log(counterStore)
</script>

<style scoped></style>
