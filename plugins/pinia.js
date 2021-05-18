import {
  computed,
  defineNuxtPlugin,
  ref,
  set,
  reactive,
  toRaw
} from '@nuxtjs/composition-api'

export default defineNuxtPlugin(({ pinia }) => {
  pinia.use(({ store }) => {
    if (!Object.hasOwnProperty.call(store.$state, 'status')) {
      const statusRef = ref('Idle')

      set(store.$state, 'status', statusRef)
      set(store, 'status', statusRef)

      // console.log(store._p.state.value)
      // console.log('wrap', reactive(store._p.state.value))

      const loadingRef = computed(() => store.status === 'Loading')
      set(store.$state, 'isLoading', loadingRef)
      set(store, 'isLoading', loadingRef)
    }
  })
})
