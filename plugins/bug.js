import { ref, set, reactive } from '@nuxtjs/composition-api'

/** @type {import('@nuxt/types').Plugin} */
const myPlugin = (context, inject) => {
  if (process.server) {
    const data = reactive({
      // stuff: ref(true)
    })

    const wrapper = {
      get value() {
        return data
      }
    }

    set(wrapper.value, 'stuff', ref(true))

    console.log('data.stuff', wrapper.value.stuff)
    context.beforeNuxtRender(({ nuxtState }) => {
      nuxtState.bug = wrapper.value
    })
  } else if (context.nuxtState) {
    console.log('client', context.nuxtState.bug)
  }
}

export default myPlugin
