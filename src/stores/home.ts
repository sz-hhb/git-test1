import { defineStore } from "pinia"

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: []
    }
  },
  actions: {
    async fetchHomeData() {
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      this.banners = data.data.banner.list
      this.recommends = data.data.recommend.list
    }
  }
})
