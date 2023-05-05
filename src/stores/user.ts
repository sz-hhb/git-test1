import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      name: "why",
      age: 18,
      level: 180
    }
  }
})
