// import { ref, set, reactive } from '@nuxtjs/composition-api'
import { ref, set, reactive } from '@vue/composition-api'

/** @type {import('@nuxt/types').Plugin} */
const myPlugin = (context, inject) => {
  if (process.server) {
    const data = reactive({
      // stuff: ref(true),
      other: ref(false)
    })

    const wrapper = {
      get value() {
        return data
      }
    }

    const state = ref({ old: ref(false) })
    set(state.value, 'new', ref(true))
    console.log('state.value', state.value)

    set(wrapper.value, 'stuff', ref(true))
    console.log('wrapper.value', wrapper.value)

    context.beforeNuxtRender(({ nuxtState }) => {
      nuxtState.bug = wrapper.value
      nuxtState.bug2 = state.value
    })
  } else if (context.nuxtState) {
    console.log('client bug', context.nuxtState.bug)
    console.log('client bug2', context.nuxtState.bug2)
  }
}

export default myPlugin
