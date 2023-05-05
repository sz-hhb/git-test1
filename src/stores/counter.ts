import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { useUserStore } from "./user"

// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 99,
      friends: [
        { id: 111, name: "1" },
        { id: 222, name: "2" },
        { id: 333, name: "3" }
      ]
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    doubleCountAddOne(): number {
      return this.doubleCount + 1
    },
    getFriendById: (state) => {
      return (id: number) => {
        return state.friends.find((item) => item.id === id)
      }
    },
    showMessage(state) {
      const userStore = useUserStore()

      return `name:${userStore.name}-count:${state.count}`
    }
  },
  actions: {
    incrementCount(step: number) {
      this.count += step
    }
  }
})
