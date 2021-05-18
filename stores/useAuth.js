import { ref } from '@nuxtjs/composition-api'
import { defineStore } from 'pinia'

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

export const useAuth = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    stuff: ref('heybbb')
  }),
  actions: {
    async getUser() {
      await wait(500)
    }
  }
})
