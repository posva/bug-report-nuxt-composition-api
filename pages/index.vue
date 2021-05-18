<template>
  <section>
    <h1>Pinia - Adding New State</h1>

    <pre>{{ JSON.stringify(state, null, 2) }}</pre>

    <button type="button" @click="action">Run Timer</button>
  </section>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { useAuth } from '@/stores/useAuth'

export default defineComponent({
  setup() {
    const auth = useAuth()

    const state = computed(() => ({
      status: auth.status,
      isLoading: auth.isLoading
    }))

    const action = async () => {
      auth.status = 'Loading'

      await auth.getUser()

      auth.status = 'Idle'
    }

    return { state, action }
  }
})
</script>
